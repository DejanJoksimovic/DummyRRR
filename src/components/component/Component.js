import React from 'react';
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';

export const HooksComponent = props => {
    const someId = useSelector(state => state.someId);
    return (
        <>
            {props.match.params.id}
            <Button variant="contained" color="primary">
                {someId}
            </Button>
        </>
    );
}

export const componentRoutePath = '/app/component/:id';
