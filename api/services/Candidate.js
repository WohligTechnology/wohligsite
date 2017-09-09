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
var model = {};
module.exports = _.assign(module.exports, exports, model);