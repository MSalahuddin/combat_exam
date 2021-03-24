import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";

import CourseDetails from "./CourseDetails";
import EnrollModal from "./EnrollMe";
import "./index.scss";

import { fetchLectureSchedules } from "./../../redux";

const RoomData = ({ serialNo, showDetails, data, setDetails, showEnroll }) => {
  const action = () => {
    setDetails({
      details: data.course_details,
      instructorName: data.instructor,
      startDate: data.start_date,
    });
    showDetails();
  };
  return (
    <tr>
      <td>{serialNo}</td>
      <td>{data.job_title}</td>
      <td onClick={action}>
        <span className="cursor-pointer">Details</span>
      </td>
      <td>{data.instructor}</td>
      <td>{data.start_date}</td>
      <td>{data.end_date}</td>
      <td>{data.fees}</td>
      <td>
        <Button color="success" onClick={showEnroll}>
          Enroll Me
        </Button>
      </td>
    </tr>
  );
};

const Main = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState(null);

  const lectureSchedules = useSelector((state) => state.room.lectureSchedules);

  useEffect(() => {
    lectureSchedules.data.length < 1 && dispatch(fetchLectureSchedules());
  }, [dispatch, lectureSchedules.data.length]);

  const onClosedModal = () => {
    setSelectedDetails(null);
  };
  const toggle = () => setShowModal(!showModal);
  const setDetails = (e) => {
    setSelectedDetails(e);
  };

  //enroll
  const toggleEnroll = () => setShowEnrollModal(!showEnrollModal);

  if (lectureSchedules.loading) {
    return (
      <div className="py-5 text-center">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="room mb-5">
      <CourseDetails showModal={showModal} toggle={toggle} onClosed={onClosedModal} details={selectedDetails} />
      <EnrollModal isOpen={showEnrollModal} toggle={toggleEnroll} />
      <div className="bg__secondary">
        <div className="container text-center">
          <div className="room__header bg__primary mx-auto">
            <h2 className="font-weight-bold py-3 text-white">
              Welcome to <span className="text-uppercase">combat exam</span> Lectures Room
            </h2>
          </div>
          <h1 className="text__primary-dark mt-4 pb-2">Lectures Schedule</h1>
        </div>
      </div>

      <div className="container-xl overflow-auto">
        {lectureSchedules.data.length > 0 && (
          <table className="room__table">
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Job Title</th>
                <th>Course Details</th>
                <th>Instructor</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Fees(RS)</th>
                <th>Enrolment</th>
              </tr>
            </thead>
            <tbody>
              {lectureSchedules.data.map((schedule, index) => (
                <RoomData
                  key={"room" + index}
                  serialNo={index + 1}
                  showDetails={toggle}
                  data={schedule}
                  setDetails={setDetails}
                  showEnroll={toggleEnroll}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Main;
