import React, { Component } from 'react';
import DialogStep from './DialogStep';

export default class WaterfallDialogMaker extends Component {

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
                <button onClick={this.props.handleAddStep} className="button is-success has-text-white">+ Add step</button>
              </span>
            </div>
          </div>
          {
            this.props.dialog.steps.map((step, i) => {
              return (
                <div key={i + 1} className="level">
                  <div key={i + 1} className="level-item">
                    <DialogStep
                      key={step.id} 
                      id={step.id}
                      items={step.items}
                      handleAddStep={this.props.handleAddStep}
                      handleAddItem={this.props.handleAddItem}
                      handleDeleteStep={this.props.handleDeleteStep}
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