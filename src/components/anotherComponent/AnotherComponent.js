import React from 'react';
import Button from '@material-ui/core/Button';
import {
    getFromExpressAppService,
    postFromExpressAppService,
    putFromExpressAppService,
    deleteFromExpressAppService
} from '../../actions/Actions';
import { useSelector, useDispatch } from 'react-redux';

export const AnotherComponent = () => {

    const dispatch = useDispatch()

    const onGetButtonClick = () => dispatch(getFromExpressAppService());
    const onPostButtonClick = () => dispatch(postFromExpressAppService());
    const onPutButtonClick = () => dispatch(putFromExpressAppService());
    const onDeleteButtonClick = () => dispatch(deleteFromExpressAppService());

    const dummyText = useSelector(state => state.dummyText);
    return (
        <>
            <Button variant="contained" color="primary" onClick={onGetButtonClick}>
                {dummyText}
            </Button>
            <Button variant="contained" color="primary" onClick={onPostButtonClick}>
                Post
                </Button>
            <Button variant="contained" color="primary" onClick={onPutButtonClick}>
                Put
                </Button>
            <Button variant="contained" color="primary" onClick={onDeleteButtonClick}>
                Delete
                </Button>
        </>
    );
}

export const anotherComponentRoutePath = '/app/another';
