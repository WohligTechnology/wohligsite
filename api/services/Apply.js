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
        unique: true
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
        })
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
    }
};
module.exports = _.assign(module.exports, exports, model);