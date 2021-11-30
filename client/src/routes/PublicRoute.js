import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoutes = (props) => {
    const { token } = useSelector((state) => state.loginReducer);
	return token ? (
		<Redirect to='/dashboard' />
	) : (
		<Route path={props.path} exact={props.exact} component={props.component} />
	);
}
export default PublicRoutes
