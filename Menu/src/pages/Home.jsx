import React, { useState } from "react";
import Mynavbar from "../component/navbar";
import Button from "react-bootstrap/Button";
import data from "../component/data";

const Home = () => {
  const [data2, setdata] = useState(data);
  let catigorybtn = ["All", ...new Set(data.map((e) => e.catigory))];

  function flitercards(e) {
    if (e == "All") {
      setdata(data);
    } else {
      let newfilter = data.filter((item) => item.catigory == e);
      setdata(newfilter);
    }
  }
  function flitercardsbysearch(content) {
    if (content !== "") {
      let newfilter = data.filter((item) => item.title == content);
      setdata(newfilter);
    }
  }

  return (
    <div>
      <Mynavbar flitercardsbysearch={flitercardsbysearch} />
      <div className="container mt-5">
        <div className="title">
          <h2>Food Menu</h2>
        </div>
        <div className="menu mt-3">
          {catigorybtn.map((e) => {
            return (
              <Button variant="outline-primary" onClick={() => flitercards(e)}>
                {e}
              </Button>
            );
          })}
        </div>
        <div className="cards mt-5">
          {data2.map((e) => {
            return (
              <div className="mycard shadow my-3">
                <div className="rightthings col-4">
                  <div className="fathimg">
                    <img src="../../public/assets/Capture.PNG" alt="" />
                  </div>
                </div>
                <div className="leftthings col-8 p-2">
                  <div
                    className="name col-6"
                    style={{ color: "black", fontSize: "25px" }}
                  >
                    <h3>{e.title}</h3>
                  </div>
                  <div className="theprice col-6 " style={{ textAlign: "end" }}>
                    <span>{e.prise}</span>
                  </div>
                  <div className="info col-12">
                    <p>{e.info}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
