const TimePicker = ({ text }: any) => {
  return (
    <div className="flex items-center">
      {text && <span className="mr-2 whitespace-nowrap">{text}</span>}
      <div className="w-24 bg-white rounded-lg border border-gray-300 text-xs">
        <div className="flex items-center justify-center px-3 py-1">
          <select
            title="hours"
            name="hours"
            className="bg-transparent text-sm appearance-none outline-none cursor-pointer"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">10</option>
            <option value="12">12</option>
          </select>
          <span className="text-sm lg:text-lg mr-3">:</span>
          <select
            title="minutes"
            name="minutes"
            className="bg-transparent text-sm appearance-none outline-none mr-2"
          >
            <option value="0">00</option>
            <option value="30">30</option>
          </select>
          <select
            title="ampm"
            name="ampm"
            className="bg-transparent text-sm appearance-none outline-none"
          >
            <option value="am">AM</option>
            <option value="pm">PM</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
