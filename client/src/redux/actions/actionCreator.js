// import activityStoreApi from "../../apis/activityStoreApi";
import axios from "axios";
import {ActionTypes} from "../constants/actionType";

const url = "http://localhost:8001/"
export const fetchActivities = () => {
      return async (dispatch) => {
        const res = await axios.get('/allexercises');
        console.log(res.data)
        dispatch({type:ActionTypes.FETCH_ACTIVITIES, payload:res.data})
      }
        
    }

export const addActivities = (activities) => {
    console.log('action:', activities)
    return async (dispatch) => {
        try {
            const {data} = await axios.post('/addNewActivity', activities);
            console.log(data)
            return {
                type: ActionTypes.EDIT_ACTIVITIES,
                payload: data,
            }
        } catch (error) {
            console.log(error);
        }
        
    }
    



}
export const updateActivities = (activities) => {
    return async (dispatch) => {
    try {
        const {data} = await axios.put(`/${activities._id}`, activities);
        return {
            type: ActionTypes.UPDATE_ACTIVITIES,
            // payload: activities,
        };
    } catch (error) {
        
    }
    }
    

};


export const deleteActivities = (id) => {
    console.log('action:', id)
    return async (dispatch) => {
        try {
            const {data} = await axios.delete(`/${id}`);
            return {
                type: ActionTypes.DELETE_ACTIVITIES,
                payload: data,
            };
        } catch (error) {
            
        }
    }

};
