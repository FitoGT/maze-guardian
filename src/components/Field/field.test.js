import React from 'react'
import { render, screen } from '@testing-library/react';
import Field from './field';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'


const mockStore = configureStore([]);
const store = mockStore({
  count: 0,
  complete:false
});

describe('Field', () => {
    it('must have field id',()=>{
        render(
        <Provider store={store}>
            <Field/>
        </Provider>
        )
        expect(screen.queryByTestId('field')).toBeInTheDocument()
    })
})
