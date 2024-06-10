"use client"

import { getAllForms } from '@/crudUtils/fireStoreCrud';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import ResponseList from './_conpmonent/ResponsList';

const Responses = () => {
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
    <div className='p-5 border m-4 min-h-[600px]'>
      <ResponseList forms={forms} />
    </div>
  )
}

export default Responses