"use client";

import React, { useRef, useState } from "react";
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

const PreViewFormUi = ({
  formData,

  bgInternalColor,
  bgExternalColor,
  textColor,
  headingColor,

  buttonTextColor,

  handleNewInput,
}) => {
  const formRef = useRef();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    console.log("HERE ! " + JSON.stringify(data));
    handleNewInput(data).then((res) => {
      console.log(res);
    });

    setIsSubmitted(true);
  };

  return (
    <div
      className="w-[100%] flex justify-center items-center min-h-screen p-4 "
      style={{ background: bgExternalColor }}
    >
      <div
        className="flex flex-col items-center justify-center  w-[60%] md:w-[60%] max-w-[600px] p-4  rounded-md border-[3px] shadow-xl shadow-black border-black"
        style={{ background: bgInternalColor, color: textColor }}
      >
        <h1
          className="text-3xl font-extrabold text-center"
          style={{ color: headingColor }}
        >
          {formData.formTitle || formData.title}
        </h1>
        <h2 className="text-xl font-bold text-center">
          {formData.formSubheading || formData.subheading}
        </h2>

        {!isSubmitted && (
          <form
            ref={formRef}
            className="w-full"
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
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
                      name={field.fieldName || field.name}
                    >
                      <Select
                        className="w-full text-black"
                        name={field.fieldName || field.name}
                        required={field.fieldRequired}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder={field.fieldLabel} />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options.map((option, index) => (
                            <SelectItem
                              key={index}
                              value={option.value || option}
                            >
                              {option.label || option.value || option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
                      </Label>
                      <Textarea
                        key={index}
                        className="w-full p-2 border rounded my-1 text-black"
                        placeholder={field.placeholder}
                        name={field.fieldName || field.name}
                        required={field.fieldRequired}
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
                      name={field.fieldName || field.name}
                      required={field.fieldRequired}
                    >
                      <Label>{field.fieldLabel}</Label>
                      {field.options &&
                        field.options.map((option, index) => {
                          return (
                            <div
                              className="flex items-center gap-2"
                              key={index}
                            >
                              <RadioGroupItem
                                value={option.value}
                                id={option.value}
                              />
                              <Label htmlFor="option-one">{option.label}</Label>
                            </div>
                          );
                        })}
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
                        </Label>
                        <div className="flex  gap-2  ">
                          {field.options.map((option, index) => {
                            return (
                              <div
                                className="flex items-center gap-2"
                                key={index}
                              >
                                <Checkbox
                                  name={option.value}
                                  id={option.value}
                                />
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
                        <Checkbox
                          name={field.fieldName || field.name}
                          id={field.fieldName}
                        />
                        <Label htmlFor={field.fieldName}>
                          {field.fieldLabel}
                        </Label>
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
                      </Label>
                      <Input
                        className="w-full p-2 border rounded my-1 text-black"
                        placeholder={field.placeholder}
                        name={field.fieldName || field.name}
                        type={field.fieldType || field.type}
                        required={field.fieldRequired}
                      />
                    </div>
                  );
                }
              })}

            <div className="w-full flex justify-center items-center">
              {formData &&
                formData.buttons &&
                formData.buttons.map((button, index) => {
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
                      type={button.type}
                    >
                      {button.value || button.label}
                    </Button>
                  );
                })}
            </div>
          </form>
        )}

        {isSubmitted && (
          <div className="text-center mt-4">
            <p>Thank you for submitting the form!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreViewFormUi;
