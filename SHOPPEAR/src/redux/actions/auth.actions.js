export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    payload: token
});

export const logout = () => ({
    type: LOGOUT
});

export const fetchUsers = () => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    try {
      const response = await fetch("http://localhost:4002/auth/usuarios", requestOptions);
      const data = await response.json();
      dispatch({ type: 'FETCH_USERS', payload: data });
      return data
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
};

export const checkLogin = (mail, password) => {
    return async (dispatch) => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({
        "email": mail,
        "password": password
      });
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      
      try{
          const response = await fetch("http://localhost:4002/auth/authenticate", requestOptions)
          const data = await response.json()
          dispatch({ type: 'CHECK_LOGIN', payload: data });
          return response
      } catch (error){

      }
    };
  };

export const getUsuarioById = (mail) => {
    return async (dispatch) => {
        try{
            const requestOptions = {
                method: "GET",
                redirect: "follow"
              };
              
            const response = await fetch("http://localhost:4002/auth/usuarios/mail/" + mail, requestOptions)
            const data = await response.json()
            dispatch({ type: 'FETCH_USER_BY_ID', payload: data });
        } catch (error){
            console.log(error, "error de fetch")
        }
        return null
    };
};

export const modificarUsuario = (id, nombre, apellido, mail, contrasena, direccion, username) => {
  return async (dispatch) => {
    try{
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({
        "id": id,
        "nombre": nombre,
        "apellido": apellido,
        "mail": mail,
        "contrasena": contrasena,
        "direccion": direccion,
        "username": username
      });
      
      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      
      const response = await fetch("http://localhost:4002/auth/usuarios", requestOptions)
      const data = await response.json()
      dispatch({ type: 'CAMBIAR_DATOS_USUARIO', payload: data });
      return response

    } catch (error){
        console.log(error, "error de fetch")
    }
    
  };
}

export const crearUsuario = (nombre, apellido, mail, password, direccion, username) => {
  return async (dispatch) => {
    try{
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "nombre": nombre,
        "apellido": apellido,
        "mail": mail,
        "contrasena": password,
        "direccion": direccion,
        "username": username
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
            
      const response = await fetch("http://localhost:4002/auth/register", requestOptions)
      const data = await response.json()
      dispatch({ type: 'CREAR_CUENTA', payload: data });
      return response

    } catch (error){
        console.log(error, "error de fetch")
    }
    
  };
}

export const iniciarSesionAlCrear = () => ({
  type: INICIAR_AL_CREAR,
  payload: token
});