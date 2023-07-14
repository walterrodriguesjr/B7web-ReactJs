"use client"

import { useState } from "react";

const Page = () => {

  const [showSecret, setShowSecret] = useState(false);

  const handleClickButton = () => {
    if (showSecret == true) {
      setShowSecret(false);
    } else {
      setShowSecret(true);
    }
  }

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">

        <button className="bg-blue-500 p-3" onClick={handleClickButton}>{showSecret ? 'Ocultar' : 'Mostrar'}</button>
        {
          showSecret &&
          <div className="bg-blue-300 p-3 rounded-md mt-3 ">Area Secreta</div>
        }
      </div>
    </>
  );
}

export default Page;