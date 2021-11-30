import React, {useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import {updateActivities} from "../redux/actions/actionCreator"

function EditActivity() {
  const {activity, update} = useSelector(state => state.allactivities);
  const [state, setState] = useState({
    name: '',
    date: '',
    duration: '',
    phone: '',
    description: '',
    activityType: ''
  })
  const [data, setData] = useState({})
  const dispatch = useDispatch();
  const {id} = useParams();
  const History = useHistory();
  const updateForm = async e => {
    e.preventDefault();
    console.log('update')
    const res = await dispatch(updateActivities(state));
    History.push("/allExercises");
  }
  useEffect(() => {
    if(update) {
      console.log('Yah run')
       setState(activity)
       setData(activity)
       dispatch({type: 'RESET_UPDATE'});
       
     }
  }, [update])
  
  useEffect(() => {
    dispatch({type: 'EDIT_FORM', payload: id});
  }, [id])
  console.log(state, update)
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
                <h4 className="page-title">Edit Activity</h4>
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
                  <h3 className="box-title">Edit Activity {data.name}</h3>

                  <div className="card">
                    <div className="card-body">
                      <form className="form-horizontal form-material" onSubmit={updateForm}>
                        <div className="form-group mb-4">
                          <label className="col-md-12 p-0">Name</label>
                          <div className="col-md-12 border-bottom p-0">
                            <input
                              type="text"
                              placeholder="Gym"
                              className="form-control p-0 border-0"
                              value={state.name}
                              onChange={(e) => setState({...state, name: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label for="dateExample" className="col-md-12 p-0">
                            Date
                          </label>
                          <div className="col-md-12 border-bottom p-0">
                            <input
                              type="date"
                              placeholder="johnathan@admin.com"
                              className="form-control p-0 border-0"
                              name="dateExample"
                              id="dateExample"
                              value={state.date}
                              onChange={(e) => setState({...state, date: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label className="col-md-12 p-0">
                            Duration In mints
                          </label>
                          <div className="col-md-12 border-bottom p-0">
                            <input
                              type="number"
                              className="form-control p-0 border-0"
                              value={state.duration}
                              onChange={(e) => setState({...state, duration: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label className="col-md-12 p-0">Phone No</label>
                          <div className="col-md-12 border-bottom p-0">
                            <input
                              type="text"
                              placeholder="123 456 7890"
                              className="form-control p-0 border-0"
                              value={state.phone}
                              onChange={(e) => setState({...state, phone: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label className="col-md-12 p-0">Description</label>
                          <div className="col-md-12 border-bottom p-0">
                            <textarea
                              rows="5"
                              className="form-control p-0 border-0"
                              value={state.description}
                              onChange={(e) => setState({...state, description: e.target.value})}
                            >
                            </textarea>
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
                            >
                              <option>Run</option>
                              <option className="active">Bicycle Ride</option>
                              <option>Swim</option>
                              <option>Walk</option>
                              <option>Hike</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <div className="col-sm-12">
                            <button type="submit"
                              
                              className="btn btn-success"
                            >
                              <i className="fas fa-plus"></i>
                              Update
                            </button>
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
      <!-- End Page wrapper  -->
      <!-- ============================================================== --> */}
      </div>
    </>
  );
}

export default EditActivity;
