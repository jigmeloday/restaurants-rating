import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import { MenuComponentProps } from '../model/header.model';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../../../pages/auth/services/auth.slice';

function MenuComponent(props: MenuComponentProps) {
    const dispatch = useDispatch();
    const onLogOut = () => {
        dispatch(userLogOut() as keyof unknown);
        props.handleClose()
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
            <MenuItem onClick={props.handleClose}>Profile</MenuItem>
            <MenuItem onClick={props.handleClose}>My account</MenuItem>
            <MenuItem onClick={onLogOut}>Logout</MenuItem>
        </Menu>
    )
}

export default MenuComponent;
