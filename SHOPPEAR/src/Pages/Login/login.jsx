import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css';
import Figure from 'react-bootstrap/Figure';
import InputGroup from 'react-bootstrap/InputGroup';
import {PersonaLogin,Password} from '../../Components/Iconos/iconos.jsx';
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess, fetchUsers, checkLogin, getUsuarioById } from '../../redux/actions/auth.actions';
import { useNavigate } from 'react-router-dom';
import { fetchProductosByIdUsuario } from '../../redux/actions/products.actions.js';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, user, users, datosUsuario, token } = useSelector(state => state.auth);
    
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    useEffect(() => {
        if (token) {
            dispatch(fetchProductosByIdUsuario(datosUsuario.id));
            dispatch(getUsuarioById(datosUsuario.id))
            navigate('/');
        }
    }, [token])

    const verificarUsuario = () => {
        dispatch(checkLogin(usuario, password)) //ACA ES DONDE NO ESTOY CONSIGUIENDO LOS DATOS DEL USUARIO
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '55vh' }}>
            <div style={{ display: 'flex', width: '80%'}}>
                <div style={{ background: 'rgb(12 192 223 / 26%)', borderRadius: '1em', padding: '2em', width: '35%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Figure>
                        <Figure.Image
                            alt="Chica Inicio"
                            src={'../../../public/assets/chicaInicio.png'}
                            className='chica-inicio-img'
                        />
                    </Figure>
                </div>
                <div style={{ border:'0.5px solid rgb(221 221 221)', borderRadius: '1em', padding: '2em', width: '48%' }}>
                    <h1 className="text-center" style={{ color: '#0cc0df', paddingBottom: '0.3em', fontSize: '2.7em', textShadow: '1px 0px 0px #8b8b8b' }}>Iniciar Sesión</h1>
                    <Form>
                        <Row className="justify-content-center" style={{ paddingBottom: '1.3em' }}>
                        <Col md={12}>
                                <Form.Label>Usuario</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1" className='input-group-text-custom'>
                                        <PersonaLogin />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Usuario"
                                        value={usuario}
                                        onChange={(e) => setUsuario(e.target.value)}
                                        required
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="justify-content-center" style={{ paddingBottom: '1.3em' }}>
                            <Col md={12}>
                            <Form.Label>Contraseña</Form.Label>
                                    <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1" className='input-group-text-custom'>
                                        <Password/>
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="password"
                                        placeholder="Contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    <div className="text-center">
                        <Button variant="dark" className="w-100 custom-button" style={{marginTop: '0.3em',marginBottom: '1em',maxWidth: '120px' }} onClick={verificarUsuario}>
                            Acceder 
                        </Button>
                    </div>
                    </Form>
                    <p className="text-center mt-3">
                        ¿No tienes una cuenta?{' '}
                        <Link to="/CrearCuenta" style={{ color: '#0cc0df', textDecoration: 'none', fontWeight: 'bold' }}>
                            <span style={{ textDecoration: 'none' }}>Regístrate aquí</span>
                        </Link>
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default Login;
