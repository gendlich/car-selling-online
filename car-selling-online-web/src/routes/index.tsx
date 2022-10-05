import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { useAuth } from "../authContext";
import CarroDetalhes from "../pages/carroDetalhes";
import Home from "../pages/home";
import Login from '../pages/login';
import NotFound from '../pages/notFound';
import PainelAdmin from "../pages/painelAdmin";
import NovoCarro from "../pages/painelAdmin/novoCarro";

const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { authenticated } = useAuth();

    return authenticated ? <>{children}</> : <Navigate to='/login' replace />;
}

export function Router() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/carro/:id' element={<CarroDetalhes />} />
            <Route path='*' element={<NotFound />} />

            {/* rotas privadas */}
            <Route path='/painel' element={<RequireAuth><PainelAdmin /></RequireAuth>} />
        
            <Route path='/carro/:id/editar' element={<RequireAuth><NovoCarro /></RequireAuth>} />
            <Route path='/carro/novo' element={<RequireAuth><NovoCarro /></RequireAuth>} />
        </Routes>
    )
}