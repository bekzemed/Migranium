import {
  PickersDay,
  pickersDayClasses,
  PickersDayProps,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs, { Dayjs } from "dayjs";
import * as React from "react";
import { useAppSelector } from "../redux/hooks";

const date = new Date();

const availableTimeSlot = [
  {
    time: "09:00",
    available: true,
  },
  {
    time: "09:20",
    available: true,
  },
  {
    time: "09:40",
    available: false,
  },
  {
    time: "10:00",
    available: false,
  },

  {
    time: "10:20",
    available: true,
  },

  {
    time: "10:40",
    available: true,
  },

  {
    time: "11:00",
    available: true,
  },
  {
    time: "11:20",
    available: false,
  },

  {
    time: "11:40",
    available: false,
  },
  {
    time: "12:00",
    available: true,
  },
  {
    time: "12:20",
    available: true,
  },
  {
    time: "12:40",
    available: true,
  },
  {
    time: "01:00",
    available: false,
  },

  {
    time: "01:20",
    available: false,
  },

  {
    time: "01:40",
    available: true,
  },
  {
    time: "02:00",
    available: true,
  },

  {
    time: "02:20",
    available: true,
  },
  {
    time: "02:40",
    available: false,
  },
  {
    time: "03:00",
    available: false,
  },
  {
    time: "03:20",
    available: true,
  },
  {
    time: "03:40",
    available: true,
  },

  {
    time: "04:00",
    available: true,
  },

  {
    time: "04:20",
    available: false,
  },
  {
    time: "04:40",
    available: false,
  },

  {
    time: "05:00",
    available: true,
  },
  {
    time: "05:20",
    available: true,
  },
];

const DateAndTimeAppointment = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(date));
  const theme = useAppSelector((state) => state.theme.backgroundTheme);
  const selected = useAppSelector((state) => state.theme.selected);
  const color = useAppSelector((state) => state.theme.color);

  const renderWeekPickerDay = (
    day: Dayjs,
    selectedDays: Dayjs[],
    pickersDayProps: PickersDayProps<Dayjs>
  ) => {
    return (
      <PickersDay
        {...pickersDayProps}
        sx={{
          [`&&.${pickersDayClasses.selected}`]: {
            backgroundColor: color,
          },
        }}
      />
    );
  };

  return (
    <div className="flex flex-col pb-5 lg:pb-0">
      <p className="text-lg text-start">
        2972 Westheimer Rd. Santa Ana, Illinois 85486
      </p>
      <div className="flex flex-col lg:flex-row lg:justify-between mt-5">
        <div className="mb-5 lg:mb-0">
          <p className="text-sm text-start mb-4 lg:mb-6">
            1. Select day you want to book
          </p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              orientation="landscape"
              openTo="day"
              value={value}
              renderDay={renderWeekPickerDay}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <span />}
            />
          </LocalizationProvider>
        </div>
        <div className="flex flex-col">
          <div className="flex-1 mb-5 lg:mb-0">
            <p className="text-sm text-start mb-4 lg:mb-6">
              2. Select an available time slot
            </p>
            <div className="grid grid-cols-5 gap-2 lg:grid-cols-6 lg:w-[450px]">
              {availableTimeSlot.map((timeSlot, index) => (
                <p
                  style={
                    timeSlot.available
                      ? selected === 10
                        ? { backgroundColor: theme, color: "white" }
                        : {}
                      : { backgroundColor: "#F1F5FB" }
                  }
                  className={`border p-3 rounded cursor-pointer ${
                    timeSlot.available
                      ? theme === "bg-theme0" || theme === "bg-theme1"
                        ? "bg-black text-white"
                        : `text-white ${theme}`
                      : "bg-primary"
                  }`}
                  key={index}
                >
                  {timeSlot.time}
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <div
                style={selected === 10 ? { backgroundColor: theme } : {}}
                className={`p-2 border mr-2 rounded ${
                  theme === "bg-theme0" || theme === "bg-theme1"
                    ? "bg-black"
                    : theme
                }`}
              ></div>
              <p>Available appointments</p>
            </div>
            <div className="flex items-center">
              <div className="p-2 border mr-2 rounded"></div>
              <p>No available appointments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateAndTimeAppointment;
