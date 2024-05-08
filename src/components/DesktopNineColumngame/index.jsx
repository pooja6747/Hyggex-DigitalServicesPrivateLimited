import React from "react";
import { Text } from "./..";

export default function DesktopNineColumngame({ gametext = "Game", ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full gap-2`}>
      <div className="flex px-3">
        <Text size="s" as="p">
          {gametext}
        </Text>
      </div>
      <div className="h-[2px] w-full self-stretch bg-gray-50" />
    </div>
  );
}
