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
        required: true,
        excel: true,
    },
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
var model = {};
module.exports = _.assign(module.exports, exports, model);