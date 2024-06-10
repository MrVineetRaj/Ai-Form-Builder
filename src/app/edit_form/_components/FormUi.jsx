"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import FieldEdit from "./FieldEdit";

const FormUi = ({
  formData,
  onFormUpdate,
  bgExternalColor,
  bgInternalColor,
  textColor,
  headingColor,
  buttonTextColor,
}) => {
  useEffect(() => {
    console.log("formData", formData);
  }, [formData]);

  useEffect(() => {
    setRenderKey(renderKey + 1);
  }, [bgExternalColor,bgInternalColor, textColor, headingColor, buttonTextColor]);

  const [renderKey, setRenderKey] = useState(0);
  const onUpdate = (data, index) => {
    let newFormData = formData;

    newFormData.fields[index].fieldLabel = data.fieldLabel;
    newFormData.fields[index].placeholder = data.placeholder;
    onFormUpdate(formData);
    
  };

  const deleteField = (index) => {
    let newFormData = formData;
    newFormData.fields.splice(index, 1);
    onFormUpdate(formData);
  };
  return (
    <div className="w-[100%] flex justify-center items-center min-h-screen p-4 "
    style={{ background: bgExternalColor}}
    >
      <div
        className="flex flex-col items-center justify-center  w-[60%] md:w-[60%] max-w-[600px] p-8  border rounded-md"
        key={renderKey}
        style={{ background: bgInternalColor, color: textColor }}
      >
        <h1
          className="text-3xl font-extrabold text-primary text-center"
          style={{ color: headingColor }}
        >
          {formData.formTitle || formData.title}
        </h1>
        <h2 className="text-xl font-bold text-center">
          {formData.formSubheading || formData.subheading}
        </h2>

        <form className="w-full">
          {formData &&
            formData.fields &&
            formData.fields.map((field, index) => {
              if (
                field.inputType === "select" ||
                field.inputTagName === "select" ||
                field.fieldType === "select"
              ) {
                return (
                  <div
                    className="flex items-center justify-between mt-4 gap-2"
                    key={index}
                  >
                    <Select className="w-full text-black">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={field.fieldLabel} />
                      </SelectTrigger>
                      <SelectContent>
                        {field.options.map((option, index) => (
                          <SelectItem key={index} value={option.value || option}>
                            {option.label || option.value || option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FieldEdit
                      index={index}
                      defaultValue={field}
                      onUpdate={onUpdate}
                      deleteField={deleteField}
                    />
                  </div>
                );
              } else if (
                field.inputType === "textarea" ||
                field.inputTagName === "textarea" ||
                field.fieldType === "textarea"
              ) {
                return (
                  <div className="w-full  rounded mt-4" key={index}>
                    <Label
                      htmlFor={field.fieldName}
                      className=" text-sm flex justify-between items-center"
                    >
                      {field.fieldLabel}

                      <FieldEdit
                        index={index}
                        defaultValue={field}
                        onUpdate={onUpdate}
                        deleteField={deleteField}
                      />
                    </Label>
                    <Textarea
                      key={index}
                      className="w-full p-2 border rounded my-1 text-black"
                      placeholder={field.placeholder}
                    />
                  </div>
                );
              } else if (
                field.inputType === "radio" ||
                field.inputTagName === "radio" ||
                field.fieldType === "radio"
              ) {
                return (
                  <RadioGroup
                    defaultValue="option-one"
                    className="flex items-center gap-4 mt-4 "
                    key={index}
                  >
                    <Label>{field.fieldLabel}</Label>
                    {field.options &&
                      field.options.map((option, index) => {
                        return (
                          <div className="flex items-center gap-2" key={index}>
                            <RadioGroupItem
                              value={option.value}
                              id={option.value}
                            />
                            <Label htmlFor="option-one">{option.label}</Label>
                          </div>
                        );
                      })}
                    <FieldEdit
                      index={index}
                      defaultValue={field}
                      onUpdate={onUpdate}
                      deleteField={deleteField}
                    />
                  </RadioGroup>
                );
              } else if (
                field.inputType === "checkbox" ||
                field.inputTagName === "checkbox" ||
                field.fieldType === "checkbox"
              ) {
                if (field.options && field.options.length > 0) {
                  return (
                    <div className=" gap-4 items-center mt-4 " key={index}>
                      <Label className="flex justify-between items-center">
                        {field.fieldLabel}
                        <FieldEdit
                          index={index}
                          defaultValue={field}
                          onUpdate={onUpdate}
                          deleteField={deleteField}
                        />
                      </Label>
                      <div className="flex  gap-2  ">
                        {field.options.map((option, index) => {
                          return (
                            <div
                              className="flex items-center gap-2"
                              key={index}
                            >
                              <Checkbox name={option.value} id={option.value} />
                              <Label htmlFor={option.value}>
                                {option.label}
                              </Label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="flex items-center gap-2 mt-4 justify-between"
                      key={index}
                    >
                      <Checkbox name={field.fieldName} id={field.fieldName} />
                      <Label htmlFor={field.fieldName}>
                        {field.fieldLabel}
                      </Label>

                      <FieldEdit
                        index={index}
                        defaultValue={field}
                        onUpdate={onUpdate}
                        deleteField={deleteField}
                      />
                    </div>
                  );
                }
              } else {
                return (
                  <div className="w-full  rounded mt-4 " key={index}>
                    <Label
                      htmlFor={field.fieldName}
                      className=" text-sm flex justify-between items-center "
                    >
                      {field.fieldLabel}
                      <FieldEdit
                        index={index}
                        defaultValue={field}
                        onUpdate={onUpdate}
                        deleteField={deleteField}
                      />
                    </Label>
                    <Input
                      className="w-full p-2 border rounded my-1 text-black"
                      placeholder={field.placeholder}
                      name={field.fieldName}
                      type={field.fieldType}
                    />
                  </div>
                );
              }
            })}

          <div className="w-full flex justify-center items-center">
            {formData &&
              formData.formButtons &&
              formData.formButtons.map((button, index) => {
                return (
                  <Button
                    key={index}
                    className=" p-2 rounded my-2 mx-2 text-black font-bold"
                    variant={button.type === "reset" ? "outline" : ""}
                    style={
                      button.type === "submit"
                        ? { background: headingColor, color: buttonTextColor }
                        : {}
                    }
                  >
                    {button.value || button.label}
                  </Button>
                );
              })}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormUi;
