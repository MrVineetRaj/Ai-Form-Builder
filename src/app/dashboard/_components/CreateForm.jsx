"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AiChatSession } from "@/config/AiModel";
import { createForms } from "@/crudUtils/fireStoreCrud";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const CreateForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { user } = useUser();

  const onCreateForm = async () => {
    setIsLoading(true);

    setOpenDialog(false);
    let prompt =
      "description " +
      userInput +
      " ,on the basis of description please give me form in json formate with form title,form subheading with input tag name, field name ,placeholder , field label ,fieldType , fieldRequired and atleast use camel case name convention two form buttons for html form tag and. just json formate nothing else needed also don't send ```json from start and ``` from end of json formate.";

    const result = await AiChatSession.sendMessage(prompt);
    let formId = await createForms(result.response.text(), user?.username);
    console.log("formId", formId);
    router.push(`/edit_form/${formId}`);
    setIsLoading(false);
  };

  return (
    <div>
      <Button
        disabled={isLoading}
        onClick={() => {
          setOpenDialog(true);
        }}
      >
        {!isLoading ? " + Create Form" : <Loader2 className="animate-spin" />}
      </Button>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Form</DialogTitle>
            <DialogDescription>
              <Textarea
                className="my-2 text-black font-semibold"
                placeholder={`${userInput || "Write description for you form"}`}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <span className="flex gap-2 my-3 justify-end">
                <Button
                  variant="destructive"
                  onClick={() => {
                    setOpenDialog(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  disabled={isLoading}
                  onClick={() => {
                    onCreateForm();
                  }}
                >
                  Create
                </Button>
              </span>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateForm;
