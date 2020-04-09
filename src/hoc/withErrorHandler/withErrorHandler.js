import React, { Component , useState, useEffect} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';
import useHttp from '../../Hooks/http-error-handler'

const withErrorHandler = ( WrappedComponent, axios ) => {
    return props => {
  
        const [error , errorConfirmedHandler] = useHttp(axios)
            return (
                <Aux>
                    <Modal
                        show={error}
                        modalClosed={errorConfirmedHandler}>
                        {error ? error.message : null}
                    </Modal>
                    <WrappedComponent {...props} />
                </Aux>
            );
        
            }
}

export default withErrorHandler;