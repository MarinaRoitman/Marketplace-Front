import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Modal } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import './cuenta.css'
import { Persona, Descuento, VerProducto, CrearProd} from '../../Components/Iconos/iconos.jsx';
import Form from 'react-bootstrap/Form';
import BotonCantidad from '../../Components/BotonCantidad/botonCantidad.jsx';
import CardEditable from '../../Components/cardEditable/cardEditable.jsx';
import { useSelector, useDispatch } from "react-redux";
import { modificarUsuario } from '../../redux/actions/auth.actions.js';
import React, { useState, useEffect } from 'react';
import { fetchCrearProducto, fetchModificarDescuento, fetchProductosByIdUsuario, fetchProducts } from '../../redux/actions/products.actions.js';
import ModalPublicarProd from '../../Components/ModalPublicarProd/ModalPublicarProd.jsx';

function MyVerticallyCenteredModal(props) {
    const dispatch = useDispatch();
    const { isAuthenticated, user, users, datosUsuario } = useSelector(state => state.auth);

    const [mail, setMail] = useState(datosUsuario.mail);
    const [nombreUsuario, setNombreUsuario] = useState(datosUsuario.username);
    const [nombre, setNombre] = useState(datosUsuario.nombre);
    const [apellido, setApellido] = useState(datosUsuario.apellido);
    const [password, setPassword] = useState(datosUsuario.password);
    const [direccion, setDireccion] = useState(datosUsuario.direccion);

    const modificarDatos = () => {
        dispatch(modificarUsuario(datosUsuario.id, nombre, apellido, mail, password, direccion, nombreUsuario));
    };

    const handleButtonClick = () => {
        modificarDatos();
        props.onHide();
    };

return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Cambiar mis Datos
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={datosUsuario.mail}
                                onChange={(e) => setMail(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="username">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={datosUsuario.username}
                                onChange={(e) => setNombreUsuario(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={datosUsuario.nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="apellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={datosUsuario.apellido}
                                onChange={(e) => setApellido(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="direccion">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={datosUsuario.direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={handleButtonClick} variant='dark'>
        Guardar cambios
        </Button>
    </Modal.Footer>
    </Modal>
);
}

function Cuenta() {
    const dispatch = useDispatch();

    const { isAuthenticated, user, users, datosUsuario } = useSelector(state => state.auth);
    
    const handleClickMount = (value) => {
        if(value > 0){
            setNuevoStock(value)
        }
    }

    const categorias = useSelector(state => state.products.categories)
    const productos = useSelector(state => state.products.productosByIdUsuario);
    const products = useSelector((state) => state.products.products);
    useEffect(() => {
        dispatch(fetchProductosByIdUsuario(datosUsuario.id))
    }, [products]);
    
    const [selectedProduct, setSelectedProduct] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState(''); 
    const [modalShow, setModalShow] = useState(false); 
    
    function createDiscount(){
        dispatch(fetchModificarDescuento(selectedProduct, discountPercentage))
    }

    useEffect(() => {
        dispatch(fetchProducts())
    }, [productos]);

    

    const handleCategoryChange = (e) => {
        const catSelec = e.target.value;
        setSelectedCategory(catSelec) //para ver este valor, usar un useEffect, porque react tarda un instante en realizar el set
    };

    const handleProductChange = (e) => {
        const prodSelec =  e.target.value;
        setSelectedProduct(prodSelec) //para ver este valor, usar un useEffect, porque react tarda un instante en realizar el set
    };

    

    const [nuevoNombre, setNuevoNombre] = useState('')
    const [nuevaDescripcion, setNuevaDescripcion] = useState('')
    const [nuevoPrecio, setNuevoPrecio] = useState(0)
    const [nuevaImg, setNuevaImg] = useState(null)
    const [nuevoStock, setNuevoStock] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState('')

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setNuevaImg(file);
        }
    };

    const crearProducto = () => {
        dispatch(fetchCrearProducto(nuevoNombre, nuevaDescripcion, nuevoPrecio, nuevaImg, nuevoStock, selectedCategory, datosUsuario.id))
        setNuevoNombre('')
        setNuevaDescripcion('')
        setNuevoPrecio(0)
        setNuevaImg('')
        setNuevoStock(0)
    }

return (
    <div style={{paddingBottom:'2em'}}>
            <hr />
            <div style={{ padding: '2em', marginBottom: '2em', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                <h1 style={{ margin: 0 }}>
                ¡Hola<span style={{ color: '#0cc0df' }}> {datosUsuario.nombre}</span>!
                    </h1>
                </div>
            </div>
<Tab.Container id="list-group-item.active" defaultActiveKey="#link1">
    <Row style={{ display: 'flex', alignItems: 'initial' }}>
    <Col sm={3}>
        <ListGroup>
        <ListGroup.Item action href="#link1" style={{ width: '80%', marginLeft: '4em', height: '4em',textAlign: 'center',alignItems: 'center',display: 'flex',justifyContent: 'space-around'}}>
            Mis Datos
        </ListGroup.Item>
        <ListGroup.Item action href="#link2" style={{ width: '80%', marginLeft: '4em', height: '4em',textAlign: 'center',alignItems: 'center',display: 'flex',justifyContent: 'space-around'}}>
            Mis Publicaciones
        </ListGroup.Item>
        <ListGroup.Item action href="#link3" style={{ width: '80%', marginLeft: '4em', height: '4em',textAlign: 'center',alignItems: 'center',display: 'flex',justifyContent: 'space-around'}}>
            Crear Producto
        </ListGroup.Item>
        <ListGroup.Item action href="#link4" style={{ width: '80%', marginLeft: '4em', height: '4em',textAlign: 'center',alignItems: 'center',display: 'flex',justifyContent: 'space-around'}}>
            Crear Descuento
        </ListGroup.Item>

        </ListGroup>
    </Col>
    <Col sm={6} style={{display: 'contents'}}>
        <Tab.Content style={{width: '60%'}}>
        <Tab.Pane eventKey="#link1">
        <div style={{ display: 'inline-flex', alignItems: 'center', alignItems: 'baseline'}}>
        <Persona/>
        <h4 style={{marginLeft:'0.2em'}}>Mis Datos</h4>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        </div>
            <Form>
            <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="username">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={datosUsuario.username}
                                aria-label="Disabled input example"
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={datosUsuario.mail}
                                aria-label="Disabled input example"
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={datosUsuario.nombre}
                                aria-label="Disabled input example"
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="apellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={datosUsuario.apellido}
                                aria-label="Disabled input example"
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="direccion">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={datosUsuario.direccion}
                                aria-label="Disabled input example"
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <div style={{display: 'flex', justifyContent: 'flex-end', marginTop:'1em'}}>
                        <Button variant="dark" onClick={() => setModalShow(true)}>
                            Cambiar mis datos
                        </Button>
                </div>
            </Form>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Tab.Pane>


        <Tab.Pane eventKey="#link2">
                                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                                    <VerProducto />
                                    <h4 style={{ marginLeft: '0.2em' }}>Ver Publicaciones</h4>
                                </div>
                                <div className='products'>
                                    {productos.map(prod =>
                                        <CardEditable
                                            key={prod.id}
                                            id={prod.id}
                                            name={prod.nombre}
                                            price={prod.precio}
                                            img={prod.img}
                                            description={prod.descripcion}
                                        />
                                    )}
                                </div>
                            </Tab.Pane>


        <Tab.Pane eventKey="#link3">
        <div style={{ display: 'inline-flex', alignItems: 'center'}}>
            <CrearProd/>
            <h4 style={{ marginLeft: '0.2em' }}>Crear Producto</h4>
        </div>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                type="name"
                placeholder="Nombre del Producto"
                value={nuevoNombre}
                onChange={(e) => setNuevoNombre(e.target.value)}
                required
                autoFocus
                />
            </Form.Group>
            <Row>
                <Col>
                <Form style={{ width: '50%' }}>
                <Form.Label>Precio</Form.Label>
                <Form.Control
                type="number"
                placeholder="Precio"
                value={nuevoPrecio}
                onChange={(e) => setNuevoPrecio(e.target.value)}
                required
                autoFocus
                />
                </Form>
                </Col>
                <Col>
                    <Form.Label>Cantidad</Form.Label>
                    <BotonCantidad mount={nuevoStock} setMount={setNuevoStock} onClick={handleClickMount}/>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} 
                placeholder="Descripción"
                value={nuevaDescripcion}
                onChange={(e) => setNuevaDescripcion(e.target.value)}
                required
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Seleccionar Categoria:</Form.Label>
                <Form.Select aria-label="Seleccionar Categoria" onChange={handleCategoryChange}>
                    <option value="">Seleccionar</option>
                    {categorias.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.nombre}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Label>Agregar Foto</Form.Label>
            <Form.Group controlId="formFile">
            <Form.Control type="file" style={{width:'65%'}} onChange={handleImageUpload}/>
            </Form.Group>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <ModalPublicarProd crearProducto={crearProducto}></ModalPublicarProd>
            </div>
        </Form>
        </Tab.Pane>
        <Tab.Pane eventKey="#link4">
        <div style={{ display: 'inline-flex', alignItems: 'center', alignItems: 'baseline', alignItems: 'flex-start'}}>
            <Descuento/>
        <h4 style={{marginLeft:'0.2em'}}>Crear Descuento</h4>
        </div>
        <Form.Group>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Seleccionar Producto:</Form.Label>
                <Form.Select aria-label="Seleccionar Producto" onChange={handleProductChange}>
                    <option value="">Seleccionar</option>
                    {productos.map((producto) => (
                        <option key={producto.id} value={producto.id}>
                            {producto.nombre}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Descuento (%):</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Descuento"
                    value={discountPercentage}
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value >= 0 && value <= 100) {
                            setDiscountPercentage(value);
                        }
                    }} 
            />
            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop:'1em'}}>
                <Button variant="dark" onClick={createDiscount}>
                    Aplicar
                </Button>
            </div>
            </Form.Group>
            </Form>
        </Form.Group>
        </Tab.Pane>

        </Tab.Content>
    </Col>
    </Row>
</Tab.Container>
</div>
);
}

export default Cuenta;

