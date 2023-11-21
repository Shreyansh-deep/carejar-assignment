import React, { useEffect, useState } from "react";
import "./DoctorsList.css";
import { IoMdCalendar } from "react-icons/io";
import { IoIosThumbsUp } from "react-icons/io";
import { faker } from '@faker-js/faker';
import { useNavigate, useParams } from "react-router-dom";
import { getDepartmentFromId } from "../../util/department.util";
import { getDepartments } from "../../service/departmentServices";

const DoctorsList = () => {
  const [departmentList, setDepartmentList] = useState([]);
  const arr = [1, 2, 3, 4];
  const navigate = useNavigate()
  const params= useParams()
  useEffect(() => {
    const fetch = async () => {
      const data = await getDepartments();
      setDepartmentList(data);
    };
    fetch();
  }, []);
  if(!departmentList.length) return 
  return (
    <div>
      <button onClick={() => navigate("/")} className="navigate-btn">Back to Previous Page</button>
      {params.department && arr.map(() => {
      const name = faker.person.fullName()
        return (
          <div>
            <div className="doctorList-main">
              <img
                src={faker.image.url()}
                className="doctor-image"
                alt="doctor-image"
              />
              <div className="doctor-detail-container">
                <p className="doctor-name">Dr. {name}</p>
                <p className="speciality">{getDepartmentFromId(params.department, departmentList).department}</p>
                <p className="experince">10 Years of experience overall</p>
                <p className="address">{faker.location.streetAddress()} - {name}'s Clinic</p>
                <p className="fee">₹200 Consultation fee at clinic</p>
                <hr style={{ color: "#f4f0ec" }} />
                <div className="review-container">
                  <button className="percentage-btn"><IoIosThumbsUp /> 100%</button>
                  <u>20 Patient Stories</u>
                </div>
              </div>
              <div className="button-container">
                <p className="availability">
                  <IoMdCalendar />
                  Available Today
                </p>
                <button className="booking-button">
                  <span style={{ fontWeight: 600 }}>Book Appointment</span> <br />
                  No Booking Fee
                </button>
              </div>
            </div>
            <hr style={{ color: "#f4f0ec" }} />
          </div>
        )
      })}
    </div>
  );
};

export default DoctorsList;
