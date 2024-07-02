import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
import imgTest from '/assets/MUJER/mj8.jpg';
import BotonCantidad from '../BotonCantidad/botonCantidad.jsx';
import { Edit } from '../Iconos/iconos.jsx';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchEliminarProducto } from '../../redux/actions/products.actions.js';
import { fetchProducts } from '../../redux/actions/products.actions.js';
import { fetchModificarProducto } from '../../redux/actions/products.actions.js';
const Example = ({ id, name, price, img, description }) => {
//////////////////////////////////////////////////
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
//////////////////////////////////////////////////
    const dispatch = useDispatch();

    const [imageSrc, setImageSrc] = useState('');
    const categorias = useSelector(state => state.products.categories);
    const [mount, setMount] = useState(0);
    const [productDescription, setDescription] = useState(description);
    const [precio, setPrecio] = useState(price);
    const [idCategoria, setIdCategoria] = useState()
    const [nombre, setNombre] = useState(name)

    const [imagenSubida, setImagenSubida] = useState(null)

    useEffect(() => {
        if (img) {
          const byteCharacters = atob(img);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: 'image/jpeg' }); // Cambia 'image/jpeg' al tipo correcto
          const imageUrl = URL.createObjectURL(blob);
          setImageSrc(imageUrl);
        }
      }, [img]);

      const handleClickMount = (value) => {
        setMount(value);
    }

    const modificarProducto = () => {
        dispatch(fetchModificarProducto(id, nombre, productDescription, precio, imagenSubida, mount, idCategoria))
        handleClose()
    };

    const eliminarProducto = () => {
        dispatch(fetchEliminarProducto(id))
        dispatch(fetchProducts())
        handleClose()
    };
    
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result.replace(/^data:.+;base64,/, '');
                setImagenSubida(base64String);
            };
            reader.readAsDataURL(file);
        }
    };
    

    useEffect(() => {
    }, [imagenSubida]);

return (
    <>
        <Button variant="dark" onClick={handleShow}>
            <Edit/>
        </Button>
        <Modal size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered 
        show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex align-items-start">

        <div className="img-div me-modal-img">
            <Figure>
            <Figure.Image
                alt="171x180"
                src={imageSrc}
                />
            </Figure>
        </div>

            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                type="email"
                defaultValue={nombre}
                autoFocus
                onChange={(e) => setNombre(e.target.value)}
                />
            </Form.Group>

            <Row>
                <Col>
                <Form style={{ maxWidth: '150px' }}>
                <Form.Label>Precio</Form.Label>
                <Form.Control
                type="Numero"
                defaultValue={precio}
                autoFocus
                onChange={(e) => setPrecio(e.target.value)}
                />
                </Form>
                </Col>
                
                <Col>
                    <Form.Label>Cantidad</Form.Label>
                    <BotonCantidad mount={mount} setMount={setMount} onClick={handleClickMount}/>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={productDescription}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>
            <Form.Select aria-label="Seleccionar Categoría" onChange={(e) => setIdCategoria(e.target.value)}> 
                <option>Seleccionar Categoría</option>
                {categorias.map(categoria => (
                    <option key={categoria.id} value={categoria.id}>
                    {categoria.nombre}
                    </option>
                ))}
            </Form.Select>
            <br />
            <Form.Label>Agregar Foto</Form.Label>
            <Form.Group controlId="formFile">
                <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group>
        </Form>

        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={eliminarProducto}>
            Eliminar
        </Button>
        <Button variant="dark" onClick={modificarProducto}>
            Confirmar
        </Button>
        </Modal.Footer>
    </Modal>
    
    </>
);
}

export default Example;