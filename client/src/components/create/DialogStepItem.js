import React, { Component } from 'react';

export default class DialogStepItem extends Component {

  state = {
    isEditMode: false,
    itemtype: "message"
  }

  handleChangeItemType = (e) => {
    this.setState({itemtype: e.target.value});
  }

  render() {
    return (
      <div className="level dialog-step-item">
        <div className="level-left">
          <div className="level-item">
            <span>item type:</span>
            <div className="control">
              <div className="select is-primary is-small has-margin-left-1">
                <select onChange={this.handleChangeItemType}>
                  <option value="message">message</option>
                  <option value="prompt">prompt</option>
                  <option value="replycaputre">reply caputre</option>
                  <option value="custom">custom</option>
                </select>
              </div>
            </div>
          </div>
          {
            this.state.itemtype === "message" &&
            <div className="level-item has-margin-left-1 dialog-item-value">
              <span className="item-input-label">message text:</span>
              <div className="field has-margin-left-05 ">
                <div className="control">
                  <input className="input is-primary is-small" type="text" placeholder="Text input" />
                </div>
              </div>
            </div>
          }
          {
            this.state.itemtype === "prompt" &&
            <div className="level-item has-margin-left-1 dialog-item-value">
              <span className="item-input-label">prompt text:</span>
              <div className="field has-margin-left-05 ">
                <div className="control">
                  <input className="input is-primary is-small" type="text" placeholder="Text input" />
                </div>
              </div>
            </div>
          }
          {
            this.state.itemtype === "replycaputre" &&
            <div className="level-item has-margin-left-1 dialog-item-value">
              <span className="item-input-label">variable name:</span>
              <div className="field has-margin-left-05 ">
                <div className="control">
                  <input className="input is-primary is-small" type="text" placeholder="Text input" />
                </div>
              </div>
            </div>
          }
          {
            this.state.itemtype === "custom" &&
            <div className="level-item has-margin-left-1 dialog-item-value">
              <span className="item-input-label">custom code:</span>
              <div className="field has-margin-left-05 ">
                <div className="control">
                  <input className="input is-primary is-small" type="text" placeholder="Text input" />
                </div>
              </div>
            </div>
          }
        </div>
        <div className="level-right">
          edit
        </div>
      </div>
    )
  }
}