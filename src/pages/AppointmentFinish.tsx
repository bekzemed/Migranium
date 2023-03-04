import appointment from "../assets/appointment.svg";
import { useAppSelector } from "../redux/hooks";

export const AppointmentFinish = () => {
  const selected = useAppSelector((state) => state.theme.selected);
  const textColor = useAppSelector((state) => state.theme.textColor);

  return (
    <div className="bg-primary px-4 lg:px-0 text-center lg:flex lg:justify-center dark:text-black">
      <div className="flex flex-col h-full justify-center lg:mr-10 2xl:mr-16">
        <span className="font-black text-2xl pb-5 block lg:pb-3 whitespace-nowrap">
          Congratulations
        </span>
        <span className="block pb-5 text-sm">
          <span className="block mb-3">
            <span>Your appointment at Cashexs,</span>{" "}
            <span
              style={selected === 10 ? { color: textColor } : {}}
              className={`text-sm ${
                textColor === "text-theme0" || textColor === "text-theme1"
                  ? "text-black"
                  : textColor
              }`}
            >
              537 Westminster on 21st Feb 2021 at 10 am
            </span>
            <span>, has been scheduled.</span>
          </span>
          <span className="text-sm">
            Check your{" "}
            <span
              style={selected === 10 ? { color: textColor } : {}}
              className={`${
                textColor === "text-theme0" || textColor === "text-theme1"
                  ? "text-black"
                  : textColor
              }`}
            >
              email
            </span>{" "}
            for confirmation
          </span>
        </span>
      </div>

      <img
        className="hidden lg:block w-auto"
        src={appointment}
        alt="Appointment"
      />
    </div>
  );
};
