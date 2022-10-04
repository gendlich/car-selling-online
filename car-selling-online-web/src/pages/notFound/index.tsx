import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="lg:w-1/4 w-2/4 bg-secundary mt-16 rounded m-auto text-center flex flex-col">
            <span className="p-16">ROTA NAO ENCONTRADA</span>
            
            <button className="hover:bg-secundaryLight bg-secundaryDark p-2 rounded"><Link to={'/'}>voltar para tela principal</Link></button>
        </div>
    )
}