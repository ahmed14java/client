import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBooks, getBook , removeBook } from "../actions/book_action.js";
import { Link } from "react-router-dom";

class BookList extends Component {
  componentDidMount = () => {
    this.props.getBooks();
  };

  onDeleteBook(id){
    this.props.removeBook(id);
  }

  render() {
    const { books } = this.props.book;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-2">
            <h1 className="display-4 text-center">Books</h1>
            <br />
            <React.Fragment>
              <Link to="/add-book" className="btn btn-lg btn-info">
                Create a Book
              </Link>
            </React.Fragment>
            <br />
            <hr />
            {books.map(book => (
              <div key={book.id} className="card card-body bg-light mb-3">
                <div className="row">
                  <div className="col-1">
                    <Link to={`/edit-book/${book.id}`}>
                      <span className="mx-auto">{book.id}</span>
                    </Link>
                  </div>
                  <div className="col-md-10">
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                  </div>
                  <div className="col-md-1 float-right">
                    <div className="row">
                    <Link to={`/edit-book/${book.id}`}>
                      <span className="mx-auto"><i className="fas fa-external-link-alt"></i></span>
                    </Link>
                    <button onClick={this.onDeleteBook.bind(this , book.id)} className="btn btn-link" style={{marginTop: '-6px'}}>
                      <span><i className="fas fa-trash-alt" style={{color: 'red'}}></i></span>
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

BookList.propTypes = {
  book: PropTypes.object.isRequired,
  getBooks: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  book: state.book
});

export default connect(
  mapStateToProps,
  { getBooks , removeBook}
)(BookList);
