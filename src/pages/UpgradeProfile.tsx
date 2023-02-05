import { useState } from "react";
import { DashboardDesktop } from "../components/DashboardContent";
import DashNav from "../components/DashNav";
import Header from "../components/Header";
import MigraniumPlans from "../components/MigraniumPlans";
import SubscriptionPlan from "../components/SubscriptionPlan";

const migraniumPlans = [
  {
    id: 0,
    plan: "Free",
    description: "Try out Migranium for as long as you want.",
    payment: "$0 / month",
    button: "Current plan",
    currentPlan: true,
    planHighlight: [
      "1 location",
      "100 visits/month",
      "2 SMS/visit",
      "Real time notifications",
    ],
  },
  {
    id: 1,
    plan: "Starter",
    description: "For small businesses with few locations.",
    payment: "$23 / month",
    button: "Upgrade to Starter",
    currentPlan: false,
    planHighlight: [
      "4 location",
      "Up to 3000 visits/month",
      "3 SMS/visit",
      "Multiple locations",
      "Flexible visits",
      "Customize customer messages",
    ],
  },
  {
    id: 2,
    plan: "Business",
    description: "For larger businesses with multiple locations.",
    payment: "$39 / month",
    button: "Upgrade to Business",
    currentPlan: false,
    planHighlight: [
      "4-10 locations",
      "Up to 10,000 visits/month",
      "3 SMS/visit",
      "Set custom user roles and permissions",
      "Advanced reporting",
      "Customize branding",
      "Integrations and API access",
    ],
  },
  {
    id: 3,
    plan: "Enterprise",
    description: "For large organizations with custom needs.",
    payment: "Custom pricing",
    button: "Contact sales",
    currentPlan: false,
    planHighlight: [
      "Unlimited locations",
      "Unlimited visits",
      "Unlimited SMS/visit",
      "Dedicated account manager",
      "24/7 support",
      "Service level agreement (SLA)",
      "Advanced data security controls",
      "White-label branding",
      "Invoice & PO",
    ],
  },
];

const UpgradeProfile = () => {
  const [show, onShow] = useState(false);
  const [showPlan, setShowPlan] = useState(false);
  const [planType, setPlanType] = useState("");

  return (
    <div className="bg-primary h-screen flex flex-col overflow-y-scroll">
      <DashNav show={show} onDone={() => onShow(!show)} />

      {showPlan && (
        <SubscriptionPlan
          showPlan={showPlan}
          setShowPlan={setShowPlan}
          planType={planType}
        />
      )}

      <div
        className={`px-2 pt-10 flex-1 overflow-y-scroll lg:hidden dark:text-black ${
          showPlan && "filter blur-sm"
        }`}
      >
        <div className="mb-4">
          <span className="text-xl block mb-1">Get more out of Migranium</span>
          <span className="text-sm opacity-50 block">
            Supercharge your account with our simple and flexible plans
          </span>
        </div>

        <MigraniumPlans
          migraniumPlans={migraniumPlans}
          setShowPlan={setShowPlan}
          setPlanType={setPlanType}
        />
      </div>

      {/* desktop */}
      <div className="w-full h-screen hidden lg:flex">
        <DashboardDesktop />

        {showPlan && (
          <SubscriptionPlan
            showPlan={showPlan}
            setShowPlan={setShowPlan}
            planType={planType}
          />
        )}

        <div
          className={`lg:px-4 2xl:px-8 py-8 flex-1 overflow-y-scroll hidden dark:text-black lg:block ${
            showPlan && "filter blur-sm"
          }`}
        >
          <Header text="Upgrade your Cashex profile" />
          <div className="mb-10">
            <span className="text-xl block mb-1">
              Get more out of Migranium
            </span>
            <span className="text-sm opacity-50 block">
              Supercharge your account with our simple and flexible plans
            </span>
          </div>

          <MigraniumPlans
            migraniumPlans={migraniumPlans}
            setShowPlan={setShowPlan}
            setPlanType={setPlanType}
          />
        </div>
      </div>
    </div>
  );
};

export default UpgradeProfile;
