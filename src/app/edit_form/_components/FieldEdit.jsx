"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Edit, Trash } from "lucide-react";
import React, { useState } from "react";

const FieldEdit = ({ index, defaultValue, onUpdate ,deleteField }) => {
  const [label, setLabel] = useState(defaultValue.fieldLabel);
  const [placeholder, setPlaceholder] = useState(defaultValue.placeholder);
  return (
    <div className="flex items-center gap-4 ">
      <Popover>
        <PopoverTrigger>
          <Edit className="h-5 w-5 cursor-pointer" />
        </PopoverTrigger>
        <PopoverContent>
          <Label>Edit Label</Label>
          <Input
            type="text"
            defaultValue={defaultValue.fieldLabel}
            placeholder=""
            onChange={(event) => {
              setLabel(event.target.value);
            }}
          />
          <Label>Edit Placeholder</Label>
          <Input
            type="text"
            defaultValue={defaultValue.placeholder}
            placeholder=""
            onChange={(event) => {
              setPlaceholder(event.target.value);
            }}
          />
          <Button
            onClick={() =>
              onUpdate({ fieldLabel: label, placeholder: placeholder }, index)
            }
            className="mt-3"
          >
            Save
          </Button>
        </PopoverContent>
      </Popover>

      

      <AlertDialog>
        <AlertDialogTrigger><Trash className="h-5 w-5 text-red-500 cursor-pointer" /></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will  delete this field
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={()=>{deleteField(index)}}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default FieldEdit;
