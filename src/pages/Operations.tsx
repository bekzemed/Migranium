import React from "react";

const Operations = () => {
  return (
    <div className="py-14 px-4 lg:px-20 2xl:px-80">
      <span className="block text-center pb-10 md:w-[800px] m-auto font-black text-lg md:text-2xl">
        Migranium works seamlessly behind the scenes to help you streamline and
        optimize your operations.
      </span>
      <div className="md:flex md:gap-14 justify-center">
        <div className="flex flex-col items-center pb-10">
          <span className="block pb-3 text-5xl font-black subpixel-antialiased">
            20%
          </span>
          <span className="opacity-80 text-sm">Fewer no-shows</span>
        </div>

        <div className="flex flex-col items-center pb-10">
          <span className="block pb-3 text-5xl font-black subpixel-antialiased">
            25%
          </span>
          <span className="opacity-80 text-sm">Less waiting</span>
        </div>

        <div className="flex flex-col items-center pb-10">
          <span className="block pb-3 text-5xl font-black text-primary subpixel-antialiased">
            35%
          </span>
          <span className="opacity-80 text-sm text-primary">
            Higher customer satisfaction
          </span>
        </div>

        <div className="flex flex-col items-center pb-10">
          <span className="block pb-3 text-5xl font-black subpixel-antialiased">
            20%
          </span>
          <span className="opacity-80 text-sm">Less waiting</span>
        </div>
      </div>
    </div>
  );
};

export default Operations;
