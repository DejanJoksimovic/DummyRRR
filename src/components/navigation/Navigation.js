import React from 'react';
import { useNavigate } from 'react-router';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import { todoRoutePath } from '../todo/Todo';
import {shoppingListRoutePath} from '../shoppingList/ShoppingList'

export const Navigation = () => {

    const navigate = useNavigate ();
    const navigateTo = route => () => navigate(route);

        return (
            <MenuList>
                <MenuItem onClick={navigateTo(todoRoutePath)}>First demo page</MenuItem>
                <MenuItem onClick={navigateTo(shoppingListRoutePath)}>Second demo page</MenuItem>
            </MenuList>
        );
}

export const navigationRoutePath = '/app';
