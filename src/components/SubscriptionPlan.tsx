const SubscriptionPlan = ({ showPlan, setShowPlan, planType }: any) => {
  return (
    <div className="bg-white rounded-lg absolute left-1/2 top-1/2 center-absolute dark:text-black w-[360px] xl:w-[500px] p-4 lg:p-6 z-30 shadow-lg">
      <div className="flex justify-between items-center pb-4 border-b border-b-gray-300">
        <span>{planType} plan</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setShowPlan(!showPlan)}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="py-4 lg:py-6">
        <span className="block text-sm pb-5">Enter your payment details</span>

        <div>
          <div className="mb-4">
            <label
              htmlFor="creditOrDebit"
              className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
            >
              Credit or debit card
            </label>
            <input
              type="text"
              id="creditOrDebit"
              className="bg-gray-50 border border-gray-300 lg:hidden text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
              placeholder="Card number"
              required
            />

            <div className="flex items-center justify-center">
              <input
                type="text"
                id="creditOrDebit"
                className="bg-gray-50 border hidden lg:block border-gray-300 text-gray-900 text-xs rounded-full w-full p-2 focus-visible:outline-none focus:outline-none mr-3"
                placeholder="Card number"
                required
              />
              <input
                type="text"
                id="creditOrDebit"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mr-3"
                placeholder="MM / YY"
                required
              />
              <input
                type="text"
                id="creditOrDebit"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none"
                placeholder="CVC"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <span className="block text-xs">
              For other options{" "}
              <span className="text-bright cursor-pointer">Contact us</span>
            </span>
          </div>

          <div className="mb-6">
            <div className="lg:flex">
              <div className="lg:w-1/2 lg:mr-3">
                <label
                  htmlFor="country"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="United States"
                  required
                />
              </div>

              <div className="lg:w-1/2">
                <label
                  htmlFor="state"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Select state"
                  required
                />
              </div>
            </div>

            <div className="lg:flex">
              <div className="lg:mr-3 lg:w-1/2">
                <label
                  htmlFor="zipCode"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Zip code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Enter zip code"
                  required
                />
              </div>

              <div className="lg:w-1/2">
                <label
                  htmlFor="billingEmail"
                  className="block mb-2 text-xs font-medium text-gray-900 dark:text-black"
                >
                  Billing Email
                </label>
                <input
                  type="text"
                  id="billingEmail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-full  block w-full p-2 focus-visible:outline-none focus:outline-none mb-4"
                  placeholder="Enter billing email"
                  required
                />
              </div>
            </div>
          </div>
          <div className="text-[8px] leading-[11px] opacity-40 mb-4">
            The amount you owe today is the difference in price between your old
            plan and your new plan, for the remainder of the billing period.
            Each year you will be charged at a rate of $23/yr per Creator
            account until you cancel your subscription. You can add new creator
            accounts to your workspace at any time, and you will be charged for
            those creators on a pro-rated basis on your next bill.
          </div>

          <div className="text-center w-full">
            <button
              type="button"
              className="bg-secondary text-white rounded-full focus-visible:outline-none focus:outline-none text-sm"
            >
              Upgrade subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
