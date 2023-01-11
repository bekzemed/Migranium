const Definition = ({ image, text1, text2, reverse, enlarge }: any) => {
  return (
    <div
      className={`flex justify-center items-center flex-col lg:flex-row pb-5 lg:pb-0 ${
        reverse && "lg:flex-row-reverse"
      }`}
    >
      <img
        src={image}
        className={`pb-12 md:pb-0 w-[300px] ${
          enlarge ? "md:w-[550px] xl:w-[700px]" : "md:w-[400px] xl:w-[500px]"
        } `}
        alt="Definition"
      />
      <div className="flex flex-col lg:justify-center md:w-[400px] xl:w-[500px] ">
        <span className="text-xl mb-6">{text1}</span>
        <span className="opacity-75 text-sm">{text2}</span>
      </div>
    </div>
  );
};

export default Definition;
