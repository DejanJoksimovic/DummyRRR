import React from 'react';
import { useHistory } from 'react-router';
import MenuItem from '@material-ui/core/MenuItem';
import { shoppingListRoutePath } from '../shoppingList/ShoppingList';

export const Todo = () => {
    const history = useHistory();
    const randomNumber = Math.random()*10
    const navigateTo = route => () => history.push(route);
    const replace = () => history.replace({ pathname: shoppingListRoutePath, state:{number: randomNumber}});
    const back = () => history.goBack();
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
