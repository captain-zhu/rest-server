/**
 * Created by zhuyongxuan1 on 16/3/18.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leaderScheme = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

var Leadership = mongoose.model("Leadership", leaderScheme);

module.exports = Leadership;