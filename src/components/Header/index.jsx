import React from "react";
import { Button, Text, Img } from "./..";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex md:flex-col justify-between items-center w-[89%] md:w-full gap-5`}
    >
      <Img src="images/img_header_logo.png" alt="logo image" className="h-[39px] w-[191px] object-contain" />
      <div className="flex w-[43%] items-center justify-between gap-5 md:w-full sm:flex-col">
        <ul className="flex  items-center gap-10">
          <li>
            <a href="#">
              <Text as="p" className="!text-gray-800">
                Home
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-gray-800">
                Flashcard
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-gray-800">
                Contact
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-gray-800">
                FAQ
              </Text>
            </a>
          </li>
        </ul>
        <Button shape="round" color="indigo_900_02_blue_800" className="min-w-[128px] font-medium sm:px-5">
          Login
        </Button>
      </div>
    </header>
  );
}
