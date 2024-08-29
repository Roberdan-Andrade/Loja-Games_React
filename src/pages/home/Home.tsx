function Home() {
    return (
        <div className="bg-red-500 flex justify-center min-h-[80vh]"> {/*Inicio div 1*/}

            <div className="container grid grid-cols-2 text-white"> {/*Inicio div 2*/}

                <div className="flex flex-col gap-4 items-center justify-center py-4"> {/*Inicio div 3.1*/}
                    <h2 className="text-5xl font-bold">Seja Bem Vinde Diretore!</h2>
                    <p className="text-xl">Encontre aqui sua proxima missão</p>

                    <div className="flex justify-around gap-4">
                        <div className="rounded border-white border-solid border-2 py-2 px-4">
                            Ver jogos
                        </div>
                    </div>
                </div> {/*Final div 3.1*/}

                <div className="flex justify-center items-center"> {/*Inicio div 3.2*/}
                    <img className="w-2/3 h-2/3 rotate-180" src="https://ik.imagekit.io/Roberdan42/Outros/Black_Triangle.png?updatedAt=1724949840190" alt="Imagem pagina home" />
                </div>
            </div>
        </div>
    )
}

export default Home