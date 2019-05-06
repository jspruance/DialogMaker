import React, { Component } from 'react';
import bulmaSteps from 'bulma-steps/dist/js/bulma-steps.min.js';
import WaterfallDialogMaker from './create/WaterfallDialogMaker';
import StandalonePromptDialogMaker from './create/StandalonePromptDialogMaker';
import ComponentDialogMaker from './create/ComponentDialogMaker';
const uuidv4 = require('uuid/v4');

export default class DialogMaker extends Component {
  
  state = {
    step: 1,
    dialog: {
      name: "my dialog",
      type: "waterfalldialog",
      steps: [
        {
          "id": uuidv4(),
          "items": [
            {
              "type": "message",
              "value": "hello world"
            }
          ]
        }
      ]
    }
  }

  componentDidMount() {
    bulmaSteps.attach();
    console.log(this.state);
  }

  onNextStep = (event) => {
    event.preventDefault();
    this.setState((state) => ({
      step: state.step + 1
    }));
    console.log(`Dialog type: ${this.state.dialog.type}`);
  }

  onPreviousStep = (event) => {
    event.preventDefault();
    this.setState((state) => ({
      step: this.state.step - 1
    }));
    console.log(`Dialog type: ${this.state.dialog.type}`);
  }

  onDialogTypeChange = (event) => {
    this.setState({dialog: { type: event.target.value }});
  }

  handleAddStep = async(e) => {
    e.preventDefault();
    const newStep = {
      "id": uuidv4(),
      "items": [
        {
          "id": uuidv4(),
          "type": "message",
          "value": ""
        }
      ]
    };
    this.setState((state) => ({
      dialog: {
        ...state.dialog,
        steps: [...state.dialog.steps, newStep]
      }
    }));
    await console.log(this.state);
  }

  handleAddItem = async(stepid, e) => {
    console.log('hello');
    e.preventDefault();
    const newItem = {
      "id": uuidv4(),
      type: "message",
      value: "test"
    };
    this.setState((state) => ({
      dialog: {
        ...state.dialog,
        steps: state.dialog.steps.map(step => (step.id === stepid ? {...step, items: [...step.items, newItem]} : step))
      }
    }));
    await console.log(this.state);
  }

  handleDeleteStep = (stepid, e) => {
    e.preventDefault();
    this.setState((state, props) => ({
      dialog: {
        ...state.dialog,
        steps: state.dialog.steps.filter((step) => step.id !== stepid)
      }
    }));
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
                            <div className="select is-primary is-medium">
                            {/*<div className="nes-select is-half">*/}
                              <select
                                value={this.state.dialog.type}
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
                    this.state.dialog.type === 'waterfalldialog' &&
                    <WaterfallDialogMaker 
                      dialog={this.state.dialog} 
                      handleAddStep={this.handleAddStep}
                      handleAddItem={this.handleAddItem}
                      handleDeleteStep={this.handleDeleteStep}
                    />
                  }
                  {
                    this.state.dialog.type === 'standaloneprompt' &&
                    <StandalonePromptDialogMaker dialog={this.state.dialog} />
                  }
                  {
                    this.state.dialog.type === 'componentdialog' &&
                    <ComponentDialogMaker dialog={this.state.dialog} />
                  }
                </div>
                <div className="step-content has-text-centered">
                  <p>Please review your dialog</p>
                </div>
                <div className="step-content has-text-centered">
                  <button className="nes-btn is-success is-large has-text-white">Export dialog ></button>
                  <button className="nes-btn is-primary is-large has-text-white has-margin-left-1">Save dialog ></button>
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