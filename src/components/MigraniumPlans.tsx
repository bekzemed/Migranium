import React from "react";
import { useAppSelector } from "../redux/hooks";

const MigraniumPlans = ({ migraniumPlans, setShowPlan, setPlanType }: any) => {
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  const textColor = useAppSelector((state) => state.theme.textColor);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {migraniumPlans.map((plans: any, index: number) => (
        <div
          className="bg-white rounded-xl px-16 py-10 flex flex-col mb-6 lg:mr-3 shadow-lg"
          key={plans.id}
        >
          <span className="block mb-2 text-center text-xl white">
            {plans.plan}
          </span>
          <span className="block opacity-50 text-sm mb-4 text-center">
            {plans.description}
          </span>

          <div
            className={`${
              migraniumPlans.length !== index + 1 ? "my-10" : "my-12"
            }`}
          >
            <span className="block text-xs mb-3">
              {migraniumPlans.length !== index + 1 && "Starts at"}
            </span>
            <span
              style={selected === 10 ? { color: textColor } : {}}
              className={`block ${
                textColor === "text-theme0" || textColor === "text-theme1"
                  ? "text-black"
                  : textColor
              } text-3xl whitespace-nowrap`}
            >
              {plans.payment}
            </span>
          </div>
          <button
            type="button"
            style={
              selected === 10 && !plans.currentPlan
                ? { backgroundColor: theme }
                : {}
            }
            className={`${
              plans.currentPlan
                ? "bg-gray-200 text-black "
                : `${
                    theme === "bg-theme0" || theme === "bg-theme1"
                      ? "bg-black"
                      : theme
                  } text-white`
            }  rounded-full focus-visible:outline-none focus:outline-none text-sm mb-4`}
            disabled={plans.currentPlan}
            onClick={() => {
              setShowPlan(true);
              setPlanType(plans.plan);
            }}
          >
            {plans.button}
          </button>
          <div className="flex flex-col text-xs">
            <span className="mb-3">Plan highlights:</span>
            {plans.planHighlight.map((highlight: String, index: number) => (
              <div
                style={selected === 10 ? { color: textColor } : {}}
                className={`${
                  textColor === "text-theme0" || textColor === "text-theme1"
                    ? "text-black"
                    : textColor
                } flex flex-col`}
                key={index}
              >
                <span className="mb-2">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MigraniumPlans;
