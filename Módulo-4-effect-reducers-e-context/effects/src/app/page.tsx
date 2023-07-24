
"use client"

import { useEffect, useState } from "react";

const Page = () => {

  const [name, setName] = useState('Walter');
  const [age, setAge] = useState(90);

  useEffect(() => {
    console.log("Rodou");
  }, [name, age]);



  return (
    <>
      <div>
        <p>Meu nome é {name} e eu tenho {age} anos.</p>
        <hr />
        <button className="border border-blue-400 m-3 p-3" onClick={() => setName("Pedro")}>Mudar para Pedro</button>
        <button className="border border-blue-400 m-3 p-3" onClick={() => setName("João")}>Mudar para João</button>
        <br />
        <button className="border border-blue-400 m-3 p-3" onClick={() => setAge(10)}>Mudar para 10 anos</button>
        <button className="border border-blue-400 m-3 p-3" onClick={() => setAge(90)}>Mudar para 90 anos</button>
      </div>
    </>
  );
}

export default Page;

