import React from 'react'
import { render, screen } from '@testing-library/react';
import Avatar from './avatar';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'


const mockStore = configureStore([]);
const store = mockStore({
    count: 0,
    complete: false
});
describe('Avatar', () => {
    it('must have avatar id', () => {
        render(
            <Provider store={store}>
                <Avatar />
            </Provider>
        )
        expect(screen.queryByTestId('avatar')).toBeInTheDocument()
    })
})
