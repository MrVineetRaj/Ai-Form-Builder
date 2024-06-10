"use client";

import { getOneForm, newFormInput } from "@/crudUtils/fireStoreCrud";
import React, { useEffect, useState } from "react";
import PreViewFormUi from "../_component/PreviewFormUi";

const LivePreView = ({params}) => {
  const [formData, setFormData] = useState({});

  const [bgExternalColor, setBgExternalColor] = useState();
  const [bgInternalColor, setBgInternalColor] = useState();
  const [headingColor, setHeadingColor] = useState();
  const [textColor, setTextColor] = useState();
  const [buttonTextColor, setButtonTextColor] = useState();
  const formId = params.formId;

  useEffect(() => {
    getOneForm(formId).then((data) => {
      const res = data.formData;
      setFormData(res);

      setBgInternalColor(data.colors.bgInternalColor);
      setBgExternalColor(data.colors.bgExternalColor);
      setTextColor(data.colors.textColor);
      setHeadingColor(data.colors.headingColor);
      setButtonTextColor(data.colors.buttonTextColor);
    });
  }, [formId]);

  const handleNewInput = async (formInput) => {
    // const tempFormInput = JSON.parse(formData);

    let data =  await newFormInput(formId, formInput);
    return data;
  }
  return (
    <div>
      <PreViewFormUi
        formData={formData}
        textColor={textColor}
        headingColor={headingColor}
        buttonTextColor={buttonTextColor}
        bgExternalColor={bgExternalColor}
        bgInternalColor={bgInternalColor}
        handleNewInput={handleNewInput}
        
      />
    </div>
  );
};

export default LivePreView;
