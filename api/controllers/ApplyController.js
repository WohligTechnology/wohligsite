module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {

    getApplicantWithResume: function (req, res) {
        if (req.body) {
            Apply.getApplicantWithResume(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },

    getApplicantAsDeveloper: function (req, res) {
        if (req.body) {
            Apply.getApplicantAsDeveloper(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getApplicantByExperience: function (req, res) {
        if (req.body) {
            Apply.getApplicantByExperience(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },

    saveApply: function (req, res) {
        if (req.body) {
            Apply.saveSubmitData(req.body, function (err, data) {
                if (err) {
                    res.json({
                        value: false,
                        data: err
                    });

                } else {
                    req.session.apply = data;
                    console.log("Apply Data", req.session.apply);
                    res.json({
                        value: true,
                        data: data
                    });
                }
            });
        } else {
            res.json({
                value: false,
                data: "Invalid Request"
            });
        }
    }
};
module.exports = _.assign(module.exports, controller);
