"use client";

import Link from "next/link";

export default function Home() {
  return (
    <section className="main-container w-full h-screen flex justify-center items-center">
      <div className="lg:w-2/3 flex ">
        <div className="lg:w-1/2 lg:px-10 flex flex-col gap-8 ">
          <h5 className="font-semibold text-lg">sasmita.dev</h5>

          <h3 className="uppercase text-2xl text-primary">
            product management
          </h3>
          <h1 className="text-5xl">Ecowiser</h1>
          <p className="text-fontcolor text-lg">
            With our intuitive platform, you can easily manage brands and
            products, streamlining your online {`store's`} inventory. Keep your
            website organized and up-to-date by efficiently adding, editing, and
            categorizing products under their respective brands.
          </p>
          <Link href="/login">
            <button className="btn bg-primary rounded-md">
              Login/Register
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2 hidden lg:block">
          <img src="./home.png" alt="home image" className="w-auto" />
        </div>
      </div>
    </section>
  );
}
