import React, { Component } from 'react';

export default class WaterfallStep extends Component {

  state = {
    items: []
  }

  render() {
    return (
      <div className="box waterfall-step">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <p className="subtitle is-5 has-text-white">
                <strong>Step</strong>
              </p>
             </div>
          </div>
          <div className="level-right">
            <span className="level-item">
              <button onClick={ (e) => this.props.handleDeleteStep(this.props.id, e) } className="delete is-medium">delete</button>
            </span>
          </div>
        </div>
      </div>
    )
  }
}