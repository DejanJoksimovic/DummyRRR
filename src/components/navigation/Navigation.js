import React, { Component } from 'react';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import {componentRoutePath} from '../component/Component'
import {anotherComponentRoutePath} from '../anotherComponent/AnotherComponent'

const context = React.createContext('history');
export const {Provider, Consumer} = context;

class Navigation extends Component {

    navigateTo = history => route => () => {
        history.push(route);
    }

    render() {
        const navigateTo = this.navigateTo(this.props.history);
        return (
            <MenuList>
                <MenuItem onClick={navigateTo(componentRoutePath)}>SomeId in Button Component</MenuItem>
                <MenuItem onClick={navigateTo(anotherComponentRoutePath)}>Dummy Text in Button Component</MenuItem>
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

const connectNavigation = () => 
    (<Consumer>
        {history => <Navigation history={history} />}
    </Consumer>);

const NavigationConnector = connect => connect(mapStateToProps, mapDispatchToProps)(connectNavigation)

export default NavigationConnector;
export const navigationRoutePath = '/app';
