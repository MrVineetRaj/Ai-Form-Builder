"use client";

import { getOneForm } from "@/crudUtils/fireStoreCrud";
import React, { useEffect } from "react";

const EditForm = ({ params }) => {
  const formId = params.formId;

  useEffect(() => {
    getOneForm(formId).then((data) => {
      console.log(data);
    });
  }, [formId]);
  return <div>{formId}</div>;
};

export default EditForm;
