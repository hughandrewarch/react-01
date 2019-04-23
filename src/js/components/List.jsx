import React, { Component } from "react"
import { connect } from "react-redux"
import { removeArticle } from "../actions"

const mapStateToProps = (state) => {
  return { articles: state.articles }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeArticle: article => {
      dispatch(removeArticle(article))
    }
  }
}

class ConnectedList extends Component {
  constructor() {
    super()

    this.handleRemove = this.handleRemove.bind(this)
  }

  handleRemove(event) {
    event.preventDefault()
    const { id } = event.target;
    this.props.removeArticle({ id })
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <li className="list-group-item" key={el.id}>
            <div>
              {el.title}
            </div>
            <button onClick={this.handleRemove}
                    className="btn btn-success btn-lg"
                    id={el.id}
            >
              REMOVE
            </button>
          </li>
        ))}
      </ul>
    )
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList)

export default List
