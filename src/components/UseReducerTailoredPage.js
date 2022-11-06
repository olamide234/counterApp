import React, { useState } from "react";
import { MdSettings } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { AiFillExclamationCircle } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";
import { RiCloseCircleLine } from "react-icons/ri";

export default function UseReducerTailoredPage() {
  const [openModal, setOpenModal] = useState(false);
  const [contentDisplay, setContentDisplay] = useState({
    homeDisplay: false,
    settingDisplay: false,
    resetDisplay: false,
  });

  return (
    <div className="full_page">
      <div className="navigation">
        <div className="navigation_content">
          <button
            onClick={() => {
              setOpenModal(true);
              setContentDisplay({
                homeDisplay: true,
                settingDisplay: false,
                resetDisplay: false,
              });
            }}
          >
            <AiFillExclamationCircle size="medium" />
          </button>
          <button
            onClick={() => {
              setOpenModal(true);
              setContentDisplay({
                homeDisplay: false,
                settingDisplay: true,
                resetDisplay: false,
              });
            }}
          >
            <MdSettings size="medium" />
          </button>
          <button
            onClick={() => {
              setOpenModal(true);
              setContentDisplay({
                homeDisplay: false,
                settingDisplay: false,
                resetDisplay: true,
              });
            }}
          >
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
        {openModal && (
          <div className="overlay">
            <div className="overlay_content">
              {contentDisplay.homeDisplay && (
                <div className="text_area">
                  <h2 className="title">Simple Counter</h2>
                  <p>
                    A simple tool for counting things and keeping track of
                    numbers.
                  </p>
                  <button
                    className="close_button"
                    onClick={() => {
                      setOpenModal(false);
                      setContentDisplay({
                        homeDisplay: false,
                        settingDisplay: false,
                        resetDisplay: false,
                      });
                    }}
                  >
                    <RiCloseCircleLine size="30px" />
                  </button>
                </div>
              )}
              {contentDisplay.settingDisplay && (
                <div className="text_area">
                  <h2 className="title">Settings</h2>
                  <div className="setting u-mb-small">
                    <div className="setting_box">
                      <h3 className="setting_text">Set Count = </h3>{" "}
                      <input type="number" />
                    </div>
                    <div className="setting_box">
                      <div>
                        <h3 className="setting_text">Limit Off / On</h3>
                      </div>
                      <div>
                        <h3 className="setting_text">Maximum = </h3>
                        <input type="number" />
                      </div>
                    </div>
                  </div>
                  <button
                    className="close_button"
                    onClick={() => {
                      setOpenModal(false);
                      setContentDisplay({
                        homeDisplay: false,
                        settingDisplay: false,
                        resetDisplay: false,
                      });
                    }}
                  >
                    <RiCloseCircleLine size="30px" />
                  </button>
                </div>
              )}
              {contentDisplay.resetDisplay && (
                <div className="text_area">
                  <h2 className="title">Reset Counter?</h2>
                  <div className="button_text">
                    <button className="reset_action ">Yes</button>
                  </div>
                  <div className="button_text">
                    <button className="reset_action ">Cancel</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
