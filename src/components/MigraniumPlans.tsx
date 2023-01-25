import React from "react";

const MigraniumPlans = ({ migraniumPlans, setShowPlan, setPlanType }: any) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {migraniumPlans.map((plans: any, index: number) => (
        <div
          className="bg-white rounded-xl px-16 py-10 flex flex-col mb-6 lg:mr-3"
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
            <span className="block text-3xl text-primary whitespace-nowrap">
              {plans.payment}
            </span>
          </div>
          <button
            type="button"
            className={`${
              plans.currentPlan
                ? "bg-gray-200 text-black "
                : "bg-secondary text-white"
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
              <div className="text-primary flex flex-col" key={index}>
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
