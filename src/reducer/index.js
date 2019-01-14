import { combineReducers } from 'redux';
import  book_reducer  from "./book_reducer";

export default combineReducers({
    book: book_reducer
});