import { useEffect, useState } from "react";
import CardCategorias from "../cardcategorias/CardCategorias";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { Triangle } from "react-loader-spinner";

function ListaCategorias() {
   const [categorias, setCategorias] = useState<Categoria[]>([]);

   async function buscarCategorias() {
      try {
         await buscar('/categorias', setCategorias);
      } catch (error: any) {
         alert('Erro ao buscar categorias!')
      }
   }

   useEffect(() => {
      buscarCategorias();
   }, [categorias.length]);

   return (
      <>
         {categorias.length === 0 && (
            <Triangle
               visible={true}
               height="20%"
               width="20%"
               color="#404040"
               ariaLabel="triangle-loading"
               wrapperStyle={{
                  'background-color': '#ef4444',
                  'display': 'flex',
                  'justify-content': 'center',
                  'padding-top': '20vh'
               }}
               wrapperClass=""
            />
         )}

         <div className="flex justify-center w-full py-4 bg-red-500 min-h-[80vh]">
            <div className="container flex flex-col">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categorias.map((categoria) => (
                     <>
                        <CardCategorias key={categoria.id} categoria={categoria} />
                     </>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}

export default ListaCategorias;