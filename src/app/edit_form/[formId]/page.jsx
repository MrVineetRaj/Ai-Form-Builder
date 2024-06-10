"use client";

import {
  getOneForm,
  updateColors,
  updateForm,
} from "@/crudUtils/fireStoreCrud";
import React, { useEffect, useState } from "react";
import FormUi from "../_components/FormUi";
import UiControllers from "../_components/UiContollers";
import {
  ArrowBigLeft,
  MoveLeft,
  Share2,
  SquareArrowOutUpRight,
} from "lucide-react";

const EditForm = ({ params }) => {
  const [formData, setFormData] = useState({});
  const [renderKey, setRenderKey] = useState(0);

  const [bgInternalColor, setBgInternalColor] = useState("white");
  const [bgExternalColor, setBgExternalColor] = useState("white");
  const [headingColor, setHeadingColor] = useState("black");
  const [textColor, setTextColor] = useState("black");
  const [buttonTextColor, setButtonTextColor] = useState("white");
  const [controlPanelRender, setControlPanelRender] = useState(0);
  const formId = params.formId;

  useEffect(() => {
    getOneForm(formId)
      .then((data) => {
        const res = data.formData;
        setFormData(res);

        setBgExternalColor(data.colors.bgExternalColor);
        setBgInternalColor(data.colors.bgInternalColor);
        setTextColor(data.colors.textColor);
        setHeadingColor(data.colors.headingColor);
        setButtonTextColor(data.colors.buttonTextColor);
      })
      .then(() => {
        setControlPanelRender(1);
      });
  }, [formId]);

  const onFormUpdate = async (newFormData) => {
    setFormData(newFormData);
    setRenderKey(renderKey + 1);

    await updateForm(formId, newFormData);
    console.log(newFormData);
  };

  const onColorUpdate = async () => {
    let newColors = {
      textColor: textColor,
      bgExternalColor: bgExternalColor,
      bgInternalColor: bgInternalColor,
      headingColor: headingColor,
      buttonTextColor: buttonTextColor,
    };

    setRenderKey(renderKey + 1);
    console.log(newColors);
    await updateColors(formId, newColors);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[80%] p-4 flex items-center justify-between">
        <span className="text-xl font-bold flex gap-1 items-center">
          <ArrowBigLeft />
          Back
        </span>
        <span className="flex gap-2 items-center">
          <a
            href={"/live-preview/" + formId}
            target="_blank"
            className="bg-primary flex gap-2 hover:bg-purple-800 cursor-pointer items-center font-semibold text-white py-2 px-4 rounded-md"
          >
            <SquareArrowOutUpRight />
            Live Preview
          </a>
          <span className="bg-green-500 flex gap-2 items-center font-semibold text-white py-2 px-4 rounded-md hover:bg-green-800 cursor-pointer">
            <Share2 />
            Share
          </span>
        </span>
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-[300px] m-2 p-5 min-h-screen border-2 rounded-lg">
          <UiControllers
            setTextColor={setTextColor}
            setHeadingColor={setHeadingColor}
            setButtonTextColor={setButtonTextColor}
            setBgExternalColor={setBgExternalColor}
            setBgInternalColor={setBgInternalColor}
            onColorUpdate={onColorUpdate}
            controlPanelRender={controlPanelRender}
          />
        </div>
        <div
          className="m-2 p-5 min-h-screen border-2 rounded-lg w-[100%]"
          key={renderKey}
        >
          <FormUi
            formData={formData}
            onFormUpdate={onFormUpdate}
            textColor={textColor}
            headingColor={headingColor}
            buttonTextColor={buttonTextColor}
            bgInternalColor={bgInternalColor}
            bgExternalColor={bgExternalColor}
          />
        </div>
      </div>
    </div>
  );
};

export default EditForm;
