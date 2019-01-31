import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class ComponentClass extends Component {

    render() {
        const someId = this.props.someId
        return (
            <Button variant="contained" color="primary">
                {someId}
            </Button>
        );
    }
}
// test

const mapStateToProps = state => {
    return {
        someId: state.someId
    };
};

const mapDispatchToProps = () => {
    return {}
}

const ComponentConnector = connect => connect(mapStateToProps, mapDispatchToProps)(ComponentClass);

export default ComponentConnector;
export const componentRoutePath = '/app/component';
