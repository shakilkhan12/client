const Activity = require("../Model/activityModel");
const mongoose = require('mongoose')

exports.allActivities = async (req, res) => {
    try {
       let newActivity = await Activity.find();
        res.json(newActivity)
    }catch(error){
        console.log('error', error)
        res.json({ message: error.message});
    }
}



exports.addActivity = async (req, res) => {
    console.log(req.body)
    const activity = req.body;
    const newActivity = new Activity(activity);
    try {
        newActivity.save();
        res.json(newActivity)
    }catch(error){
        console.log(error)
        res.json({ message: error.message});
    }
}


exports.getActivityById = async (req, res) => {
    const id = req.params.id;
    try {
        const activity =await Activity.findBYId(id);
        res.json(activity);
    }catch(error) {
        res.json({message: error.m})
    }
}



exports.updateActivity = async (req, res) => {
    const activity = req.body;

    const updateActivity = new Activity(activity);
    try {
        await Activity.updateOne({_id: req.params.id}, updateActivity)
        res.json(updateActivity)
    }catch(error){
        res.json({ message: error.message});
    }
}


exports.deleteActivity = async (req, res) => {
    console.log('called')
    try {
        await Activity.findByIdAndRemove(req.params.id)
        res.json('Activity deleted successfully');
    }catch(error){
        res.json({ message: error.message});
    }
}