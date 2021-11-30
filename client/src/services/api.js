import axios from "axios";
import activity from "../../Server/Model/activityModel";


const activitiesUrl = "http://localHost:8001/activities";
export const allActivities = async (id) => {
    id = id || '';
    return await axios.get(`${activitiesUrl}/${id}`)
}

const addActivity = async (activity) => {
    return await axios.post(`${activitiesUrl}/add`, activity)
}

const updateActivity = async (id, activity) => {
    return await axios.post(`${activitiesUrl}/${id}`, activity)
}

const deleteActivity =  async (id, activity) => {
    return await axios.post(`${activitiesUrl}/${id}`, activity)
}