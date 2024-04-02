import React from 'react';
import { useHistory } from 'react-router';
import { useLocation } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import { todoRoutePath } from '../todo/Todo';

export const ShoppingList = () => {
    const {state: { number } = {}} = useLocation();
    
    const history = useHistory();
    const randomNumber = Math.random()*10
    const navigateTo = route => () => history.push(route);
    const replace = () => history.replace({ pathname: shoppingListRoutePath, state:{number: randomNumber}});
    const back = () => history.goBack();

    return (
        <>
          <MenuItem onClick={back}>BACK</MenuItem>
          <MenuItem onClick={navigateTo(todoRoutePath)}>go to TODO</MenuItem>
          <MenuItem onClick={() => {
            replace()
            navigateTo(todoRoutePath)()
          }}>Add random number and go to TODO</MenuItem>
          {number}
        </>
    );
}

export const shoppingListRoutePath = '/app/shoppingList';
