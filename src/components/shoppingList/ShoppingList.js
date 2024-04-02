import React from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import { todoRoutePath } from '../todo/Todo';

export const ShoppingList = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const randomNumber = Math.random()*10
    const navigateTo = route => () => navigate(route);
    const replace = () => navigate(shoppingListRoutePath, {state:{number: randomNumber}, replace: true});
    const back = () => navigate(-1);

    return (
        <>
          <MenuItem onClick={back}>BACK</MenuItem>
          <MenuItem onClick={navigateTo(todoRoutePath)}>go to TODO</MenuItem>
          <MenuItem onClick={() => {
            replace()
            navigateTo(todoRoutePath)()
          }}>Add random number and go to TODO</MenuItem>
          {state?.number}
        </>
    );
}

export const shoppingListRoutePath = '/app/shoppingList';
