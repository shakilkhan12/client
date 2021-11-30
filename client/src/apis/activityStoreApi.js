import axios from "axios";


const url = "http://localhost:8001";

export const fetchActivity = () => axios.get(url);
export const addActivity = (newActivity) => axios.post(url, newActivity);
export const updateActivity = (id) => axios.patch(`${url}/${id}`, updateActivities);
export const deleteActivity = (id, deleteActivity) => axios.patch(`${url}/${id}`, deleteActivity);