import { Download, Edit, Share2, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

import { deleteForm, getFormInputs } from "@/crudUtils/fireStoreCrud";
import * as XLSX from "xlsx";

const ResponseList = ({ forms, setForms }) => {
  const onDeleteClick = async (formId) => {
    await deleteForm(formId);
    setForms((prevForms) => {
      return prevForms.filter((form) => form.id !== formId);
    });
  };

  const exportData = (formId, name) => {
    let userInputs = [];
    getFormInputs(formId).then((data) => {
      console.log(data);
      data.forEach((input) => {
        userInputs.push(input.userInput);
      });
      exportToExcel(userInputs, name);
    });
  };

  const exportToExcel = (jsonData, title) => {
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "sheet1");
    XLSX.writeFile(workbook, title + ".xlsx");
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
      {forms &&
        forms.map((form) => {
          return (
            <div
              key={form.id}
              className="bg-white shadow-md rounded-md p-4 flex flex-col gap-4 justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-lg line-clamp-1">
                  {form.formData.formTitle}
                </h3>
                <p className="text-sm line-clamp-2">
                  {form.formData.formSubheading}
                </p>
              </div>
              <div className="flex justify-between p-4 w-full">
                <div>23 responses</div>
                <div className=" flex gap-2">
                  <span>
                    <Download
                      size={20}
                      className="text-primary cursor-pointer"
                      onClick={() => {
                        exportData(form.id, form.formData.formTitle);
                      }}
                    />{" "}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ResponseList;
