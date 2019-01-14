import React, { Component } from 'react';
import logo from './logo.svg';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route , Redirect , Switch} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import BookList from './components/BookList';
import EditBook from './components/EditBook';
import AddBook from './components/AddBook';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route exact path="/"  component={BookList} />
            <Route exact path="/edit-book/:id"  component={EditBook} />
            <Route exact path="/add-book"  component={AddBook} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
