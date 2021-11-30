import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { useHistory } from "react-router";
import {addActivities} from "../redux/actions/actionCreator"
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
function AddNewActivity ()  {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [activityType, setActivityType] = useState('');
 const dispatch = useDispatch();
 const History = useHistory();
  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(`${name}, ${date}, ${duration}, ${phone}, ${description}, ${activityType}`)
      try {
        const res = await dispatch(addActivities({name, date, duration, phone, description, activityType}))
      // History.push("/allExercises");
      } catch (error) {
        
      }
  };

  return (
    <>
      <div
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin5"
        data-sidebartype="full"
        data-sidebar-position="absolute"
        data-header-position="absolute"
        data-boxed-layout="full"
      >
        <Header />
        <LeftSideBar />
        {/* <!-- ============================================================== -->
      <!-- Page wrapper  -->
      <!-- ============================================================== --> */}
        <div className="page-wrapper" style={{ minHeight: "250px" }}>
          {/* <!-- ============================================================== -->
        <!-- Bread crumb and right sidebar toggle -->
        <!-- ============================================================== --> */}
          <div className="page-breadcrumb bg-white">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <h4 className="page-title">New Activity</h4>
              </div>
              <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                <div className="d-md-flex">
                  <ol className="breadcrumb ms-auto">
                    <li>
                      <a href="./dashboard" className="fw-normal">
                        Dashboard
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            {/* <!-- /.col-lg-12 --> */}
          </div>
          {/* <!-- ============================================================== -->
        <!-- End Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Container fluid  -->
        <!-- ============================================================== --> */}
          <div className="container-fluid">
            {/* <!-- ============================================================== -->
          <!-- Start Page Content -->
          <!-- ============================================================== --> */}
            <div className="row">
              <div className="col-md-12">
                <div className="white-box">
                  <h3 className="box-title">Add a New Activity</h3>

                  <div className="card">
                    <div className="card-body">
                      <form className="form-horizontal form-material" onSubmit={handleSubmit}>
                        <div className="form-group mb-4">
                          <label className="col-md-12 p-0" for= 'activityName'>Name</label>
                          <div className="col-md-12 border-bottom p-0">
                            <input
                              type="text"
                              placeholder="Gym"
                              className="form-control p-0 border-0"
                              value= {name}
                              onChange ={ (e) => setName(e.target.value)}
                              minLength = '4'
                              id= 'activityName'
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label for="example-email" className="col-md-12 p-0">
                            Date
                          </label>
                          <div className="col-md-12 border-bottom p-0">
                            <input
                              type="date"
                              placeholder="johnathan@admin.com"
                              className="form-control p-0 border-0"
                              name="example-email"
                              id="example-email"
                              value = {date}
                              onChange = { (e) => setDate(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label className="col-md-12 p-0" for = "activityDuration">
                            Duration In mints
                          </label>
                          <div className="col-md-12 border-bottom p-0">
                            <input
                            id= 'activityDuration'
                              type="number"
                              value= {duration}
                              className="form-control p-0 border-0"
                              onChange = { (e) => setDuration(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label className="col-md-12 p-0" for = 'clientPhone'>Phone No</label>
                          <div className="col-md-12 border-bottom p-0">
                            <input
                              id = 'clientPhone'
                              type="number"
                              placeholder="+92 03xx-xxxxxxx"
                              className="form-control p-0 border-0"
                              value = {phone}
                              onChange= {(e) => setPhone(e.target.value)}
                              // pattern= "[0-9]{5}[-][0-9]{7}[-][0-9]{1}"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label className="col-md-12 p-0" for= 'activityDes'>Description</label>
                          <div className="col-md-12 border-bottom p-0">
                            <textarea
                            id = 'activityDes'
                              rows="5"
                              className="form-control p-0 border-0"
                              value = {description}
                              onChange = { (e) => setDescription(e.target.value)}
                              minLength = '10'
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label className="col-sm-12">Activity Type</label>

                          <div className="col-sm-12 border-bottom">
                            <select
                              className="
                              form-select
                              shadow-none
                              p-0
                              border-0
                              form-control-line
                            "
                            value = {activityType}
                            onChange={(e) => setActivityType(e.target.value)}
                            >
                              <option value="Run">Run</option>
                              <option value="Bicycle Ride">Bicycle Ride</option>
                              <option value="Swim">Swim</option>
                              <option value="Walk">Walk</option>
                              <option value="Hike">Hike</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <div className="col-sm-12">
                            <button type="submit" className="btn btn-success"
                               onChange = { (e) => setActivityType(e.target.value)}>
                               Add Activity</button>
                            {/* <a
                              href="./allExercises"
                              className="btn btn-success"
                            >
                              <i className="fas fa-plus"></i>
                              Add Activity
                            </a> */}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ============================================================== -->
          <!-- End PAge Content -->
          <!-- ============================================================== -->
          <!-- ============================================================== -->
          <!-- Right sidebar -->
          <!-- ============================================================== -->
          <!-- .right-sidebar -->
          <!-- ============================================================== -->
          <!-- End Right sidebar -->
          <!-- ============================================================== --> */}
          </div>
          {/* <!-- ============================================================== -->
        <!-- End Container fluid  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- footer -->
        <!-- ============================================================== --> */}
          <footer className="footer text-center">2021 © Fitness Guru</footer>
          {/* <!-- ============================================================== -->
        <!-- End footer -->
        <!-- ============================================================== --> */}
        </div>
        {/* <!-- ============================================================== -->
      <!-- End Page wrapper  --> */}
      </div>
    </>
  );
}

export default AddNewActivity;
