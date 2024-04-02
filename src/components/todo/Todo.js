import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';
import { shoppingListRoutePath } from '../shoppingList/ShoppingList';
import { SET_TODO } from '../../Actions/ActionsTypes';

export const Todo = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const randomNumber = Math.random()*10
    const navigateTo = route => () => history.push(route);
    const replace = () => alert(randomNumber) || history.replace({ pathname: shoppingListRoutePath, state:{number: randomNumber}});
    const back = () => dispatch({ type: SET_TODO, payload: { todo: randomNumber }}) && history.goBack();
    return (
        <>
        <MenuItem onClick={back}>BACK</MenuItem>
        <MenuItem onClick={navigateTo(shoppingListRoutePath)}>go to shopping list</MenuItem>
        <MenuItem onClick={() => {
            replace()
            navigateTo(shoppingListRoutePath)()
          }}>Add random number and go to shopping list</MenuItem>
        </> 
    );
}

export const todoRoutePath = '/app/todo';
