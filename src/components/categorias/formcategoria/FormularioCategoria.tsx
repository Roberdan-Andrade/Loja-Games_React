function FormularioCategoria() {

   return (
      <div className="flex flex-col items-center justify-center bg-red-500 min-h-[80vh]">
         <h1 className="text-5xl text-center font-medium py-4">
            Cadastrar Categoria
         </h1>

         <form className="w-1/2 flex flex-col gap-4" >
            <div className="flex flex-col gap-2">
               <label htmlFor="descricao">Descrição do Categoria</label>
               <input
                  type="text"
                  placeholder="Descrição"
                  name='descricao'
                  className="border-2 border-slate-700 rounded p-2"

               />
            </div>
            <button
               className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-4 mx-auto mb-16 block"
               type="submit"
            >
               Cadastrar
            </button>
         </form>
      </div>
   );
}

export default FormularioCategoria;