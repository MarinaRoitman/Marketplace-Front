import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './crearCuenta.css'
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from 'react';
import { checkLogin, crearUsuario, getUsuarioById } from '../../redux/actions/auth.actions';

const Registro = () => {
    const dispatch = useDispatch();
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate()
    const datosUsuario = useSelector(state => state.auth.datosUsuario)
    const token = useSelector(state => state.auth.token)
    const crearCuenta = () => {
        if (password == confirmPassword){
            dispatch(crearUsuario(nombre, apellido, email, password, direccion, usuario))
            
        } else {
            console.log("Las contraseñas no coinciden")
        }
    };

    useEffect(() => {
        if (token){
            dispatch(getUsuarioById(email))
        }
    }, [token]);

    useEffect(() => {
        if (datosUsuario != null) {
            navigate('/')
        }
    }, [datosUsuario])


    return (
        <Container style={{ boxShadow: 'rgb(219 219 219) 0px 0px 10px',borderRadius: '1em', padding: '2em',width: '35%'}}>
                    <h1 className="text-center" style={{ color: '#0cc0df', paddingBottom: '0.3em', fontSize: '2.7em', textShadow: '1px 0px 0px #8b8b8b' }}>Crea tu cuenta</h1>
            <Form>
            <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="formularioEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Usuario"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="formularioEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="formularioNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="formularioApellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Apellido"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="formularioNombre">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Dirección"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="formularioContraseña">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese su contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="formularioConfirmarContraseña">
                            <Form.Label>Confirmar Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirme su contraseña"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <div className="text-center">
                    <Form.Group className="mb-3 custom-form-check">
                    <Form.Check
                    required
                    label={
                    <p style={{marginLeft:'0.8em'}}>Al registrarme, acepto las <span style={{ fontWeight: 'bold', textDecoration:'underline'}}>Condiciones de Uso</span> de Shoppear</p>
                    }
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    style={{display: 'flex',justifyContent: 'center'}}
                    /> 
                </Form.Group>
                    <Button onClick={crearCuenta} variant="dark" className="w-100 custom-button" style={{marginTop: '0.3em',marginBottom: '1em',maxWidth: '120px' }}>
                        Registrarse 
                    </Button>
                    
                </div>
            </Form>
            <p className="text-center mt-3">
                ¿Ya tienes una cuenta?{' '}
                <Link to="/login" style={{ color: '#0cc0df', textDecoration: 'none', fontWeight: 'bold' }}>
                    <span style={{ textDecoration: 'none' }}>Inicie sesión aquí</span>
                </Link>
            </p>
        </Container>
    );
};

export default Registro;
