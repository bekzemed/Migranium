import { useState } from "react";
import { Step, Stepper } from "react-form-stepper";
import { useAppSelector } from "../redux/hooks";
import { AppointmentFinish } from "./AppointmentFinish";
import DateAndTimeAppointment from "./DateAndTimeAppointment";
import { UserInfo } from "./UserInfo";

const UserAppointment = () => {
  const [activeStep, setActiveStep] = useState(0);
  const color = useAppSelector((state) => state.theme.color);
  const selected = useAppSelector((state) => state.theme.selected);
  const textColor = useAppSelector((state) => state.theme.textColor);
  return (
    <div>
      <div className="bg-primary px-4 lg:px-0 text-center h-screen flex flex-col dark:text-black py-[10px]">
        <>
          <Stepper
            activeStep={activeStep}
            connectorStateColors={true}
            styleConfig={{
              activeBgColor: `${color}`,
              activeTextColor: "#fff",
              inactiveBgColor: "#fff",
              inactiveTextColor: "#7a7a7a",
              completedBgColor: "#fff",
              completedTextColor: "",
              circleFontSize: "",
              labelFontSize: "",
              borderRadius: "25px",
              fontWeight: "",
              size: "2em",
            }}
            connectorStyleConfig={{
              activeColor: `${color}`,
              disabledColor: "#ccc",
              completedColor: `${color}`,
              size: 1,
              style: "solid",
              stepSize: "2em",
            }}
            className="stepper lg:w-[700px] lg:mx-auto"
          >
            <Step />
            <Step />
            <Step />
          </Stepper>

          <div className="w-full lg:w-[950px] mx-auto">
            <div className="flex justify-between my-5">
              <div
                className="flex items-center cursor-pointer"
                onClick={() =>
                  activeStep !== 0 && setActiveStep(activeStep - 1)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke={`${activeStep === 0 ? "#A6A6A6" : color}`}
                  fill="none"
                  style={
                    selected === 10 && activeStep !== 0
                      ? { color: textColor }
                      : { color: "#A6A6A6" }
                  }
                  className="w-5 h-5 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <span
                  style={
                    activeStep !== 0
                      ? selected === 10
                        ? { color: textColor }
                        : {}
                      : { color: "#A6A6A6" }
                  }
                  className={`${
                    activeStep === 0
                      ? "#A6A6A6"
                      : textColor === "text-theme0" ||
                        textColor === "text-theme1"
                      ? "text-black"
                      : textColor
                  }`}
                >
                  Back
                </span>
              </div>
              <div
                className="flex items-center cursor-pointer"
                onClick={() =>
                  activeStep !== 2 && setActiveStep(activeStep + 1)
                }
              >
                <span
                  style={
                    activeStep !== 2
                      ? selected === 10
                        ? { color: textColor }
                        : {}
                      : { color: "#A6A6A6" }
                  }
                  className={`${
                    activeStep === 2
                      ? "#A6A6A6"
                      : textColor === "text-theme0" ||
                        textColor === "text-theme1"
                      ? "text-black"
                      : textColor
                  }`}
                >
                  Next
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke={`${activeStep === 2 ? "#A6A6A6" : color}`}
                  fill="none"
                  style={selected === 10 ? { color: color } : {}}
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-sm lg:w-[950px] lg:mx-auto lg:pb-0 xl:pb-0 xl:justify-center mt-auto mb-auto">
            {activeStep === 0 && <DateAndTimeAppointment />}
            {activeStep === 1 && <UserInfo />}
            {activeStep === 2 && <AppointmentFinish />}
          </div>
        </>
      </div>
    </div>
  );
};

export default UserAppointment;
