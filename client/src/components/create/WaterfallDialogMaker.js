import React, { Component } from 'react';
import WaterfallStep from './WaterfallStep';
const uuidv4 = require('uuid/v4');

export default class WaterfallDialogMaker extends Component {

  state = {
    steps: []
  }

  handleAddStep = async (e) => {
    e.preventDefault();
    const defaultStep = {id: uuidv4(), items: []};
    await this.setState({steps: [...this.state.steps, defaultStep]});
    console.log(this.state.steps);
  }

  handleDeleteStep = (id, e) => {
    e.preventDefault();
    this.setState({steps: this.state.steps.filter((step) => step.id !== id)});
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
                <button onClick={this.handleAddStep} className="button is-success has-text-white">+ Add step</button>
              </span>
            </div>
          </div>
          {
            this.state.steps.map((step, i) => {
              return (
                <div key={i + 1} className="level">
                  <div key={i + 1} className="level-item">
                    <WaterfallStep 
                      key={step.id} 
                      id={step.id}
                      handleDeleteStep={this.handleDeleteStep} 
                    />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}