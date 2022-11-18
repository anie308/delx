import React from "react";

function ContactForm() {
  return (
    <div className="grid md:grid-cols-2 md:p-[50px] gap-5">
      <div className="border">
        <form action="" className="w-full p-[30px] space-y-5">
          <div>
            <label
              htmlFor=""
              className="font-quicksand text-[18px] font-[700] "
            >
              Email
            </label>
            <input
              type="email"
              className="h-[40px] w-full outline-none border mt-[5px] px-[10px] "
              placeholder="Email"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-quicksand text-[18px] font-[700] "
            >
              Subject
            </label>

            <input
              type="text"
              className="h-[40px] w-full outline-none border px-[10px] mt-[5px]  "
              placeholder="Subject"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-quicksand text-[18px] font-[700] "
            >
              Message
            </label>

            <textarea
              className="h-[150px] w-full outline-none border px-[10px] mt-[5px] p-[10px] "
              placeholder="Subject"
              aria-multiline
            />
          </div>
          <div className="w-full">
            <button type="submit" className="border w-full h-[40px] font-quicksand text-[18px] font-[700]">Send message</button>
          </div>
        </form>
      </div>
      <div className="border">loll</div>
    </div>
  );
}

export default ContactForm;
