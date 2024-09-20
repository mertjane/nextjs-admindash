"use client"
import Login from "@/app/components/form/Login";
import Provider from "../../../components/ui/Provider";
import React from "react";

const page = () => {
  return (
    <Provider>
      <Login />
    </Provider>
  );
};

export default page;
