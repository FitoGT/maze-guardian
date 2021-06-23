import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
const mockStore = configureStore([]);

const store = mockStore({
  count: 0,
  complete: false
});

describe('App', () => {
  it('must render root of app', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(screen.queryByTestId('app')).toBeInTheDocument()
  })
})