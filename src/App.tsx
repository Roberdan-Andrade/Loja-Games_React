import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import ListaCategorias from "./components/categorias/listacategorias/ListaCategorias"
import FormularioCategoria from "./components/categorias/formcategoria/FormularioCategoria"
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria"

function App() {

   return (
      <>
         <BrowserRouter>
            <Navbar />
            <div className="min-h-[80vh]">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Home" element={<Home />} />
                  <Route path="/Categorias" element={<ListaCategorias />}/>
                  <Route path="/CadastroCategoria" element={<FormularioCategoria />}/>
                  <Route path="/EditarCategoria/:id" element={<FormularioCategoria />}/>
                  <Route path="/DeletarCategoria" element={<DeletarCategoria />}/>
               </Routes>
            </div>
            <Footer />
         </BrowserRouter>
      </>
   )
}

export default App
