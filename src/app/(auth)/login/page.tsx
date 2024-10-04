"use client";

import { LoginForm } from "@/app/components";
import Link from "next/link";

export default function Login() {
  return (
    <section className="main-container w-full h-screen flex justify-center items-center">
      <div className="lg:w-2/3 flex w-full ">
        <div className="lg:w-1/2 hidden lg:block">
          <img src="./login.png" alt="login image" className="w-auto" />
        </div>
        <div className="relative lg:w-[40%] bg-gradient-to-r from-primary/20 to-secondary/40 w-full lg:p-8 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-t-4 border-t-tertiary rounded-md">
          <img
            src="./leaf.png"
            alt="leaf image"
            className="absolute top-0 lg:w-28 w-16 -translate-y-1/2 translate-x-full rotate-12"
          />
          <h4 className="text-center lg:text-4xl text-2xl font-semibold text-fontcolor lg:py-7 py-4">
            sasmita.dev
          </h4>
          <div className="flex justify-center items-center flex-col gap-5">
            <h1 className="lg:text-3xl text-2xl">Login</h1>
            <LoginForm />
            <div className="flex gap-1">
              <p>{`Don't`} have an account?</p>
              <Link href="/signup">
                <p className="text-tertiary hover:underline"> Sign up</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
