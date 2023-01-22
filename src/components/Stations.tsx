import edit from "../assets/edit.svg";
import remove from "../assets/remove.svg";
import add from "../assets/add.svg";

const Stations = ({ text }: any) => {
  return (
    <div className="flex justify-between mb-4">
      <span className="text-xs">{text}</span>
      <span className="text-xs flex">
        <img src={edit} alt="Edit" className="mr-1" />
        <span className="text-primary">Edit station</span>
      </span>
      <span className="text-xs flex">
        <img src={add} alt="Add" className="mr-1" />
        <span className="text-primary">Add members</span>
      </span>
      <span className="text-xs flex">
        <img src={remove} alt="Remove" className="mr-1" />
        <span className="text-primary">Remove station</span>
      </span>
    </div>
  );
};

export default Stations;
