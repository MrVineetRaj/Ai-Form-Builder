"use client";

import React, { useEffect } from "react";
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

const FormUi = ({ formData }) => {
  useEffect(() => {
    console.log("formData", formData);
  }, [formData]);
  return (
    <div className="w-[100%] flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col items-center justify-center  w-[60%] md:w-[60%] max-w-[600px] p-4  border">
        <h1 className="text-3xl font-extrabold text-primary text-center">
          {formData.formTitle || formData.title}
        </h1>
        <h2 className="text-xl font-bold text-gray-600 text-center">
          {formData.formSubheading || formData.subheading}
        </h2>

        <form className="w-full">
          {formData &&
            formData.fields &&
            formData.fields.map((field, index) => {
              if (field.fieldType === "select") {
                return (
                  <Select className="w-full" key={index}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={field.fieldLabel} />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options.map((option, index) => (
                        <SelectItem key={index} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                );
              } else if (field.fieldType === "textarea") {
                return (
                  <div className="w-full p-2  rounded my-2" key={index}>
                    <Label
                      htmlFor={field.fieldName}
                      className="text-gray-500 text-sm"
                    >
                      {field.fieldLabel}
                    </Label>
                    <Textarea
                      key={index}
                      className="w-full p-2 border rounded my-1"
                      placeholder={field.placeholder}
                    />
                  </div>
                );
              } else if (field.fieldType === "radio") {
                return (
                  <RadioGroup
                    defaultValue="option-one"
                    className="flex items-center gap-4 mt-4 text-gray-500"
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
                  </RadioGroup>
                );
              } else if (field.fieldType === "checkbox") {
                if (field.options && field.options.length > 0) {
                  return (
                    <div className="flex gap-4 items-center mt-4">
                      <Label>{field.fieldLabel}</Label>
                      <div className="flex items-center gap-2  text-gray-500">
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
                      className="flex items-center gap-2 mt-4 text-gray-500"
                      key={index}
                    >
                      <Checkbox name={field.fieldName} id={field.fieldName} />
                      <Label htmlFor={field.fieldName}>
                        {field.fieldLabel}
                      </Label>
                    </div>
                  );
                }
              } else {
                return (
                  <div className="w-full p-2  rounded my-2" key={index}>
                    <Label
                      htmlFor={field.fieldName}
                      className="text-gray-500 text-sm"
                    >
                      {field.fieldLabel}
                    </Label>
                    <Input
                      className="w-full p-2 border rounded my-1"
                      placeholder={field.placeholder}
                      name={field.fieldName}
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
                    className=" p-2 rounded my-2 mx-2"
                    variant={button.type === "reset" ? "outline" : ""}
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
