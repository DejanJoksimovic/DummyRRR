import React, { Component } from 'react';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import {componentRoutePath} from '../component/Component'
import {anotherComponentRoutePath} from '../anotherComponent/AnotherComponent'

class Navigation extends Component {

    navigateTo = route => () => {
        window.location = route;
    }

    render() {
        return (
            <MenuList>
                <MenuItem onClick={this.navigateTo(componentRoutePath)}>SomeId in Button Component</MenuItem>
                <MenuItem onClick={this.navigateTo(anotherComponentRoutePath)}>Dummy Text in Button Component</MenuItem>
            </MenuList>
        );
    }
}



const mapStateToProps = () => {
    return {
    };
};

const mapDispatchToProps = () => {
    return {}
}

const NavigationConnector = connect => connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default NavigationConnector;
export const navigationRoutePath = '/app';
