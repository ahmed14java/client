import { ADD_BOOK , REMOVE_BOOK , GET_BOOKS , EDIT_BOOK , GET_BOOK } from '../actions/types';

const initialState = {
    saved: false,
    updated: false,
    books: [],
    book: {}
};

export default ( state = initialState , action) => {
    switch (action.type) {

        case GET_BOOK :
            return {
                ...state,
                book: action.payload
            }
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case ADD_BOOK:
            return {
                ...state,
                saved: true
            }
        case REMOVE_BOOK:
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload)
            }
        case EDIT_BOOK:
            return {
                ...state,
                updated: true
            //    books: state.books.map((book) => {
            //         if (book.id === action.payload) {
            //             return {
            //                 ...state,
            //                 updated: true
            //             }
            //         }else {
            //             return book
            //         }
                // })
            }
        default:
            return state;
    }
}