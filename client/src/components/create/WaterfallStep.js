import React, { Component } from 'react';

export default class WaterfallStep extends Component {

  state = {
    items: []
  }

  deleteStepHandler = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="box waterfall-step">
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <p className="subtitle is-5">
                <strong>Step</strong>
              </p>
             </div>
          </div>
          <div className="level-right">
            <span className="level-item">
              <a onClick={ this.deleteStepHandler } class="delete is-medium"></a>
            </span>
          </div>
        </nav>
      </div>
    )
  }
}