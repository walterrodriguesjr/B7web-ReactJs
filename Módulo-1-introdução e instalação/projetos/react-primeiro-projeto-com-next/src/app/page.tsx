import { peopleList } from "@/data/peopleList";

const Page = () => {

  const chemists = peopleList.filter(person => person.profession === 'chemist');


  return (
    <>

      <h1 className="font-bold">Aulas de React</h1>
      <h5 className="underline">Módulo 2</h5>

      {/* {peopleList.length > 0 &&
      <ul>
        {peopleList.map(person =>
          <li key={person.id}> - Nome: {person.name} - Profissão: {person.profession}</li>)}
      </ul>
} */}

      {chemists.length > 0 &&
        <>
          <h3>Lista de Químicos:</h3>
          <ul>
            {chemists.map(person => <li key={person.id}>{person.name}</li>)}
          </ul>
        </>
      }

    </>

  );
}

export default Page;