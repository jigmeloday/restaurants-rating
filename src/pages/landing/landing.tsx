import Button from '../../shared/component/button/button.component';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../auth/services/auth.slice';

function Landing() {
    const dispatch = useDispatch();
    return(
        <>
            <Button label='Logout' click={() => dispatch(userLogOut() as any)} />
        </>
    )
}

export default Landing;
