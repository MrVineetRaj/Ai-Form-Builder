"use client";

import { Button } from "@/components/ui/button";
import { SaveIcon } from "lucide-react";
import React from "react";

const UiControllers = ({
  setBgExternalColor,
  setBgInternalColor,
  setTextColor,
  setHeadingColor,
  setButtonTextColor,
  onColorUpdate,
  controlPanelRender,
}) => {
  return (
    <div className="flex flex-col  items-end h-full">
      <h2 className="mt-8 my-2 text-xl font-bold ">Heading Color</h2>
      {controlPanelRender && (
        <input
          className="rounded-full w-full h-5 overflow-hidden cursor-pointer"
          type="color"
          onChange={(event) => {
            setHeadingColor(event.target.value);
          }}
        />
      )}
      <h2 className="mt-8 my-2 text-xl font-bold flex justify-between items-center gap-2">
        Text Color{" "}
      </h2>
      {controlPanelRender && (
        <input
          className="rounded-full w-full h-5 overflow-hidden cursor-pointer"
          type="color"
          onChange={(event) => {
            setTextColor(event.target.value);
          }}
        />
      )}
      <h2 className="mt-8 my-2 text-xl font-bold flex justify-between items-center gap-2">
        Button Text Color{" "}
      </h2>
      {controlPanelRender && (
        <input
          className="rounded-full w-full h-5 overflow-hidden cursor-pointer"
          type="color"
          defaultValue={"#ffffff"}
          onChange={(event) => {
            setButtonTextColor(event.target.value);
          }}
        />
      )}
      <h2 className="mt-8 my-2 text-xl font-bold">External Background </h2>
      {controlPanelRender && (
        <input
          className="rounded-full w-full h-5 overflow-hidden cursor-pointer"
          defaultValue={"#ffffff"}
          type="color"
          onChange={(event) => {
            setBgExternalColor(event.target.value);
          }}
        />
      )}
      <h2 className="mt-8 my-2 text-xl font-bold">Internal Background </h2>
      {controlPanelRender && (
        <input
          className="rounded-full w-full h-5 overflow-hidden cursor-pointer"
          defaultValue={"#ffffff"}
          type="color"
          onChange={(event) => {
            setBgInternalColor(event.target.value);
          }}
        />
      )}
      <Button
        className="mt-8 w-full "
        onClick={() => {
          onColorUpdate();
        }}
      >
        <SaveIcon /> Save{" "}
      </Button>
    </div>
  );
};

export default UiControllers;
