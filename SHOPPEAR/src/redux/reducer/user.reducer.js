import users from "../../__mocks__/users";

const initialState = {
    users,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

    default:
        return state;
    }
};

export default usersReducer;