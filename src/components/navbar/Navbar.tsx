import { Link } from "react-router-dom"

function Navbar() {


    return (
        <>
            <div className='w-full flex justify-center py-4
                   bg-neutral-700 text-white'>

                <div className="container flex justify-between text-lg">

                    <Link to='/home' className="text-2xl font-bold">The Oldest House - Game Store</Link>

                    <div className='flex gap-4'>
                        Produtos
                        <Link to='/Categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/CadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar