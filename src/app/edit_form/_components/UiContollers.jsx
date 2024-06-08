"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,

} from "@/components/ui/select";
import { themes } from "@/app/_data/themes";
import { gradientBg } from "@/app/_data/gradientBg";
import { textColor } from "@/app/_data/textColor";

const UiControllers = ({ setSelectedTheme , setBgColor,setTextColor,setHeadingColor}) => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Select
        className="w-full "
        onValueChange={(value) => {
          setSelectedTheme(value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {themes.map((theme, index) => {
            return (
              <SelectItem key={index} value={theme.name}>
                {theme.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      <h2 className="mt-8 my-2 text-xl font-bold">Heading Color</h2>
      <div className="flex flex-wrap w-full">
      {textColor.map((color, index) => {
          return (
            <div
              key={index}
              className="rounded-lg w-10 h-10 m-1 cursor-pointer"
              style={{
                background: color.color,
              }}
              onClick={() => setHeadingColor(color.color)}
            ></div>
          );
        })}
      </div>
      <h2 className="mt-8 my-2 text-xl font-bold">Text Color</h2>
      <div className="flex flex-wrap w-full">
        {textColor.map((color, index) => {
          return (
            <div
              key={index}
              className="rounded-lg w-10 h-10 m-1 cursor-pointer"
              style={{
                background: color.color,
              }}
              onClick={() => setTextColor(color.color)}
            ></div>
          );
        })}
      </div>
      
      <h2 className="mt-8 my-2 text-xl font-bold">Background</h2>
      <div className="flex flex-wrap w-full">
        {gradientBg.map((bg, index) => {
          return (
            <div
              key={index}
              className="rounded-lg w-10 h-10 m-1 cursor-pointer"
              style={{
                backgroundImage: bg.gradient,
              }}
              onClick={() => setBgColor(bg.gradient)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default UiControllers;
