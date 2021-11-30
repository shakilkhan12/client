const mongoose = require('mongoose')



const schema = mongoose.Schema({
    name: String,
    date: String,
    duration: Number,
    phone: Number,
    description: String,
    activityType: String
});
// autoIncrement.initialize(mongoose.connection);
// schema.plugin(autoIncrement.plugin, 'activity');
const activity= mongoose.model('activity', schema);
module.exports = activity;