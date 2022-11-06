import React, { useState, useEffect } from "react";
import { MdSettings } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { AiFillExclamationCircle } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";
import { RiCloseCircleLine } from "react-icons/ri";

function useCounter(actionType, value) {
  const initialData = {
    counter: 0,
    maximum: 8,
    limitActive: false,
  };

  function y(appData) {
    if (actionType === "RESET") {
      return initialData;
    } else if (actionType === "INCREMENT") {
      return {
        ...appData,
        counter: parseInt(appData.counter) + 1,
        maximum: parseInt(appData.maximum) - 1,
      };
    } else if (actionType === "DECREMENT") {
      if (parseInt(appData.counter) === 0) {
        return appData; 
      } else {
        return {
          ...appData,
          counter: parseInt(appData.counter) - 1,
          maximum: parseInt(appData.maximum) + 1,
        };
      }
    } else if (actionType === "SETVALUE") {
      return { ...appData, counter: value };
    } else if (actionType === "SETMAXIMUM") {
      return { ...appData, maximum: value };
    } else if (actionType === "ACTIVATE_LIMIT") {
      return { ...appData, limitActive: value };
    }
  }

  return y(initialData);
}

export default function CustomHookTailoredPage() {
  const [openModal, setOpenModal] = useState(false);
  const [contentDisplay, setContentDisplay] = useState({
    homeDisplay: false,
    settingDisplay: false,
    resetDisplay: false,
  });
  const [action, setAction] = useState({ type: "", value: "" });
  const data = useCounter(action.type, action.value);

  const handleReset = () => {
    setAction((prev) => ({ ...prev, type: "RESET" }));
    setOpenModal(false);
    setContentDisplay({
      homeDisplay: false,
      settingDisplay: false,
      resetDisplay: false,
    });
  };
  const handleIncrement = () => {
    setAction((prev) => ({ ...prev, type: "INCREMENT" }));
  };
  const handleDecrement = () => {
    setAction((prev) => ({ ...prev, type: "DECREMENT" }));
  };
  const handleSetValue = (value) => {
    setAction({ type: "SETVALUE", value: value });
  };
  const handleSetMaximum = (value) => {
    setAction({ type: "SETMAXIMUM", value: value });
  };
  const handleActivateLimit = (value) => {
    setAction({ type: "ACTIVATE_LIMIT", value: value });
  };
  console.log(data);

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
          {data.counter != 0 ? (
            <button onClick={handleDecrement}>
              <HiMinus size="36px" className="addSvg" />
            </button>
          ) : (
            <div style={{ width: "3.8rem" }}></div>
          )}
          <div className="displayed_no">{data.counter}</div>
          <button onClick={handleIncrement}>
            <GoPlus size="36px" className="addSvg" />
          </button>
        </div>
        {data.limitActive && (
          <div className="lower_division">
            <div className="lower_division_content">
              <div className="remains">{data.maximum}</div>
              <p>AVAILABLE</p>
            </div>
          </div>
        )}
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
                      <input
                        type="number"
                        onChange={(e) => handleSetValue(e.target.value)}
                      />
                    </div>
                    <div className="setting_box">
                      <div className="setting_container">
                        <h3 className="setting_text">Limit Off / On</h3>
                        <label class="switch">
                          <input
                            type="checkbox"
                            onChange={(e) => {
                              console.log(e);
                              handleActivateLimit(e.target.checked);
                            }}
                          />
                          <span class="slider round"></span>
                        </label>
                      </div>
                      <div
                        className={
                          !data.limitActive
                            ? "setting_container disabled"
                            : "setting_container"
                        }
                      >
                        <h3 className="setting_text">Maximum = </h3>
                        <input
                          disabled={!data.limitActive}
                          type="number"
                          onChange={(e) => handleSetMaximum(e.target.value)}
                        />
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
                    <button className="reset_action" onClick={handleReset}>
                      Yes
                    </button>
                  </div>
                  <div className="button_text">
                    <button
                      className="reset_action"
                      onClick={() => {
                        setOpenModal(false);
                        setContentDisplay({
                          homeDisplay: false,
                          settingDisplay: false,
                          resetDisplay: false,
                        });
                      }}
                    >
                      Cancel
                    </button>
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
