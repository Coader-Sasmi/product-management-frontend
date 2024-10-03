"use client";

export default function Login() {
  return (
    <section className="main-container w-full h-screen flex justify-center items-center">
      <div className="lg:w-2/3 flex ">
        <div className="lg:w-1/2 hidden lg:block">
          <img src="./login.png" alt="login image" className="w-auto" />
        </div>
        <div className="lg:w-1/2 lg:px-10 flex flex-col gap-8 "></div>
      </div>
    </section>
  );
}
