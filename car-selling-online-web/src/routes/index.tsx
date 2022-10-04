import {
    Routes,
    Route
} from "react-router-dom";
import Login from '../pages/login';
import NotFound from '../pages/notFound';

export function Router() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}