import React from "react";

function About() {
  return (
    <div className="mt-[30px] ">
      <div className=" flex flex-col md:flex-row space-y-10 md:space-y-0 items-center justify-between p-[40px_20px] md:p-[40px]">
        <div className="flex-1">
          <p className="text-[30px] font-quicksand font-[800]">About Us</p>
          <p className="mt-[20px]">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            iusto, recusandae laborum nesciunt itaque soluta, est quae in
            possimus vel voluptas, veritatis incidunt quaerat? Molestias
            doloremque explicabo aliquam at ex.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <div className="h-[200px] md:h-[300px] w-[200px] md:w-[300px] bg-secondary rounded-full"></div>
            <div className="absolute h-[50px] md:h-[70px] w-[50px] md:w-[70px] bg-primary rounded-[15px] top-[-10px] right-[-50px] md:right-[-60px]"></div>
            <div className="absolute h-[50px] md:h-[70px] w-[50px] md:w-[70px] bg-primary rounded-[15px] bottom-[-10px] left-[-30px] md:left-[-56px]"></div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
