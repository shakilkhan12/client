import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  //Route,
  //Link,
  NavLink,
 // Redirect,
  withRouter,
} from "react-router-dom";
import { useHistory } from "react-router";
import {useDispatch} from "react-redux"
import AuthTypes from "../redux/constants/authTypes";
function LeftSideBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const logout = (e) => {
      e.preventDefault();
      dispatch({type: AuthTypes.REMOVE_TOKEN});
  }
  return (
    <>
      <Router>
        <Switch>
          {/* <!-- ============================================================== -->
      <!-- Left Sidebar - style you can find in sidebar.scss  -->
      <!-- ============================================================== --> */}
          <aside className="left-sidebar" data-sidebarbg="skin6">
            {/* <!-- Sidebar scroll--> */}
            <div className="scroll-sidebar">
              {/* <!-- Sidebar navigation--> */}
              <nav className="sidebar-nav">
                <ul id="sidebarnav">
                  {/* <!-- User Profile--> */}
                  <li className="sidebar-item pt-2">
                    <NavLink
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      to="/dashboard"
                      aria-expanded="false"
                      onClick={() => history.push("/dashboard")}
                    >
                      <i className="far fa-clock" aria-hidden="true"></i>
                      <span className="hide-menu">Dashboard</span>
                    </NavLink>
                  </li>
                  <li className="sidebar-item">
                    <NavLink
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      to="/profile"
                      aria-expanded="false"
                      onClick={() => history.push("/profile")}
                    >
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <span className="hide-menu">Profile</span>
                    </NavLink>
                  </li>
                  <li className="sidebar-item">
                    <NavLink
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      to="/allexercises"
                      aria-expanded="false"
                      onClick={() => history.push("/allexercises")}
                    >
                      <i className="fa fa-table" aria-hidden="true"></i>
                      <span className="hide-menu">All Exercises</span>
                    </NavLink>
                  </li>

                  <li className="sidebar-item">
                    <NavLink
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      to="/addNewActivity"
                      aria-expanded="false"
                      onClick={() => history.push("/addNewActivity")}
                    >
                      <i className="fas fa-plus" aria-hidden="true"></i>
                      <span className="hide-menu">Add New Activity</span>
                    </NavLink>
                  </li>
                  <li className="sidebar-item">
                    <NavLink
                      className="sidebar-link waves-effect waves-dark sidebar-link"
                      to="/editActivity"
                      aria-expanded="false"
                      onClick={() => history.push("/editActivity")}
                    >
                      <i className="fas fa-edit" aria-hidden="true"></i>
                      <span className="hide-menu">Edit Activity</span>
                    </NavLink>
                  </li>
                  <li className="text-center p-20 logout-btn">
                    <button
                     
                      className="btn d-grid btn-danger text-white"
                      onClick={logout}
                    >
                      {/* <Redirect to="/" /> */}
                      Logout
                    </button>
                  </li>
                </ul>
              </nav>
              {/* <!-- End Sidebar navigation --> */}
            </div>
            {/* <!-- End Sidebar scroll--> */}
          </aside>
          {/* <!-- ============================================================== -->
      <!-- End Left Sidebar - style you can find in sidebar.scss  -->
      <!-- ============================================================== --> */}
        </Switch>
      </Router>
    </>
  );
}

export default withRouter(LeftSideBar);
