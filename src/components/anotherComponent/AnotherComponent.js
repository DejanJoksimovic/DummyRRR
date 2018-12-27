import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class AnotherComponent extends Component {

    render() {
        const dummyText = this.props.dummyText
        return (
            <Button variant="contained" color="primary">
                {dummyText}
            </Button>
        );
    }
}

const mapStateToProps = state => {
    return {
        organizationId: state.organizationId,
        dummyText: state.dummyText
    };
};

const mapDispatchToProps = () => {
    return {}
}

const AnotherComponentConnector = connect => connect(mapStateToProps, mapDispatchToProps)(AnotherComponent);

export default AnotherComponentConnector;
export const anotherComponentRoutePath = '/app/another';
