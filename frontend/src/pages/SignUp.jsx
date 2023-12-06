import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignUp({ confirm }) {
  const router = useRouter();

  return (
    <div className="flex h-screen">
      <div className="flex-1 justify-center items-center flex">
        <div className=" w-96 h-[550px] ">
          <div className="">
            <div className="flex justify-center mb-8">
              <div>
                <img src="./geldlogo.svg"></img>
              </div>
              <div>
                <img src="./geldd.svg"></img>
              </div>
            </div>
            <h1 className="text-xl flex justify-center font-bold mb-3">
              Create Geld account
            </h1>
            <p className="flex justify-center">
              Sign up below to create your Wallet account
            </p>
          </div>

          <div className=" flex flex-col gap-2 mt-12">
            <input
              placeholder="Name"
              className="rounded-xl h-10 p-4 w-full border-2 bg-slate-200"
            ></input>
            <input
              placeholder="Email"
              className="rounded-xl h-10 p-4 w-full border-2 bg-slate-200"
            ></input>
            <input
              placeholder="Password"
              className="rounded-xl h-10 p-4 w-full border-2 bg-slate-200"
            ></input>
            <input
              placeholder="Re-assword"
              className="rounded-xl h-10 p-4 w-full border-2 bg-slate-200"
            ></input>
            <button
              className="bg-blue-600 w-full rounded-xl h-10 border-2 text-white"
              onClick={() => router.push("/confirm")}
            >
              Sign Up
            </button>
            <div className="flex gap-4 m-20">
              <p className="flex justify-center">Already have account?</p>
              <p className="flex justify-center text-blue-500">
                <Link href="/">Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-blue-600"></div>
    </div>
  );
}
