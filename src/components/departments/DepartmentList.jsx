import React, { useEffect, useState } from "react";
import "./DepartmentList.css";
import { getDepartments } from "../../service/departmentServices";
import { useNavigate } from "react-router-dom";

const DepartmentList = () => {
  const navigate = useNavigate()
  const [departmentList, setDepartmentList] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await getDepartments();
      setDepartmentList(data);
    };
    fetch();
  }, []);
  return (
    <div className="main">
      <h2 className="title">
        Book an appoinment for an in-clinic consultation
      </h2>
      <p className="sub-title">
        Find experienced doctors across all specialties
      </p>
      <div className="departments-list">
        {departmentList &&
          departmentList.map((data) => (
            <div className="department-container" onClick={() => navigate(`${data.id}`)} >
              <img
                src={data.imgUrl}
                style={{ width: "300px" }}
                className="department-thumbnail"
                alt=""
              />
              <h4 className="department-name">{data.department}</h4>
              <p className="department-description">{data.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DepartmentList;
