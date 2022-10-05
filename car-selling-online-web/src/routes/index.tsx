import {
    Routes,
    Route
} from "react-router-dom";
import CarroDetalhes from "../pages/carroDetalhes";
import Home from "../pages/home";
import Login from '../pages/login';
import NotFound from '../pages/notFound';
import PainelAdmin from "../pages/painelAdmin";

export function Router() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/carro/:id' element={<CarroDetalhes />} />
            <Route path='/painel' element={<PainelAdmin />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}