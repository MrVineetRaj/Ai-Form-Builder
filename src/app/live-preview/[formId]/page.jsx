"use client";

import { getOneForm } from "@/crudUtils/fireStoreCrud";
import React, { useEffect, useState } from "react";
import PreViewFormUi from "../_component/PreviewFormUi";

const LivePreView = ({params}) => {
  const [formData, setFormData] = useState({});

  const [bgColor, setBgColor] = useState();
  const [headingColor, setHeadingColor] = useState();
  const [textColor, setTextColor] = useState();
  const [buttonTextColor, setButtonTextColor] = useState();
  const formId = params.formId;

  useEffect(() => {
    getOneForm(formId).then((data) => {
      const res = data.formData;
      setFormData(res);

      setBgColor(data.colors.bgColor);
      setTextColor(data.colors.textColor);
      setHeadingColor(data.colors.headingColor);
      setButtonTextColor(data.colors.buttonTextColor);
    });
  }, [formId]);

  return (
    <div>
      <PreViewFormUi
        formData={formData}
        bgColor={bgColor}
        textColor={textColor}
        headingColor={headingColor}
        buttonTextColor={buttonTextColor}
      />
    </div>
  );
};

export default LivePreView;
