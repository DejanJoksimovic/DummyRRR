import React from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import { shoppingListRoutePath } from '../shoppingList/ShoppingList';

export const Todo = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const randomNumber = Math.random()*10
    const navigateTo = route => () => navigate(route);
    const replace = () => navigate(shoppingListRoutePath, {state:{number: randomNumber}, replace: true});
    const back = () => navigate(-1);
    return (
        <>
        <MenuItem onClick={back}>BACK</MenuItem>
        <MenuItem onClick={navigateTo(shoppingListRoutePath)}>go to shopping list</MenuItem>
        <MenuItem onClick={() => {
            replace()
            navigateTo(shoppingListRoutePath)()
          }}>Add random number and go to shopping list</MenuItem>
          {state?.number}
        </> 
    );
}

export const todoRoutePath = '/app/todo';
