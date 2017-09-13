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
        unique: true
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
        var eid = data.email;
        Candidate.find({
            email_id: eid
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
                _id: data._id
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
        console.log("inside saveMailData api", data.user[0].name);
        var emailData = {};
        console.log("data: ", data);
        emailData.name = data.user[0].name;
        emailData.from = "hr@wohlig.com";
        emailData.email = data.user[0].email;
        emailData.filename = "mail1.ejs";
        emailData.file = pdfdata.name;
        emailData.subject = "User data";
        console.log("emaildata", emailData);

        Config.email(emailData, function (err, emailRespo) {
            if (err) {
                console.log(err);
                callback(null, err);
            } else if (emailRespo) {
                callback(null, emailRespo);
            } else {
                callback(null, "Invalid data");
            }
        });
    },
};
module.exports = _.assign(module.exports, exports, model);