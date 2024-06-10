"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import CreateForm from "./_components/CreateForm";
import FormList from "./_components/FormList";
import { getAllForms } from "@/crudUtils/fireStoreCrud";
import { useUser } from "@clerk/nextjs";

const Dashboard = () => {
  const { user } = useUser();
  const [forms, setForms] = useState([]);
  const [render, setRender] = useState(0);
  useEffect(() => {
    if (!user) return;
    console.log(user.username);
    getAllForms(user.username)
      .then((data) => {
        console.log(data);
        setForms(data);
      })
      .then(() => {
        setRender(render + 1);
      });
  }, [user]);
  return (
    <div key={render} className="p-10">
      <div className=" flex justify-between ">
        <h2 className="font-bold text-3xl">Dashboard</h2>
        <CreateForm />
      </div>

      {/* List of forms */}

      <FormList forms={forms} setForms={setForms}/>
    </div>
  );
};

export default Dashboard;
