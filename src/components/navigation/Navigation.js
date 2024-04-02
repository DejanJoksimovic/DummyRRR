import React from 'react';
import { useHistory } from 'react-router';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import { todoRoutePath } from '../todo/Todo';
import {shoppingListRoutePath} from '../shoppingList/ShoppingList'

export const Navigation = () => {

    const history = useHistory();
    const navigateTo = route => () => history.push(route);

        return (
            <MenuList>
                <MenuItem onClick={navigateTo(todoRoutePath)}>go to Todo</MenuItem>
                <MenuItem onClick={navigateTo(shoppingListRoutePath)}>go to Shopping list</MenuItem>
            </MenuList>
        );
}

export const navigationRoutePath = '/app';
