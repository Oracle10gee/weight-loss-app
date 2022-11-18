import React, { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import { FiRefreshCcw } from "react-icons/fi";
import { GoArrowUp } from "react-icons/go";
import { GoPrimitiveDot } from "react-icons/go";
import ModalHandle from "../utils/modal";
import { BarChart, Bar, Tooltip, Legend, LineChart, Line } from "recharts";
import { Row, Col, Button, Card, Progress, Modal } from "reactstrap";
import NavBar from "./navbar";

const History = () => {
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
        <div className="d-flex justify-content-between mt-4">
          <div className="">
            <h3 style={{ fontWeight: 700 }}>History</h3>
          </div>
          <div>
            <FiRefreshCcw size={30} />
          </div>
        </div>
        <div className="mt-5">
          <h4 style={{ fontWeight: 700 }}>Monday, 11 July</h4>
        </div>
        <div className="content-2 mt-2">
          <Card
            className="p-2 shadow p-3 mb-5 bg-white"
            style={{
              borderRadius: 20,
            }}
          >
            <Row>
              <Col md="12">
                <p>Weight</p>
                <div className="d-flex justify-content-between">
                  <div>
                    <h1 style={{ fontWeight: 900, fontSize: 35 }}>
                      52,3{" "}
                      <span style={{ color: "#c7c7c7", fontSize: "1rem" }}>
                        kg
                      </span>
                    </h1>
                  </div>
                  <div>
                    {/* <ResponsiveContainer width="50%" height={100}> */}
                    <LineChart
                      width={200}
                      height={100}
                      data={data}
                      syncId="anyId"
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      {/* <CartesianGrid strokeDasharray="3 3" /> */}
                      {/* <XAxis dataKey="name" /> */}
                      {/* <YAxis /> */}
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                    </LineChart>
                    {/* </ResponsiveContainer> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
        <div className="content-3">
          <Card
            className="p-2 shadow p-3 mb-5 bg-white"
            style={{
              borderRadius: 20,
            }}
          >
            <Row>
              <Col md="12">
                <div className="d-flex justify-content-between">
                  <p>BMI</p>
                  <p style={{ fontWeight: 500, color: "#c0c0c0" }}>
                    17.3 <GoArrowUp size={15} style={{ color: "#7B66FF" }} />
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <Progress
                    style={{ width: 100 }}
                    value={50}
                    animated
                    striped
                    color="success"
                  />
                  <Progress
                    style={{ width: 100 }}
                    value={80}
                    animated
                    striped
                    color="#7B66FF"
                  />
                  <Progress
                    style={{ width: 100 }}
                    value={80}
                    animated
                    striped
                    color="info"
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <p style={{ fontWeight: 500, color: "#c0c0c0" }}></p>
                  <p style={{ fontWeight: 700, color: "#000" }}>18.5</p>
                  <p style={{ fontWeight: 700, color: "#000" }}>25</p>
                </div>
                <div className="d-flex mt-2">
                  <p style={{ fontWeight: 600, color: "#c0c0c0" }}>
                    <GoPrimitiveDot size={15} style={{ color: "green" }} />
                    Low
                  </p>
                  <p
                    className="mx-2"
                    style={{ fontWeight: 600, color: "#c0c0c0" }}
                  >
                    <GoPrimitiveDot size={15} style={{ color: "#7B66FF" }} />
                    Normal
                  </p>
                  <p
                    className="mx-2"
                    style={{ fontWeight: 600, color: "#c0c0c0" }}
                  >
                    <GoPrimitiveDot size={15} style={{ color: "#c0c0c0" }} />
                    High
                  </p>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
        <div className="content-4 mt-2">
          <Card
            className="p-2 shadow-sm p-3 bg-white"
            style={{
              borderRadius: 20,
            }}
          >
            <Row>
              <Col md="12">
                <p>Sleep</p>
                <div className="d-flex justify-content-between">
                  <div className="py-5">
                    <h1 style={{ fontWeight: 900, fontSize: 35 }}>
                      6{" "}
                      <span style={{ color: "#c7c7c7", fontSize: "1rem" }}>
                        h
                      </span>{" "}
                      20{" "}
                      <span style={{ color: "#c7c7c7", fontSize: "1rem" }}>
                        m
                      </span>
                    </h1>
                  </div>
                  <div>
                    <BarChart
                      width={200}
                      height={120}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      {/* <CartesianGrid strokeDasharray="3 3" /> */}
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pv" fill="#7B66FF" />
                      <Bar dataKey="uv" fill="#c7c7c7" />
                    </BarChart>
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
        modalTransition={{ timeout: 100 }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHandle />
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

export default History;
