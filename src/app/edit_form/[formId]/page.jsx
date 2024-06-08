"use client";

import { getOneForm } from "@/crudUtils/fireStoreCrud";
import React, { useEffect, useState } from "react";
import FormUi from "../_components/FormUi";

const EditForm = ({ params }) => {
  const [formData, setFormData] = useState({});
  const formId = params.formId;

  useEffect(() => {
    getOneForm(formId).then((data) => {
      const res = JSON.parse(data.formsData);
      setFormData(res);
    });
  }, [formId]);

  return (
    <div>
      <FormUi formData={formData} />
    </div>
  );
};

export default EditForm;
