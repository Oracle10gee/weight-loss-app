import React, { useState } from "react";
import Girl from "../assets/woman.png";
import { AiOutlineFire } from "react-icons/ai";
import { RiFootprintLine } from "react-icons/ri";
import { IoIosBicycle } from "react-icons/io";
import { BsPlayCircle } from "react-icons/bs";
import { RiHeartPulseLine } from "react-icons/ri";
import { TbReportMedical } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiOutlinePlus } from "react-icons/ai";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Progress,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import NavBar from "./navbar";

const LandingPage = () => {
  const data = [
    {
      name: "A",
      uv: 4,
      pv: 2,
      amt: 2,
    },
    {
      name: "B",
      uv: 3,
      pv: 1,
      amt: 2,
    },
    {
      name: "C",
      uv: 2,
      pv: 9,
      amt: 2,
    },
    {
      name: "D",
      uv: 3,
      pv: 4,
      amt: 2,
    },
    {
      name: "E",
      uv: 2,
      pv: 5,
      amt: 2,
    },
    {
      name: "F",
      uv: 2,
      pv: 4,
      amt: 2,
    },
    {
      name: "G",
      uv: 3,
      pv: 4,
      amt: 2,
    },
  ];

  // Modal open state
  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  return (
    <div>
      <div className="content p-3">
        <div className="d-flex justify-content-between mt-3">
          <div className="py-4">
            <h3 style={{ fontWeight: 700 }}>My Activity</h3>
          </div>
          <div>
            <img className="girl py-3" src={Girl} alt="avatar" />
          </div>
        </div>
        <div className="content-2 d-flex mt-5">
          <div
            className="myDIV shadow-sm p-3 mb-5 bg-white d-flex"
            style={{ borderRadius: 30, width: "120%", backgroundColor: "#fff" }}
          >
            <div style={{ color: "#7B66FF" }}>
              <AiOutlineFire size={25} className="mt-3" />
            </div>
            <div className="mx-3">
              <h3 style={{ fontWeight: 700 }}>866</h3>
              <p style={{ color: "#c0c0c0", fontWeight: 600, fontSize: 11 }}>
                Calories burn
              </p>
              <Progress value={50} animated striped color="success" />
            </div>
          </div>
          <div
            className="myDIV mx-2 shadow-sm p-3 mb-5 bg-white d-flex"
            style={{ borderRadius: 30, width: "120%", backgroundColor: "#fff" }}
          >
            <div style={{ color: "#7B66FF" }}>
              <RiFootprintLine size={25} className="mt-3" />
            </div>
            <div className="mx-3">
              <h3 style={{ fontWeight: 700 }}>7 579</h3>
              <p style={{ color: "#c0c0c0", fontWeight: 600, fontSize: 11 }}>
                Steps
              </p>
              <Progress value={80} animated striped color="success" />
            </div>
          </div>
        </div>
        <div className="content-3">
          <div className="d-flex justify-content-between">
            <div className="">
              <h4 style={{ fontWeight: 700 }}>Goal for Week</h4>
            </div>
            <div>
              <p style={{ fontWeight: 500, color: "#c0c0c0" }}>42 of 54</p>
            </div>
          </div>
          <div className="charts">
            <Card
              className="py-4 shadow p-3 mb-5 bg-blue"
              style={{
                fontWeight: 500,
                color: "#c0c0c0",
                backgroundColor: "#7B66FF",
                borderRadius: 20,
              }}
            >
              <div>
                <ResponsiveContainer width={"100%"} height={150}>
                  <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#c3ff4d" />
                    <Bar dataKey="uv" fill="#c7c7c7" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
        <div className="content-4 mt-3">
          <div className="d-flex justify-content-between">
            <div className="">
              <h4 style={{ fontWeight: 700 }}>Trending Workouts</h4>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 500,
                  color: "#c0c0c0",
                  textDecoration: "underline",
                }}
              >
                see all
              </p>
            </div>
          </div>
          <Card
            className="p-3 shadow-sm p-3 bg-white"
            style={{ borderRadius: 20 }}
          >
            <Row>
              <Col md="12">
                <div className="d-flex justify-content-between">
                  <div>
                    <p>
                      <IoIosBicycle size={25} style={{ color: "#7B66FF" }} />
                      <span className="mx-2" style={{ fontWeight: 600 }}>
                        Muscle Builder
                      </span>
                    </p>
                  </div>
                  <div>
                    <BsPlayCircle size={30} style={{ color: "c3ff4d" }} />
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </div>

      <Modal
        isOpen={modal}
        toggle={toggle}
        modalTransition={{ timeout: 1000 }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalBody className="p-4">
          <div>
            <Card
              className="p-3 shadow p-3 mb-3 bg-white"
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
              className="p-3 shadow p-3 mb-3 bg-white"
              style={{ borderRadius: 20 }}
            >
              <p>
                <TbReportMedical size={25} style={{ color: "#7B66FF" }} />
                <span className="mx-2" style={{ fontWeight: 600 }}>
                  Add weight measurement
                </span>
              </p>
            </Card>
            <Card
              className="p-3 shadow p-3 mb-3 bg-white"
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
              className="p-3 shadow p-3 mb-3 bg-white"
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
      </Modal>
      <div>
        <div className="parent">
          <Button className="btn" color="primary" onClick={toggle}>
            <AiOutlinePlus size={30} />
          </Button>
        </div>
        <NavBar className="nav" />
      </div>
    </div>
  );
};

export default LandingPage;
