import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import { FaTrash, FaEdit } from "react-icons/fa";
import { BiCheckbox } from "react-icons/bi";
import {fetchActivities, deleteActivities} from "../redux/actions/actionCreator"

function AllExercises() {
  const dispatch = useDispatch();
  const {activities} = useSelector(state => state.allactivities);
  console.log(activities)
  useEffect(() => {
    dispatch(fetchActivities());
  }, [])
  const deleteItem = async id => {
    alert(id)
    await dispatch(deleteActivities(id));
    dispatch(fetchActivities());

  }
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
        <div className="page-wrapper">
          {/* <!-- ============================================================== -->
        <!-- Bread crumb and right sidebar toggle -->
        <!-- ============================================================== --> */}
          <div className="page-breadcrumb bg-white">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <h4 className="page-title">All Exercises</h4>
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
              <div className="col-sm-12">
                <div className="white-box">
                  <h3 className="box-title">Basic Table</h3>
                  <a
                    href="./allExercises"
                    className="btn btn-danger position-relative text-white my-auto"
                  >
                    Pending
                    <span
                      className="
                      position-absolute
                      top-0
                      start-100
                      translate-middle
                      badge
                      rounded-pill
                      bg-primary
                    "
                    >
                      5<span className="visually-hidden">unread messages</span>
                    </span>
                  </a>

                  <div className="table-responsive">
                   {activities.length > 0 ?  <table className="table text-nowrap">
                      <thead>
                        <tr>
                          <th className="border-top-0">#</th>
                          <th className="border-top-0">Activity Name</th>
                          <th className="border-top-0">Description</th>
                          <th className="border-top-0">Activity Type</th>
                          <th className="border-top-0">Duration in Mints.</th>
                          <th className="border-top-0">Date</th>

                          <th className="border-top-0">CRUD Operations</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activities.map((activity, index) => (
                          <tr key={activity._id}>
                          <td>{index+1}</td>
                          <td>{activity.name}</td>
                          <td>{activity.description}</td>
                          <td>{activity.activityType}</td>
                          <td>{activity.duration}</td>
                          <td>{activity.date}</td>
                          <td>
                            <button
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                             onClick={() => deleteItem(activity._id)}
                              aria-expanded="false"
                            >
                              <FaTrash />
                            </button>
                            <Link
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              to={`/editActivity/${activity._id}`}
                              aria-expanded="false"
                            >
                              <FaEdit />
                            </Link>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="basic-table.html"
                              aria-expanded="false"
                            >
                              <BiCheckbox />
                            </a>
                          </td>
                        </tr>
                        ))}
                        
                       
                      
                      </tbody>
                    </table> : 'No activites'}
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

export default AllExercises;
