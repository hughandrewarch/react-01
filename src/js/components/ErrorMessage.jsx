import React, { Component } from "react"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return { foundBadWord: state.foundBadWord }
}

//TODO
// don't specifically like how this is being handled in general
// works for now as an example but this can be better me thinks
class ErrorComponent extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
          {this.props.foundBadWord}
      </div>
    )
  }
}

const ErrorMessage = connect(mapStateToProps, null)(ErrorComponent)

export default ErrorMessage
