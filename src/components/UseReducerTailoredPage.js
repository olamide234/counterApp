import React, { useState } from "react";
import { MdSettings } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { AiFillExclamationCircle } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";

export default function UseReducerTailoredPage() {
    const [openModal, setOpenModal]= useState(false)
    const [homeDisplay, setHomeDisplay] = useState(false)
    const [settingDisplay, setSettingDisplay] = useState(false)
    const [resetDisplay, setResetDisplay] = useState(false)
  return (
    <div className="full_page">
      <div className="navigation">
        <div className="navigation_content">
          <button onClick={()=>{setOpenModal(true); setHomeDisplay(true)}}>
            <AiFillExclamationCircle size="medium" />
          </button>
          <button onClick={()=>{setOpenModal(true); setSettingDisplay(true)}}>
            <MdSettings size="medium" />
          </button>
          <button onClick={()=>{setOpenModal(true); setResetDisplay(true)}}>
            <GrPowerReset size="medium" />
          </button>
        </div>
      </div>
      <div className="main">
        <div className="upper_division_content">
          <button>
            <HiMinus size="36px" className="addSvg" />
          </button>
          <div className="displayed_no">1</div>
          <button>
            <GoPlus size="36px" className="addSvg" />
          </button>
        </div>
        <div className="lower_division">
          <div className="lower_division_content">
            <div className="remains">16</div>
            <p>AVAILABLE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
