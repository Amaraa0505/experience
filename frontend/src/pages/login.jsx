import { useRouter } from "next/router";
import { Logo } from "@/components/Logos";
import { useContext } from "react";
import { UserContext } from "@/context/UserProvider";

export default function LogIn() {
  const { loginUserData, changeLoginUserData, login } = useContext(UserContext);
  const router = useRouter();

  return (
    <div className="flex w-screen h-screen">
      <div className="flex-1 flex flex-col items-center justify-center bg-white gap-3">
        <Logo />
        <h3 className="font-semibold text-xl ">Welcome Back</h3>
        <p className="text-[#334155]">
          Welcome back, Please enter your details
        </p>
        <input
          type="text"
          name="email"
          onChange={(e) => {
            changeLoginUserData(e.target.name, e.target.value);
          }}
          placeholder="Email"
          className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full mt-6 max-w-xs"
          value={loginUserData.email}
        />
        <input
          type="password"
          name="password"
          onChange={(e) => {
            changeLoginUserData(e.target.name, e.target.value);
          }}
          placeholder="Password"
          className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full max-w-xs"
          value={loginUserData.password}
        />
        <button
          onClick={login}
          className="btn btn-primary w-full max-w-xs text-lg text-white font-normal rounded-full"
        >
          Log in
        </button>
        <div className="flex gap-2 mt-7">
          <h3 className="text-[#334155]">Don't have an account?</h3>
          <button
            className="text-[#0166FF]"
            onClick={() => router.push("/sign-up")}
          >
            Sign up
          </button>
        </div>
      </div>
      <div className="flex-1 bg-[#0166FF] "></div>
    </div>
  );
}
