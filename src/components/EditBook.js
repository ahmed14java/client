import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBook , editBook } from "../actions/book_action.js";
import { Link } from "react-router-dom";

class EditBook extends Component {
    
    componentDidMount = () => {
        const { id } = this.props.match.params;
        this.props.getBook(id);
    }

    constructor(props){
      super(props);
      this.state = {
          id: '',
          title: '',
          author: '',
          description: '',
          date: ''
      }
  }

  onChange(e){
      this.setState({
          [e.target.name]: e.target.value
      });
  }

  onSubmit(e){
      e.preventDefault();
      const { id , title , author , description , date } = this.state;
      const newBook = {
          id: id,
          title: title,
          author: author,
          description: description,
          date: date
      }
      this.props.editBook(newBook , this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    const { id , title , author , description , date } = nextProps.book;
    this.setState({
      id ,
      title,
      author,
      description,
      date
    });
  }
    

  render() {
    const { id , title , author , description , date } = this.state;
    const { book } = this.props;
    return (
      <div className="container">
          <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group row">
              <div className="col-sm-11">
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  readOnly
                  placeholder="enter title"
                  name="id"
                  value={id}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="title" className="col-sm-3 col-form-label col-form-label-sm"> Title </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="enter title"
                  name="title"
                  value={title}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="author" className="col-sm-3 col-form-label">Author</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  placeholder="author"
                  name="author"
                  value={author}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="description"
                className="col-sm-3 col-form-label col-form-label-lg">Description</label>
              <div className="col-sm-8">
                <textarea
                  className="form-control"
                  rows="3"
                  id="description"
                  name="description"
                  value={description}
                  onChange={this.onChange.bind(this)}
                  placeholder="say something"></textarea>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="date"
                className="col-sm-3 col-form-label col-form-label-lg">Date</label>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  type="date"
                  name="date"
                  value={date}
                  onChange={this.onChange.bind(this)}
                  id="date"/>
              </div>
            </div>
            <div className="form-group row">
            <label
                htmlFor="date"
                className="col-sm-3 col-form-label col-form-label-lg"></label>
              <div className="col-sm-8">
                  <button type="submit" className="btn btn-primary">Submit</button>  
                  <Link to='/'>
                    <span className="btn btn-danger ml-1">Cancel</span>
                  </Link>
              </div>
            </div>
          </form>
      </div>
    )
  }
}

EditBook.propTypes = {
    book: PropTypes.object.isRequired,
    getBook: PropTypes.func.isRequired,
    editBook: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    book: state.book.book,
    updated: state.book
})

export default connect( mapStateToProps , {getBook , editBook} )(EditBook);