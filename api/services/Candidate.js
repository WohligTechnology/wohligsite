var schema = new Schema({
    fullname: {
        type: String,
        required: true,
        excel: true,
    },
    email_id: {
        type: String,
        validate: validators.isEmail(),
        excel: "User Email",

    },
    contact_no: {
        type: String,
        default: ""
    },
    message: {
        type: String,
        required: true,
        excel: true,
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Candidate', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

    getCandidateByContact: function (data, callback) {
        Candidate.find(
            {
                contact_no: data.contact
            }
        ).exec(function (err, found) {

            if (err) {

                callback(err, null);
            } else {

                if (found) {
                    console.log("Found", found);
                    callback(null, found);
                } else {
                    callback(null, {
                        message: "No Data Found"
                    });
                }
            }
        })
    },
    getCandidateByEmail: function (data, callback) {
        var eid = data.email_id;
        Candidate.find({
            email: eid
        }

        ).deepPopulate("").exec(function (err, found) {

            if (err) {

                callback(err, null);
            } else {

                if (found) {
                    console.log("Found", found);
                    callback(null, found);
                } else {
                    callback(null, {
                        message: "No Data Found"
                    });
                }
            }
        })
    },

    saveSubmitData: function (data, callback) {
        console.log(data);
        var Candidate = this(data);
        if (data._id) {
            this.findOneAndUpdate({
                // _id: data._id
            }, data).exec(function (err, updated) {
                if (err) {
                    console.log(err);
                    callback(err, null);
                } else if (updated) {
                    callback(null, updated);
                } else {
                    callback(null, {});
                }
            });
        } else {
            Candidate.save(function (err, created) {
                if (err) {
                    callback(err, null);
                } else if (created) {
                    callback(null, created);
                } else {
                    callback(null, {});
                }
            });
        }
    },

    saveMailData: function (data, callback) {
        console.log(data)
        async.waterfall([
            function (cbWaterfall) {
                Candidate.saveData(data, function (err, complete) {
                    if (err) {
                        cbWaterfall(err, null);
                    } else {
                        if (_.isEmpty(complete)) {
                            cbWaterfall(null, []);
                        } else {
                            console.log("complete", complete);
                            cbWaterfall(null, complete);
                        }
                    }
                });
            },
            function (complete, cbWaterfall1) {
                var emailData = {};
                console.log("data: ", data);
                emailData.name = data.fullname;
                emailData.number = data.contact_no;
                emailData.message = data.message;
                emailData.email = "sayali.ghule@wohlig.com";
                emailData.from = data.email_id;
                emailData.filename = "mail.ejs";
                emailData.subject = "User Query Detail";
                console.log("emaildata", emailData);

                Config.email(emailData, function (err, emailRespo) {
                    if (err) {
                        console.log(err);
                        cbWaterfall1(null, err);
                    } else if (emailRespo) {
                        cbWaterfall1(null, emailRespo);
                    } else {
                        cbWaterfall1(null, "Invalid data");
                    }
                });
            },
        ],
            function (err, data2) {
                if (err) {
                    console.log(err);
                    callback(null, []);
                } else if (data2) {
                    if (_.isEmpty(data2)) {
                        callback(null, []);
                    } else {
                        callback(null, data2);
                    }
                }
            });
    },
};
module.exports = _.assign(module.exports, exports, model);