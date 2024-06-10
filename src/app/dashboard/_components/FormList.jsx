import { Edit, Share2, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
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
import { deleteForm } from "@/crudUtils/fireStoreCrud";

const FormList = ({ forms, setForms }) => {
  const onDeleteClick = async (formId) => {
    await deleteForm(formId);
    setForms((prevForms) => {
      return prevForms.filter((form) => form.id !== formId);
    });
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
                <Link href={"/live-preview/"+form.id}  target="_blank" >
                  <Share2 size={20}  className="cursor-pointer" />
                </Link>
                <div className=" flex gap-2">
                  <Link href={"/edit_form/" + form.id}>
                    <Edit size={20} className="text-primary cursor-pointer" />{" "}
                  </Link>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Trash2
                        size={20}
                        className="text-red-500 cursor-pointer"
                      />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your Form
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => {
                            onDeleteClick(form.id);
                          }}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FormList;
