import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { loadShoppingList, clearShoppingList } from '../../Actions/Actions';

export const ShoppingList = () => {

    const dispatch = useDispatch()
    const shoppingList = useSelector(state => state.shoppingList);
    const [shoppingListLocal, setShoppingListLocal] = useState(shoppingList);

    useEffect(() => {
      setShoppingListLocal(shoppingList)
    }, [shoppingList])
    const handleChange = shoppingItemValue => () => {
      setShoppingListLocal(shoppingListLocal.reduce((acc, curr) => {
        const item = (curr.value === shoppingItemValue) ? {value: shoppingItemValue, checked: !curr.checked } : curr;
        return [...acc, item];
      }, []))
    }

    const renderShoppingItem = shoppingItem => {
      const {value, checked} = shoppingItem;
      return (<div key={value}>
        <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange(value)}
            value={value}
          />
        }
        label={value}
      />
      </div>);
    }

    return (
        <>
           <Button variant="contained" color="primary" onClick={() => dispatch(loadShoppingList())}>
                Make api call
            </Button>
            <Button variant="contained" color="primary" onClick={() => dispatch(clearShoppingList())}>
                Clear State
            </Button>
          {shoppingListLocal && shoppingListLocal.map(shoppingItem => renderShoppingItem(shoppingItem))}
        </>
    );
}

export const shoppingListRoutePath = '/app/shoppingList';
