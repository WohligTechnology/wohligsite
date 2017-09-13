module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    getCandidateByContact: function (req, res) {
        // console.log(req.body);
        if (req.body) {
            Candidate.getCandidateByContact(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {

                }
            })
        }
    },

    getCandidateByEmail: function (req, res) {
        if (req.body) {
            Candidate.getCandidateByEmail(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {

                }
            })
        }
    },

    saveCandidate: function (req, res) {
        if (req.body) {
            Candidate.saveSubmitData(req.body, function (err, data) {
                if (err) {
                    res.json({
                        value: false,
                        data: err
                    });

                } else {
                    req.session.candidate = data;
                    console.log("Candidate Data", req.session.candidate);
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
    },

    saveMailData: function (req, res) {
        if (req.body) {
            Expert.saveMailData(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: "User Not logged in"
            });
        }

    }


};
module.exports = _.assign(module.exports, controller);
