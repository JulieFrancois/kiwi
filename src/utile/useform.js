import React from "react";
import { useState, useEffect,useRef } from "react";

const useForm = (FormAction)=>{
const FormRef = useRef(null)

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  FormAction(data)
}

  const resetForm = () => {
      FormRef.reset()
  }
  return [FormRef,handleSubmit, resetForm];
}

export default useForm;
