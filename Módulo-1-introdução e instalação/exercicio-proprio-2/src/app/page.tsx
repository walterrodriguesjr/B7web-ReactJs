import Image from 'next/image'
import { Header } from './components/Header';
import { Table } from './components/Table';
import { pessoa } from './dados/Pessoa';


const Page = () => {
  return (
    <>
    
      <Header />
        <br />
        <Table pessoa={pessoa}/>
   
    
    </>
  );
}

export default Page;
