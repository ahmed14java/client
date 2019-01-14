import { ADD_BOOK , REMOVE_BOOK , EDIT_BOOK , GET_BOOKS, GET_BOOK } from './types';
import axios from 'axios';

export const getBooks = () => async dispatch => {
    const res = await axios.get('/api/books');
    dispatch({
        type: GET_BOOKS,
        payload: res.data
    })
}

export const getBook = ( id ) => async dispatch => {
    try {
        const res = await axios.get(`/api/books/${id}`);
        dispatch({
            type: GET_BOOK,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}

export const createBook = ( book , history ) => async dispatch => {
    try {
        await axios.post('/api/books' , book);
        history.push('/');
        dispatch({
            type: ADD_BOOK
        });
    } catch (err) {
        console.log(err);
    }
}

export const removeBook = ( id ) => async dispatch => {
    try {
        if (window.confirm('Are you sure to delete this book ?')) {
            await axios.delete(`/api/books/${id}`);
            dispatch({
                type: REMOVE_BOOK,
                payload: id
            });
        }
    } catch (err) {
        console.log(err);
    }
}

export const editBook = ( book , history ) => async dispatch => {
    try {
        await axios.put('/api/books' , book);
        history.push('/');
        dispatch({
           type: EDIT_BOOK
        })
    } catch (err) {
     console.log(err);
    }
}