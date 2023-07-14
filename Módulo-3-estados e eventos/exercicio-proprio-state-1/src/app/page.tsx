"use client"

import Image from 'next/image'
import { FormEvent, useState } from 'react';

const Page = () => {

  const [data, setData] = useState(1);

  const click = (event: FormEvent) => {
    event.preventDefault();
    setData(data + 1);
  }

  return (
    <>

      <div className="bg-white px-6 py-4 my-3 w-3/4 mx-auto shadow rounded-md flex items-center">
        <button onClick={click}
          type="button" className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
          Primary
        </button>
        <p>{data}</p>
      </div>


    </>
  );
}

export default Page;