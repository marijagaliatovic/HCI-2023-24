import Link from "@/node_modules/next/link";
import { SetStateAction, useState } from "react";

export default function page() {
  return (
    <div className="max-w-2xl mx-auto my-auto flex flex-col px-1 pt-10 lg:px-4 bg-white mt-10 sticky top-24">
      <div className="bg-white sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="bg-white mt-5 text-center text-2xl font-bold leading-9 tracking-tight">
          Log in
        </h2>
      </div>
      <div className="bg-white mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="bg-white space-y-6 " action="#" method="POST">
          <div className="bg-white mt-2">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              autoComplete="username"
              required
              className="bg-white block w-full rounded-md border-gray-300 border py-2 px-3 placeholder:text-gray-400"
            />
          </div>
          <div className="bg-white mt-2">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="password"
              required
              className="bg-white block w-full rounded-md border-gray-300 border py-2 px-3 placeholder:text-gray-400"
            />
          </div>

          <div className="bg-white flex items-center justify-center">
            <i className="decoration-black flex items-center justify-center text-center not-italic text-sm lg:text-base font-semibold hover:underline rounded-xl lg:rounded-2xl mt-3 py-2 px-6">
              <Link href="/">Log in</Link>
            </i>
          </div>
        </form>
        <p className="bg-white mt-10 text-center py-5 text-sm text-gray-300">
          Don't have an account?&nbsp;
          <Link href="/signup">
            <span className="bg-white font-semi-old hover:underline">
              Sign up here
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}