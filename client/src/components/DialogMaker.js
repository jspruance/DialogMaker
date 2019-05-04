import React, { Component } from 'react';
import bulmaSteps from 'bulma-steps/dist/js/bulma-steps.min.js';
import WaterfallDialogMaker from './WaterfallDialogMaker';
import StandalonePromptDialogMaker from './StandalonePromptDialogMaker';
import ComponentDialogMaker from './ComponentDialogMaker';

export default class DialogMaker extends Component {
  
  state = {
    step: 1,
    dialogType: "waterfalldialog",
    dialogSteps: []
  }

  componentDidMount() {
    bulmaSteps.attach();
  }

  onNextStep = async (event) => {
    event.preventDefault();
    await this.setState({ step: this.state.step + 1 });
    console.log(`Dialog type: ${this.state.dialogType}`);
  }

  onPreviousStep = async (event) => {
    event.preventDefault();
    await this.setState({ step: this.state.step - 1 });
    console.log(`Dialog type: ${this.state.dialogType}`);
  }

  onDialogTypeChange = async (event) => {
    await this.setState({ dialogType: event.target.value });
  }

  render() {
    return (
      <div className="dialogs-wrapper has-padding-1">
        <div className="container">
          <h1>Create a dialog</h1>
          <p>Create a dialog for your bot using the form below. 
            Then export the json file and drop it into your bot's 'dialogs' folder.
          </p>
          <div className="dialogs-steps">
            <div className="steps">
              <div className="step-item is-active is-success">
                <div className="step-marker">1</div>
                <div className="step-details">
                  <p className="step-title">Choose dialog type</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-marker">2</div>
                <div className="step-details">
                  <p className="step-title">Create dialog steps</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-marker">3</div>
                <div className="step-details">
                  <p className="step-title">Review dialog</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-marker">4</div>
                <div className="step-details">
                  <p className="step-title">Export dialog</p>
                </div>
              </div>
              <div className="steps-content">
                <div className="step-content has-text-centered is-active">
                  <div className="card">
                    <div className="card-content">
                      <div className="field is-horizontal">
                        <div className="field-label is-normal">
                          <label className="label">Dialog type</label>
                        </div>
                        <div className="field-body">
                          <div className="field">
                            <div className="nes-select is-half is-size-6">
                              <select
                                value={this.state.dialogType}
                                onChange={this.onDialogTypeChange}>
                                <option value="waterfalldialog">waterfall dialog</option>
                                <option value="standaloneprompt">standalone prompt</option>
                                <option value="componentdialog">component dialog</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="step-content has-text-centered">
                  {
                    this.state.dialogType === 'waterfalldialog' &&
                    <WaterfallDialogMaker />
                  }
                  {
                    this.state.dialogType === 'standaloneprompt' &&
                    <StandalonePromptDialogMaker />
                  }
                  {
                    this.state.dialogType === 'componentdialog' &&
                    <ComponentDialogMaker />
                  }
                </div>
                <div className="step-content has-text-centered">
                  <p>Please review your dialog</p>
                </div>
                <div className="step-content has-text-centered">
                  <a class="nes-btn is-success is-large white-text">Export dialog ></a>
                  <a class="nes-btn is-primary is-large white-text has-margin-left-1">Save dialog ></a>
                </div>
              </div>
              <div className="steps-actions">
                <div className="steps-action">
                  <a href="/" onClick={ this.onPreviousStep } data-nav="previous" className="nes-btn has-text-primary">Previous</a>
                </div>
                <div className="steps-action">
                  <a href="/" onClick={ this.onNextStep } data-nav="next" className="nes-btn has-text-primary">Next</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}