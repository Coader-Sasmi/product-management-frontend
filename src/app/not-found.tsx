import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col gap-5 justify-center items-center">
      <img src="./not_found.png" alt="not found image" className="w-auto" />
      <Link href="/">
        <button className="btn bg-primary rounded-md uppercase">
          back to home
        </button>
      </Link>
    </div>
  );
}
