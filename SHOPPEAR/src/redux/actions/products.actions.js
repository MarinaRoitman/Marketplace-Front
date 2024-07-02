export const fetchProducts = () => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      //mode: "no-cors"
    };

    try {

      const response = (await fetch("http://localhost:4002/auth/productos", requestOptions))
      const data = await response.json()
      dispatch({ type: 'PRODUCTS_FETCH_SUCCESS', payload: data });
      return data
    } catch (error) {
      console.error(error);
    }
    return null
  };
};

export const fetchCategorias = () => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      //mode: "no-cors"
    };

    try {

      const response = (await fetch("http://localhost:4002/auth/categorias", requestOptions))
      const data = await response.json()
      dispatch({ type: 'CATEGORIES_FETCH_SUCCESS', payload: data });
      return data
    } catch (error) {
      console.error(error);
    }
    return null
  };
};

export const fetchProductosByIdUsuario = (id) => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    try {
      const response = (await fetch("http://localhost:4002/auth/productos/usuario/" + id, requestOptions))
      const data = await response.json()
      dispatch({ type: 'CATEGORIES_FETCH_PRODUCTOS_BY_ID_USUARIO', payload: data });
      return data
    } catch (error) {
      console.error(error, 'error en el fetch');
    }
    return null
  };
};

export const fetchEliminarProducto = (id) => {
  return async (dispatch) => {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow"
    };

    try {
      const response = (await fetch("http://localhost:4002/auth/productos?idProducto=" + id, requestOptions))
      /*
      const requestOptions2 = {
        method: "GET",
        redirect: "follow",
      };
      const response2 = (await fetch("http://localhost:4002/auth/productos", requestOptions2))
      const data2 = await response2.json()
      dispatch({ type: 'PRODUCTS_FETCH_SUCCESS', payload: data2 });
      return data2
      */
    } catch (error) {
      console.error(error, "error en algun fetch");
    }
    return null
  };
};

export const fetchHacerCompra = (idUsuario, detalleProds, direccionFactura, tipoPago, numeroTarjeta) => {
  return async (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "idUsuario": idUsuario,
      "detalleProds": detalleProds,
      "direccionFactura": direccionFactura,
      "tipoPago": tipoPago,
      "numeroTarjeta": numeroTarjeta
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {
      const response = (await fetch("http://localhost:4002/auth/ordenes", requestOptions))
      const data = await response.json()

      //a partir de aca intento actualizar los productos 
      const requestOptions2 = {
        method: "GET",
        redirect: "follow",
      };
      const response2 = (await fetch("http://localhost:4002/auth/productos", requestOptions2))
      const data2 = await response2.json()
      dispatch({ type: 'PRODUCTS_FETCH_SUCCESS', payload: data2 });

      return data
    } catch (error) {
      console.error(error);
    }
    return null
  };
};



export const fetchModificarDescuento = (id, descuento) => {
  return async (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "id": id,
      "descuento": descuento
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {
      const response = (await fetch("http://localhost:4002/auth/productos/descuento/" + id, requestOptions))
      const data = await response.json()

      //a partir de aca intento actualizar los productos 
      const requestOptions2 = {
        method: "GET",
        redirect: "follow",
      };
      const response2 = (await fetch("http://localhost:4002/auth/productos", requestOptions2))
      const data2 = await response2.json()
      dispatch({ type: 'PRODUCTS_FETCH_SUCCESS', payload: data2 });

      return data
    } catch (error) {
      console.error(error, "error en algun fetch");
    }
    return null
  };
};

export const fetchProductoById = async (id, dispatch) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  try {
    const response = await fetch("http://localhost:4002/auth/productos/" + id, requestOptions)
    const data = await response.json()
    
    dispatch({  type : 'GET_PRODUCTO_BY_ID', data  })

    return data
  } catch (error) {
    console.error(error);
  }
  return null
};


export const fetchModificarProducto = (id, nombre, descripcion, precio, img, stock, idCategoria) => {
  return async (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "id": id,
      "nombre": nombre,
      "descripcion": descripcion,
      "precio": precio,
      "img": img,
      "stock": stock,
      "idCategoria": idCategoria
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {
      const response = (await fetch("http://localhost:4002/auth/productos/" + id, requestOptions))
      const data = await response.json()
      dispatch({ type: 'PRODUCTS_FETCH_SUCCESS', payload: data });
      return data
    } catch (error) {
      console.error(error, "error en algun fetch");
    }
    return null
  };
};

export const fetchCrearProducto = (nombre, descripcion, precio, img, stock, idCategoria, idUsuario) => {
  return async (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "nombre": nombre,
      "descripcion": descripcion,
      "precio": precio,
      "img": img,
      "stock": stock,
      "idCategoria": idCategoria,
      "descuento": 0, // el descuento empieza en 0, despues lo puede cambiar el usuario
      "idUsuario": idUsuario
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {
      const response = (await fetch("http://localhost:4002/auth/productos", requestOptions))
      const data = await response.json()
      dispatch({ type: 'CREAR_PRODUCTO', payload: data });
      return data
    } catch (error) {
      console.error(error, "error en algun fetch");
    }
    return null
  };
};

export const discountStock = (products) => ({
  type: "DISCOUNT_STOCK",
  payload: products,
});

