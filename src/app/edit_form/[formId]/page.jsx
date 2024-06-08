"use client";

import { getOneForm, updateForm } from "@/crudUtils/fireStoreCrud";
import React, { useEffect, useState } from "react";
import FormUi from "../_components/FormUi";
import UiControllers from "../_components/UiContollers";


const EditForm = ({ params }) => {
  const [formData, setFormData] = useState({});
  const [renderKey, setRenderKey] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [bgColor, setBgColor] = useState("white");
  const [headingColor, setHeadingColor] = useState("black");
  const [textColor, setTextColor] = useState("black");

  const formId = params.formId;

  useEffect(() => {
    getOneForm(formId).then((data) => {
      const res = data.formData;
      setFormData(res);
    });
  }, [formId]);

  const onFormUpdate = async (newFormData) => {
    setFormData(newFormData);
    setRenderKey(renderKey + 1);

    await updateForm(formId, newFormData);
    console.log(newFormData);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-[300px] m-2 p-5 min-h-screen border-2 rounded-lg">
        <UiControllers
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
          setBgColor={setBgColor}
          setTextColor={setTextColor}
          setHeadingColor={setHeadingColor}
        />
      </div>
      <div
        className="m-2 p-5 min-h-screen border-2 rounded-lg w-[100%]"
        key={renderKey}
      >
        <FormUi
          formData={formData}
          onFormUpdate={onFormUpdate}
          selectedTheme={selectedTheme}
          bgColor={bgColor}
          textColor={textColor}
          headingColor={headingColor}
        />
      </div>
    </div>
  );
};

export default EditForm;
