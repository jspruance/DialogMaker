import React, { Component } from 'react';
import DialogStepItem from './DialogStepItem';

export default class DialogStep extends Component {

  state = {
    isEditMode: true,
    itemtype: "message",
    edititems: this.props.items
  }

  handleEdit = () => {
    this.setState({isEditMode: true});
  }

  handleSaveChanges = () => {
    this.setState({isEditMode: false});
    console.log('check start');
    console.log(this.props.id);
    console.log(this.state.edititems);
    console.log('check end');
    this.props.handleSaveStepEdits(this.props.id, this.state.edititems);
  }

  render() {
    return (
      <div className="box waterfall-step">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <p className="subtitle is-5 has-text-white">
                <strong>Dialog step</strong>
              </p>
             </div>
          </div>
          <div className="level-right">
            <span className="level-item">
              <button onClick={(e) => this.handleSaveChanges()} className="button is-success is-small">save</button>
            </span>
            <span className="level-item">
              <button onClick={(e) => this.props.handleAddItem(this.props.id, e)} className="button is-primary is-small">+ add item</button>
            </span>
            <span className="level-item">
              <button onClick={ (e) => this.props.handleDeleteStep(this.props.id, e) } className="delete is-medium">delete</button>
            </span>
          </div>
        </div>
        {
          this.props.items.map((item, i) => <DialogStepItem key={i} item={item} />)
        }
      </div>
    )
  }
}