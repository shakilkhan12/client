import {useSelector} from "react-redux"
import {Route, Redirect} from "react-router-dom"
const ProtectedRoutes = (props) => {
   const {token} = useSelector(state => state.loginReducer);
   return token ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
) : (
    <Redirect to='/' />
);
}
export default ProtectedRoutes