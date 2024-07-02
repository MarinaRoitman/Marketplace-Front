import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Login from '../path-to-your-component/Login';

const mockStore = configureStore([]);

test('renders the Login component', () => {
    const store = mockStore({
        auth: {
            isAuthenticated: false,
            user: null,
            users: [],
            datosUsuario: null,
            token: null,
        },
    });

    render(
        <Provider store={store}>
            <Router>
                <Login />
            </Router>
        </Provider>
    );

    // Verifica que el título "Iniciar Sesión" está en el documento
    expect(screen.getByText(/Iniciar Sesión/i)).toBeInTheDocument();
});