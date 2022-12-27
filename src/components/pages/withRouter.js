import { useLocation, useHistory, useParams } from "react-router-dom";

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useHistory();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	}

	return ComponentWithRouterProp;
}

export default withRouter;
