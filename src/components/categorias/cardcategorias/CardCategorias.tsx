import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({categoria}: CardCategoriaProps) {
  return (
    <div className='border border-neutral-700 flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-neutral-700 text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.tipo}</p>
      <div className="flex">
        <Link to={`/EditarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/DeletarCategoria/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias