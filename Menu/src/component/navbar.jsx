import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Mynavbar = ({flitercardsbysearch}) => {
  const [searchstate, setsearchstate] = useState('');
  function filtertbysearch(){
    flitercardsbysearch(searchstate)
  }
  return (
    <div className="mynavbar">
      <div className="col-9">
        <div className="logo">
          <span>Ghaith Food</span>
        </div>
        <div className="search">
          <Form.Group
            className=" d-flex align-items-center justify-content-center gap-2"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control type="text" placeholder="Search Food" autoFocus 
            onChange={(e)=>{
              setsearchstate(e.target.value)
            }}  
            />
            <Button variant="primary" onClick={()=>filtertbysearch()}>Search</Button>
          </Form.Group>
        </div>
      </div>
    </div>
  );
};

export default Mynavbar;
