import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from 'components/Button';
import { commentActions } from 'actions';

class CommentCreator extends Component {
  constructor() {
    super();
    this.state = {
      rating: '',
      description: '',
    };
  }

  onAddComment(e) {
    e.preventDefault();
    this.props.addComment({
      rating: this.state.rating,
      description: this.state.description,
    });
  }

  onRatingChange(e) {
    this.setState({
      rating: e.target.value,
    });
  }

  onDescriptionChange(e) {
    this.setState({
      description: e.target.value,
    });
  }

  render() {
    return (
      <div className="comment-creator">
        <h3>
          Add new comment
        </h3>
        <form onSubmit={this.onAddComment.bind(this)}>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input
              type="text"
              onChange={this.onRatingChange.bind(this)}
              value={this.state.rating}
              id="rating"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              onChange={this.onDescriptionChange.bind(this)}
              value={this.state.description}
              id="description"
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-default"
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addComment({ rating, description }) {
    dispatch(commentActions.createComment(rating, description));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(CommentCreator);
