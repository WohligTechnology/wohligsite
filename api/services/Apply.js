var schema = new Schema({
    firstname: {
        type: String,
        required: true,
        excel: true,
    },
    lastname: {
        type: String,
        required: true,
        excel: true,
    },
    email: {
        type: String,
        validate: validators.isEmail(),
        excel: "User Email",

    },
    mobile: {
        type: String,
        default: ""
    },
    designation: {
        type: String,
        default: "Developer",
        enum: ['Developer', 'Designer', 'Tester']
    },
    experience: {
        type: String,
        default: "Fresher",
        enum: ['Fresher', 'less than 1 year', '1-2 years', '2-3 years', '3-4 years', '4-5 years', 'more than 5 years']
    },
    // experience: {
    //     type: String,
    //     required: true,
    //     excel: true,
    // },
    notice_period: {
        type: String,
        required: true,
        excel: true,
    },
    current_ctc: {
        type: String,
        required: true,
        excel: true,
    },
    expected_ctc: {
        type: String,
        required: true,
        excel: true,
    },
    resume: {
        type: String,
        default: "",
        excel: [{
            name: "Resume Val"
        }, {
            name: "Resume String",
            modify: function (val, data) {
                return "http://abc/" + val;
            }
        }, {
            name: "Resume Kebab",
            modify: function (val, data) {
                return data.name + " " + moment(data.dob).format("MMM DD YYYY");
            }
        }]
    },
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Apply', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

    getApplicantWithResume: function (data, callback) {
        Apply.find(
            {


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

    getApplicantAsDeveloper: function (data, callback) {
        Apply.find(
            {

                designation: data.c
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

    getApplicantByExperience: function (data, callback) {
        Apply.find(
            {

                experience: "fresher"
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
        });
    },

    saveSubmitData: function (data, callback) {
        console.log(data);
        var Apply = this(data);
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
            Apply.save(function (err, created) {
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
        async.waterfall([
            function (cbWaterfall) {
                Apply.saveData(data, function (err, complete) {
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
                emailData.firstname = data.firstname;
                emailData.lastname = data.lastname;
                emailData.mobile = data.mobile;
                emailData.designation = data.designation;
                emailData.experience = data.experience;
                emailData.notice = data.notice_period;
                emailData.current = data.current_ctc;
                emailData.expected = data.expected_ctc;
                emailData.resume = data.resume;
                emailData.email = "priyanka.satim@wohlig.com";
                emailData.from = data.email;
                emailData.filename = "mail2.ejs";
                emailData.subject = "User apply Details";
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
    }
    
};
module.exports = _.assign(module.exports, exports, model);