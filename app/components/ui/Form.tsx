"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SignInFormData, signInSchema } from "@/app/types/formTypes";
import { signIn, useSession } from "next-auth/react";
import FormField from "./FormField";
import Logo from "../../../public/logo-transparent-light.png";
import Image from "next/image";
import { AdminButton } from "./Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { EyeOff, EyeOn } from "./Icons";

const Form = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const { data: session, status } = useSession();
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema), // Apply the zodResolver
  });

  const onSubmit = async (data: SignInFormData) => {
    setLoading(true);
    setErrorMessage(""); // Clear previous error message
    const sigInData = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });

    if (sigInData?.error) {
      setErrorMessage(sigInData.error); // Set error message
      console.log(sigInData.error);
      setLoading(false);
    } else {
      router.refresh();
      router.push("/admin");
      
    }
  };

  useEffect(() => {
    if (status === "loading") {
      return; // Do nothing while loading
    }
    if (session) {
      router.replace("/admin"); // Redirect if authenticated
    } else {
      setLoading(false); // Set loading to false if not authenticated
    }
  }, [session, status, router]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="drop-shadow-sm rounded-lg border md:w-2/4 lg:w-1/4 w-full md:h-fit md:pb-10 h-screen  bg-neutral-50 md:pt-0 pt-20 md:px-0 px-10"
    >
      <div className=" flex items-center justify-center py-2">
        <Image className="max-w-40" src={Logo} alt="logo" priority />
      </div>
      <div className="flex flex-col px-8 py-4 ">
        <label className="text-sm pl-1 pb-1">Username</label>
        <FormField
          disabled={loading}
          type="text"
          placeholder="Enter your username"
          name="username"
          register={register}
          error={errors.username}
        />
        <label className="text-sm pl-1 pb-1 mt-4">Password</label>
        <div className="relative w-full">
          <FormField
            disabled={loading}
            type={showPwd ? "text" : "password"}
            placeholder="Enter your password"
            name="password"
            register={register}
            error={errors.password}
          />
          <span className="absolute max-w-fit top-3 right-3">
            {showPwd ? (
              <EyeOff onClick={() => setShowPwd(!showPwd)} />
            ) : (
              <EyeOn onClick={() => setShowPwd(!showPwd)} />
            )}
          </span>
        </div>
        {errorMessage && (
          <div className="text-red-400 text-sm py-2 px-2">{errorMessage}</div>
        )}
        <div className="text-slate-700 flex items-center justify-end py-2 pr-1">
          <p className="text-sm alig cursor-pointer hover:underline">
            Forgot password?
          </p>
        </div>
        <AdminButton isLoading={loading} />
      </div>
    </form>
  );
};

export default Form;
