import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Log() {
  const {loginUserData, login} 
  return (
    <div className="flex h-screen">
      <div className="flex-1 justify-center items-center flex ">
        <div className="w-96 h-[550px]">
          <div className="flex justify-center mb-8">
            <div>
              <img src="./geldlogo.svg"></img>
            </div>
            <div>
              <img src="./geldd.svg"></img>
            </div>
          </div>
          <h1 className="text-2xl font-bold justify-center flex mb-3">
            Welcome Back
          </h1>
          <p className="flex justify-center mb-8">
            Welcome back, Please enter your details
          </p>
          <div className="flex gap-4 flex-col">
            <input
              placeholder="Email"
              className="rounded-xl w-full h-10 p-4 border-2 bg-slate-200"
            ></input>
            <input
              placeholder="Password"
              className="rounded-xl w-full h-10 p-4 border-2 bg-slate-200"
            ></input>
            <button className="bg-blue-600 border-2 rounded-xl w-full h-10 text-xl text-white ">
              Log in
            </button>
          </div>
          <div className="flex m-12 gap-4">
            <p className="flex justify-center">Dont have account?</p>
            <p className="flex justify-center text-blue-500">
              <Link href={"/SignUp"}>Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-blue-600"></div>
    </div>
  );
}
