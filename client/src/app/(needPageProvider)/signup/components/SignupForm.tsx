"use client";

import InputProvider from "@/app/components/form/InputProvider";
import { useMutate } from "@/hooks/mutate";
import { swalList } from "@/lib/swal";
import { IApiResponse } from "@/lib/types/api";
import { validates } from "@/lib/validates";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutate();

  const onSubmit = (data: object) => {
    mutate(
      { url: `${process.env.NEXT_PUBLIC_API_URL}/user`, body: data },
      {
        onSuccess: (data) => {
          swalList.success(data.message);
        },
        onError: (error) => {
          const { message } = error?.response?.data as IApiResponse;
          swalList.error(message);
        },
      }
    );
  };

  const inputDivClasses = "flex flex-col gap-2 relative";
  const inputClasses =
    "border block shadow-md py-2 px-2 focus:outline-none rounded-md focus:shadow-xl";

  const baseData = {
    register: register,
    inputClasses: inputClasses,
    errors: errors,
    errorClasses: "absolute -bottom-6",
  };

  const mapDataByName = {
    username: {
      name: "username",
      placeholder: "input your first name",
      validate: validates.name,
      ...baseData,
    },
    email: {
      name: "email",
      placeholder: "input your email",
      validate: validates.email,
      ...baseData,
    },
    password: {
      name: "password",
      inputType: "password",
      placeholder: "********",
      validate: validates.password,
      ...baseData,
    },
    "password-confirm": {
      name: "password-confirm",
      inputType: "password",
      placeholder: "********",
      validate: {
        ...validates.password,
        validate: (value: string) => {
          if (value === watch("password")) return true;
          else return "Passwords do not match";
        },
      },
      ...baseData,
    },
  };

  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`);
    const data = await response.json();
    console.log(data);
    return data;
  };

  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-muted-foreground">
          Enter your information to create an account
        </p>
        <button onClick={() => fetchData()}>겟터</button>
      </div>
      <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div className={inputDivClasses}>
            <label htmlFor="name">Name</label>
            <InputProvider {...mapDataByName.username} />
          </div>
        </div>
        <div className={inputDivClasses}>
          <label htmlFor="email">Email</label>
          <InputProvider {...mapDataByName.email} />
        </div>
        <div className={inputDivClasses}>
          <label htmlFor="password">Password</label>
          <InputProvider {...mapDataByName.password} />
        </div>
        <div className={inputDivClasses}>
          <label htmlFor="confirm-password">Confirm Password</label>
          <InputProvider {...mapDataByName["password-confirm"]} />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className=" bg-blue-400 rounded-xl w-fit px-3 py-1.5 text-white hover:opacity-80 transition"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
