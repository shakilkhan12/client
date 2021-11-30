const express = require('express');
const { allActivities, addActivity, getActivityById, updateActivity, deleteActivity } = require('../controller/activityController');


const route =  express.Router();

route.get('/allexercises', allActivities);
route.post('/addNewActivity', addActivity);
route.get('/:id', getActivityById);
route.put('/:id', updateActivity );
route.delete('/:id', deleteActivity)

module.exports =  route;