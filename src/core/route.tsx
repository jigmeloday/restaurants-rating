import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Login from '../pages/auth/login';
import Landing from '../pages/landing/landing';
import { useSelector } from 'react-redux';
import { selectUser } from '../pages/auth/services/auth.slice';
import Header from '../component/header/header';

function CoreRoutes() {
    const user = useSelector(selectUser);
    const AUTHENTICATED_ROUTE = [
        {
            element: <Landing />,
            path: '/'
        },
        {
            element: <>Visited</>,
            path: '/visited'
        },
        {
            element: <>collection</>,
            path: '/collections'
        },{
            element: <>photo</>,
            path: '/photos'
        }
    ]
    return(
        <Suspense fallback={ null }>
            {
               user ? <Header /> : null
            }
            <Routes>
                {
                    user ? AUTHENTICATED_ROUTE.map(({ element, path}) =>
                            (  <Route path={path} element={element} key={path} />)) :
                        <Route path='' element={<Login />} />
                }
            </Routes>
        </Suspense>
    )
}


export default CoreRoutes;
