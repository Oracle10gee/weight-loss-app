import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GoSettings } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
import { ImMinus } from "react-icons/im";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
} from "reactstrap";

const Weight = () => {
  const history = useNavigate();

  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    if (count > 0) setCount(count - 1);
    else {
      setCount(0);
      alert("min limit reached");
    }
  };

  return (
    <div>
      <div className="content p-3">
        <div className="d-flex justify-content-between mt-4">
          <div className="">
            <h3 style={{ fontWeight: 700 }}>
              <IoIosArrowBack onClick={() => history(-1)} />
              Add Weight
            </h3>
          </div>
          <div>
            <GoSettings size={30} />
          </div>
        </div>
        <div className="content-2 weightheader mt-4">
          <Card
            className="cardclip p-4 text-center "
            style={{
              borderRadius: 50,
              backgroundColor: "#7b66ff",
            }}
          >
            <h1 className="text-white">{count}</h1>
          </Card>

          <div className="mt-3 d-flex justify-content-around">
            <Button className="addbtn" onClick={DecNum}>
              <ImMinus size={30} />
            </Button>
            <Button className="addbtn" onClick={IncNum}>
              <AiOutlinePlus size={30} />
            </Button>
          </div>
        </div>
        <div className="content-3 mt-5">
          <div className="d-flex">
            <Button className="weightbtn shadow p-3 mb-5 bg-white">Male</Button>
            <Button className="weightbtn mx-3 shadow p-3 mb-5 bg-white">
              Female
            </Button>
          </div>
        </div>

        <div className="content-4 d-flex">
          <div
            className="myDIV shadow-sm p-3 mb-5 bg-white "
            style={{ borderRadius: 30, width: "120%", backgroundColor: "#fff" }}
          >
            <div className="d-flex justify-content-between">
              <div>Age</div>
              <div className="mx-3">
                <FiSettings />
              </div>
            </div>
            <div>
              <p
                className="text-center "
                style={{ fontWeight: 700, fontSize: "3rem" }}
              >
                21
              </p>
            </div>
          </div>
          <div
            className="myDIV shadow-sm p-3 mb-5 bg-white mx-3 "
            style={{ borderRadius: 30, width: "120%", backgroundColor: "#fff" }}
          >
            <div className="d-flex justify-content-between">
              <div>Height</div>
              <div className="mx-3">
                <FiSettings />
              </div>
            </div>
            <div>
              <p
                className="text-center "
                style={{ fontWeight: 700, fontSize: "3rem" }}
              >
                173
              </p>
            </div>
          </div>
        </div>

        <Button className="savebutton">Save</Button>
      </div>
    </div>
  );
};

export default Weight;
