import { ActionTypes } from "../constants/actionType";


const initialState =  {
    activities: [],
    activity: {},
    update: false
};

export const activityReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.EDIT_ACTIVITIES:
          return { ...state, activities: payload}
          case ActionTypes.FETCH_ACTIVITIES:
            return { ...state, activities: payload}
          case 'EDIT_FORM': 
          const activity = state.activities.find(activity => activity._id == payload);
          if(activity) {
            return {...state, activity: activity, update: true}
          }
          case 'RESET_UPDATE': 
          return {...state, update: false}
          case 'RESET_FORM': 
          return {...state, activity: {}}
         default: 
         return state;
    }
}
