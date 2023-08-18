import { Suspense, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate, useRoutes } from "react-router-dom";
import Landing from '../pages/landing/landing';
import { useSelector } from 'react-redux';
import { selectUser } from '../pages/auth/services/auth.slice';
import Header from '../component/header/header';
import Auth from '../pages/auth/auth';
import Profile from '../pages/profile/profile';
import Visited from '../pages/visited/visited';

function CoreRoutes() {
    const user = useSelector(selectUser);
    const path = useLocation().pathname;
    const router = useNavigate();
    const AUTHENTICATED_ROUTE = [
        {
            element: <Landing />,
            path: '/'
        },
        {
            element: <Visited/>,
            path: '/visited'
        },
        {
            element: <>collection</>,
            path: '/new'
        },{
            element: <>photo</>,
            path: '/photos'
        },
        {
            element: <Profile />,
            path: '/profile'
        }
    ];
    useEffect(() => {
       if ( user && path === '/signup' ) {
           router('/')
       }
    }, [user]);
    return(
        <Suspense fallback={ null }>
            {
               user ? <Header /> : null
            }
            <Routes>
                {
                    user ? AUTHENTICATED_ROUTE.map(({ element, path}) =>
                            (  <Route path={path} element={element} key={path} />)) :
                        <Route path='/*' element={<Auth />} />
                }
            </Routes>
        </Suspense>
    )
}


export default CoreRoutes;
