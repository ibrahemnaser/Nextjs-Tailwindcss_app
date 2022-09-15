import React from "react";

const NewsLetter = () => {
  return (
    <section className="mt-[122px] lg:mt-8 bg-[#F0F0F0] pt-12 lg:pt-28 pb-10 lg:pb-[115px] text-center">
      <h4 className="text-sm lg:text-3xl mb-5 lg:mb-9">
        Subscribe our newsletter to be notified when it'll be live.
      </h4>
      <form className="w-[294px] lg:w-[613px] flex justify-between m-auto border rounded-[4px] border-[#AAAAAA]">
        <input
          type="email"
          name="subscribe"
          id="email"
          placeholder="Email address"
          className="bg-transparent text-[10px] lg:text-[16px] px-[10px] py-2 lg:py-3 w-full outline-none"
        />
        <input
          type="submit"
          value="Subscribe"
          className="text-[10px] lg:text-[16px] cursor-pointer bg-black hover:bg-black/90 text-white px-8 lg:px-[53px] py-2 lg:py-3 rounded-[4px] font-bold"
          onClick={(e) => {
            e.preventDefault();
          }}
        />
      </form>
    </section>
  );
};

export default NewsLetter;
