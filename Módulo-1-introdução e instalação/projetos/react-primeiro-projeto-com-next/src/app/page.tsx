import { Card } from "./components/Card";
import { GeoForm } from "./components/GeoForm";
import { Person } from "./components/Person";



const Page = () => {
  return (
    <>
      <h1>Aulas de React</h1>
      <h5>Módulo 2</h5>

      <Card><h1>Título da children</h1>
            <p>Texto dentro da Children</p>
      </Card>
    </>
   
  );
}

export default Page;