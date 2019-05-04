import React, { Component } from 'react';
import WaterfallStep from './WaterfallStep';

export default class WaterfallDialogMaker extends Component {

  state = {
    steps: []
  }

  addStepHandler = (e) => {
    e.preventDefault();
    this.setState({steps: [...this.state.steps, {}]});
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="subtitle is-5">
                  <strong>Waterfall dialog</strong>
                </p>
              </div>
            </div>
            <div class="level-right">
              <span class="level-item">
                <a onClick={ this.addStepHandler } class="button is-success white-text">+ Add step</a>
              </span>
            </div>
          </div>
          {
            this.state.steps.map(step => {
              return <div class="level">
                <div className="level-item">
                  <WaterfallStep />
                </div>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}