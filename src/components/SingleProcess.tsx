const SingleProcess = (props: any) => {
  return (
    <div className="bg-primary flex flex-col items-center p-7 rounded-2xl">
      <span
        className={`opacity-80 flex-1 process-image-${props.item.id} text-center`}
      >
        {props.item.text}
      </span>
      <img
        src={props.item.img}
        className="h-[300px] md:h-auto"
        alt="Process image"
      />
    </div>
  );
};

export default SingleProcess;
