import React, { useState } from "react";
import "../../assets/scss/sidePannel.scss";
import Filter from "../Features/Filter"
import Short from "../Features/Short";
import  Checkbox from "../Features/Checkbox";
import Button from "../Button";
import {GiHamburgerMenu} from "react-icons/gi"
import {RxCross1} from "react-icons/rx"
function SidePannel(props) {
  const [toggle , setToggle] = useState(false)
  const handle = () =>{
    setToggle(!toggle)
  }
  return (
    <React.Fragment>
       <Button icon={!toggle ? <GiHamburgerMenu/> : <RxCross1/>} fun={handle}/>
      <aside style={{
        left : `${toggle ? "0" : "-100%"}`
      }} id="sidebar" className="sidebar" >
       <Filter/>
       <Short/>
       <Checkbox/>
      </aside>
    </React.Fragment>
  );
}
export default SidePannel;
