import axios from 'axios';

const url = 'http://localhost:3500/libraries';

export const add = (data) => {
    
    // return dispatch => {
        // axios.post(url, data)
        //     .then((response)=> {
        //         dispatch({
        //             type: 'LIBRARIES_ADD',
        //             payload: response.data
        //         })
        //     })
    // })
    return async(dispatch) => {
        const response = await axios.post(url, data);
        dispatch({ 
            type: 'LIBRARIES_ADD',
            payload: response.data
        })

        dispatch({ 
            type: 'LIBRARIES_HIDE_ADD'
        })
    }
}

export const deleteData = (id) => {
    return async(dispatch) => {
        await axios.delete(`${url}/${id}`);
        
        dispatch({ 
            type: 'LIBRARIES_DELETE_DATA',
            payload: id
        });

        dispatch({ 
            type: 'LIBRARIES_HIDE_DELETE'
        });
    }
}

export const edit = (data) => {
    return async(dispatch) => {
        const response = await axios.put(`${url}/${data.id}`, data);
        dispatch({ 
            type: 'LIBRARIES_EDIT_DATA',
            payload: response.data
        })

        dispatch({ 
            type: 'LIBRARIES_HIDE_EDIT'
        })
    }
}

export const getData = () => {
    return async(dispatch) => {
        const response = await axios.get(url);
        dispatch({ 
            type: 'LIBRARIES_GET_DATA',
            payload: response.data
        })
    }
}

export const hideAdd = () => {
    return {
        type: 'LIBRARIES_HIDE_ADD'
    }
}

export const hideDelete = () => {
    return {
        type: 'LIBRARIES_HIDE_DELETE'
    }
}

export const hideEdit = () => {
    return {
        type: 'LIBRARIES_HIDE_EDIT'
    }
}

export const showAdd = () => {
    return {
        type: 'LIBRARIES_SHOW_ADD'
    }
}

export const showDelete = (data) => {
    return {
        type: 'LIBRARIES_SHOW_DELETE',
        payload: data
    }
}

export const showEdit = (data) => {
    return {
        type: 'LIBRARIES_SHOW_EDIT',
        payload: data
    }
}