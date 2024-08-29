function DeletarCategoria() {
  
  return (
    <div className="bg-red-500 min-h-[80vh]">
    <div className='container w-1/3 mx-auto  pt-12'>
      <h1 className='text-5xl text-center font-medium py-4'>Deletar Categoria</h1>

      <p className='text-center font-semibold text-lg mb-4 px-4'>Você tem certeza de que deseja apagar o Categoria a seguir?</p>

      <div className='border border-neutral-700 flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-neutral-700 text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>Categoria</p>
      <div className="flex">
        <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' >Não</button>
        <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' >
          Sim
        </button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default DeletarCategoria