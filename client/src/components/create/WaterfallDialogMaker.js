import React, { Component } from 'react';
import WaterfallStep from './WaterfallStep';

export default class WaterfallDialogMaker extends Component {

  state = {
    steps: []
  }

  handleAddStep = (e) => {
    e.preventDefault();
    this.setState({steps: [...this.state.steps, {}]});
  }

  handleDeleteStep = (e) => {
    e.preventDefault();
    const newSteps = this.state.steps;
    newSteps.pop();
    this.setState({steps: newSteps});
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <p className="subtitle is-5">
                  <strong>Waterfall dialog</strong>
                </p>
              </div>
            </div>
            <div className="level-right">
              <span className="level-item">
                <button onClick={ this.handleAddStep } className="button is-success white-text">+ Add step</button>
              </span>
            </div>
          </div>
          {
            this.state.steps.map((step) => {
              return (<div className="level">
                <div className="level-item">
                  <WaterfallStep handleDeleteStep={ this.handleDeleteStep } />
                </div>
              </div>)
            })
          }
        </div>
      </div>
    )
  }
}