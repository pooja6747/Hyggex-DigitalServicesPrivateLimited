import React from "react";
import { Img, Heading } from "./..";

export default function DesktopNineComp({ username = "9 + 6 + 7x - 2x - 3", ...props }) {
  return (
    <div {...props} className={`${props.className} flex md:flex-col w-[100%] justify-between items-center gap-5 `}>
        <div className="flex flex-wrap items-start justify-between gap-5 rounded-[42px] bg-gradient2 px-[34px] pb-[171px] pt-[34px] md:pb-5 sm:flex-col sm:p-5 w-[100%]">
          <Img src="images/img_frame_gray_100.svg" alt="profileimage" className="h-[34px] w-[34px] rounded-[50%]" />
          <Heading as="h1" className="mt-[141px] !text-[38.26px] tracking-[0.77px] !text-white-A700">
            {username}
          </Heading>
          <Img
            src="images/img_frame_gray_100_34x34.svg"
            alt="secondaryimage"
            className="h-[34px] w-[34px] rounded-[50%]"
          />
        </div>

    </div>
  );
}
