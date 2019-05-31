import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { getFromExpressAppService, postFromExpressAppService, putFromExpressAppService, deleteFromExpressAppService } from '../../actions/Actions';

class AnotherComponent extends Component {

    onGetButtonClick = () => {
        this.props.getFromExpressAppService();
    }
    onPostButtonClick = () => {
        this.props.postFromExpressAppService();
    }
    onPutButtonClick = () => {
        this.props.putFromExpressAppService();
    }
    onDeleteButtonClick = () => {
        this.props.deleteFromExpressAppService();
    }

    render() {
        const dummyText = this.props.dummyText
        return (
            <Fragment>
                <Button variant="contained" color="primary" onClick={this.onGetButtonClick}>
                    {dummyText}
                </Button>
                <Button variant="contained" color="primary" onClick={this.onPostButtonClick}>
                    Post
                </Button>
                <Button variant="contained" color="primary" onClick={this.onPutButtonClick}>
                    Put
                </Button>
                <Button variant="contained" color="primary" onClick={this.onDeleteButtonClick}>
                    Delete
                </Button>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        dummyText: state.dummyText
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFromExpressAppService: () => dispatch(getFromExpressAppService()),
        postFromExpressAppService: () => dispatch(postFromExpressAppService()),
        putFromExpressAppService: () => dispatch(putFromExpressAppService()),
        deleteFromExpressAppService: () => dispatch(deleteFromExpressAppService())
    }
}

const AnotherComponentConnector = connect => connect(mapStateToProps, mapDispatchToProps)(AnotherComponent);

export default AnotherComponentConnector;
export const anotherComponentRoutePath = '/app/another';
