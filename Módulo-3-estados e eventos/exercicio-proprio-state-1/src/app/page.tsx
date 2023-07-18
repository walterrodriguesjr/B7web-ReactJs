"use client"




const Page = () => {
  return (
    <>

      {/* FORMULÁRIO */}
      <div className="grid min-h-screen place-items-center">
        <div>
          <h1 className="text-xl font-semibold">Cadastro Pessoal</h1>
          <div>
            <span>
              <label className="block text-xs font-semibold text-gray-600 uppercase">Nome</label>
              <input type="text" placeholder="Digite o nome..." className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            </span>
          </div>

          <button className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
            Cadastrar
          </button>
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      NOME
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <ul className="bg-gray-100 border-b">
          
                    <li className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Mark
                    </li>

                  </ul>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>



      
   
      

    </>
  );
}

export default Page;