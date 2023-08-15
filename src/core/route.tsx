import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Login from '../pages/auth/login';

function CoreRoutes() {
    return(
        <Suspense fallback={ null }>
            <Routes>
                <Route path='' element={<Login />} />
            </Routes>

        </Suspense>
    )
}


export default CoreRoutes;
