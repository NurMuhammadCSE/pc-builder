import RootLayout from "@/components/Layout/RootLayout";
import { signIn } from "next-auth/react";
import React from "react";

const logIn = () => {
  return (
    <div className="flex justify-center items-center h-[70vh] flex-col">
      <button
        onClick={() =>
          signIn("github", {
            callbackUrl: "http://localhost:3000/",
          })
        }
        className="btn btn-wide mt-10"
      >
        Sign in With GitHub
      </button>
    </div>
  );
};

export default logIn;

logIn.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
