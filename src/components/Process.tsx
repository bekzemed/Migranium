const Process = (props: any) => {
  return (
    <div className="bg-primary flex flex-col items-center p-7 rounded-2xl h-full">
      <span className="opacity-80 flex-1 dark:text-black">
        {props.item.text}
      </span>
      <img
        src={props.item.img}
        className="image md:h-auto"
        alt="Process image"
      />
    </div>
  );
};

export default Process;
