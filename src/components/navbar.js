import React from "react";
import "../App.scss";
import { Link } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { CgMenuRight } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { Card } from "reactstrap";

const NavBar = () => {
  return (
    <div>
      <Card className="curved-border px-3 py-5" style={{borderRadius: "50px 50px 0px 0px"}}>
        <div className=" d-flex justify-content-between" >
          <div>
            <Link to="/">
              <GrHomeRounded size={30} style={{ color: "#c7c7c7" }} />
            </Link>
          </div>
          <div>
            <Link to="/history">
              <CgMenuRight size={30} />
            </Link>
          </div>
          <div>
            <Link to="/">
              <FaRegComment size={30} />
            </Link>
          </div>
          <div>
            <Link to="/">
              <BsPerson size={25} />
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NavBar;
