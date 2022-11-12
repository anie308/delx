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
          
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
