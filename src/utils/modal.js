import React from "react";
import { ModalBody, Card } from "reactstrap";
import { Link } from "react-router-dom";
import { IoIosBicycle } from "react-icons/io";
import { RiHeartPulseLine } from "react-icons/ri";
import { TbReportMedical } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const ModalHandler = () => {
  return (
    <div>
      <ModalBody className="p-4">
        <div>
          <Card
            className="cardlink p-3 shadow p-3 mb-3 bg-white"
            style={{ borderRadius: 20 }}
          >
            <p>
              <RiHeartPulseLine size={25} style={{ color: "#7B66FF" }} />
              <span className="mx-2" style={{ fontWeight: 600 }}>
                Add blood pressure
              </span>
            </p>
          </Card>
          <Card
            className="cardlink p-3 shadow p-3 mb-3 bg-white"
            style={{ borderRadius: 20 }}
          >
            <Link to="/add-weight" className="links">
              <p>
                <TbReportMedical size={25} style={{ color: "#7B66FF" }} />
                <span className="mx-2" style={{ fontWeight: 600 }}>
                  Add weight measurement
                </span>
              </p>
            </Link>
          </Card>
          <Card
            className="cardlink p-3 shadow p-3 mb-3 bg-white"
            style={{ borderRadius: 20 }}
          >
            <p>
              <IoIosBicycle size={25} style={{ color: "#7B66FF" }} />
              <span className="mx-2" style={{ fontWeight: 600 }}>
                Add Activity
              </span>
            </p>
          </Card>
          <Card
            className="cardlink p-3 shadow p-3 mb-3 bg-white"
            style={{ borderRadius: 20 }}
          >
            <p>
              <TfiHeadphoneAlt size={25} style={{ color: "#7B66FF" }} />
              <span className="mx-2" style={{ fontWeight: 600 }}>
                Track my workout
              </span>
            </p>
          </Card>
        </div>
      </ModalBody>
    </div>
  );
};

export default ModalHandler;
