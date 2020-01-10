import React from 'react';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import {anotherComponentRoutePath} from '../anotherComponent/AnotherComponent'
import { useHistory } from 'react-router';

export const Navigation = () => {

    const history = useHistory();

    const navigateTo = route => () => history.push(route);

        const id = 3;
        return (
            <MenuList>
                <MenuItem onClick={navigateTo(`/app/component/${id}`)}>SomeId in Button Component</MenuItem>
                <MenuItem onClick={navigateTo(anotherComponentRoutePath)}>Dummy Text in Button Component</MenuItem>
            </MenuList>
        );
}

export const navigationRoutePath = '/app';
