import { createStore, applyMiddleware, compose} from "redux";
import reducers from './reducers/index';
import thunk from "redux-thunk";

const composeEnhancers = window.__Redux_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store = createStore(
    reducers,composeEnhancers(applyMiddleware(thunk))
   
);

export default store;


