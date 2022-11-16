import React, { useState, useReducer } from "react";
import { MdSettings } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { AiFillExclamationCircle } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";
import { RiCloseCircleLine } from "react-icons/ri";

export default function CustomHookTailoredPage() {
  const initialData = {
    counter: 0,
    maximum: 8,
    limitActive: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "RESET":
        return initialData;
      case "INCREMENT":
        return {
          ...state,
          counter: parseInt(state.counter) + 1,
          maximum: parseInt(state.maximum) - 1,
        };
      case "DECREMENT":
        if (parseInt(state.counter) === 0) {
          return state;
        } else {
          return {
            ...state,
            counter: parseInt(state.counter) - 1,
            maximum: parseInt(state.maximum) + 1,
          };
        }
      case "SETVALUE":
        return { ...state, counter: action.newValue };
      case "SETMAXIMUM":
        return { ...state, maximum: action.newMaximum };
      case "ACTIVATE_LIMIT":
        return { ...state, limitActive: action.newLimit };
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, initialData);
  const [openModal, setOpenModal] = useState(false);
  const [contentDisplay, setContentDisplay] = useState({
    homeDisplay: false,
    settingDisplay: false,
    resetDisplay: false,
  });

  const handleReset = () => {
    dispatch({ type: "RESET" });
    setOpenModal(false);
    setContentDisplay({
      homeDisplay: false,
      settingDisplay: false,
      resetDisplay: false,
    });
  };
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleSetValue = (value) => {
    dispatch({ type: "SETVALUE", newValue: value });
  };
  const handleSetMaximum = (value) => {
    dispatch({ type: "SETMAXIMUM", newMaximum: value });
  };
  const handleActivateLimit = (value) => {
    dispatch({ type: "ACTIVATE_LIMIT", newLimit: value });
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
              <p>{ data.maximum < 0 ? 'LIMIT EXCEEDED' : 'AVAILABLE' }</p>
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
                        <h3 className="setting_text">
                          Limit{" "}
                          <span
                            className={
                              !data.limitActive && "limit_active_indicator"
                            }
                          >
                            Off
                          </span>{" "}
                          /{" "}
                          <span
                            className={
                              data.limitActive && "limit_active_indicator"
                            }
                          >
                            On
                          </span>
                        </h3>
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
