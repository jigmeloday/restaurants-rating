import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import { MenuComponentProps } from '../model/header.model';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../../../pages/auth/services/auth.slice';
import { useNavigate } from 'react-router-dom';

function MenuComponent(props: MenuComponentProps) {
    const dispatch = useDispatch();
    const route = useNavigate();
    const navigate = (link: string) => {
        route(link);
        props.handleClose();
    }
    const onLogOut = () => {
        dispatch(userLogOut() as keyof unknown);
        route('/');
        props.handleClose();
    }
    return(
        <Menu
            id="basic-menu"
            anchorEl={props.anchorEl}
            open={props.open}
            onClose={props.handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
            <MenuItem onClick={props.handleClose}>My account</MenuItem>
            <MenuItem onClick={onLogOut}>Logout</MenuItem>
        </Menu>
    )
}

export default MenuComponent;
