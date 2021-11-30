import "./App.css";
import "./index.css";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Main from "./components/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route
  //Link,
  //NavLink
} from "react-router-dom";
import Profile from "./components/Profile";
//import LeftSideBar from "./components/LeftSideBar";
import AllExercises from "./components/AllExercises";
import AddNewActivity from "./components/AddNewActivity";
import EditActivity from "./components/EditActivity";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import PublicRoutes from "./routes/PublicRoute";
// import Main from "./components/Main";
function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Main /> */}
      {/* <ForgotPassword /> */}
      {/* <LeftSideBar /> */}
      <Router>
        <Switch>
          <PublicRoutes exact path="/" component={Login} />
          <Route path="/forgotPassword">
            <ForgotPassword />
          </Route>
          <ProtectedRoutes path="/dashboard" component={Main} />          
          <ProtectedRoutes path="/profile" component={Profile} />
          <ProtectedRoutes path="/allExercises" component={AllExercises} />
          <Route path="/addNewActivity" component={AddNewActivity} />
          <Route path="/editActivity/:id" component={EditActivity} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
