import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import { todoRoutePath } from '../todo/Todo';
import {shoppingListRoutePath} from '../shoppingList/ShoppingList'
import { useDispatch, useSelector } from 'react-redux';
import { SET_TODO } from '../../Actions/ActionsTypes';

export const Navigation = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.todo)
    useEffect(()=> {
        if (data) {
          dispatch({ type: SET_TODO, payload: { todo: null }})
        }
      }, [])

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
