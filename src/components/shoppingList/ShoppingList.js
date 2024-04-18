import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux'
import { useLocation } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import { todoRoutePath } from '../todo/Todo';
import { useDispatch } from 'react-redux';
import { SET_TODO } from '../../Actions/ActionsTypes';

export const ShoppingList = () => {
    const dispatch = useDispatch()
    const {state: { number } = {}} = useLocation();
    const data = useSelector(state => state.todo)
    const history = useHistory();
    const randomNumber = Math.random()*10
    const navigateTo = route => () => history.push(route);
    const replace = () => alert(randomNumber) || history.replace({ pathname: shoppingListRoutePath, state:{number: randomNumber}});
    const back = () => history.goBack();

    useEffect(()=> {
      if (data) {
        alert(data)
        dispatch({ type: SET_TODO, payload: { todo: null }}) // comment this
        history.replace({ pathname: shoppingListRoutePath, state:{number: data}})
      }
    }, [])

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
