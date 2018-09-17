import React, { Component } from 'react';
import { connect } from "react-redux";
import { setEditedItem } from '../actions'
import { saveEditedItem } from '../actions'
import { bindActionCreators } from 'redux'

export class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: ''
        };
    }
    componentWillReceiveProps(newProps) {
        this.setState({ Title: newProps.editedItem.Title });
    }
    handlerCancelEdit = () => {
        let ei = {};
        this.props.setEditedItem(ei);
    }

    handleChange = (event) => {
        let ei = {
            Id: this.props.editedItem.Id,
            Title: event.target.value
        }
        this.props.setEditedItem(ei);
    }
    render() {
        console.log(this.props.editedItem);
        return (
            <table className="EditItem">
                <tr>
                    <td colSpan='2'>Edycja elementu</td>
                </tr>
                <tr>
                    <td>Id elementu</td>
                    <td>{this.props.editedItem.Id ? this.props.editedItem.Id : ''}</td>
                </tr>
                <tr>
                    <td>Tytuł</td>
                    <td><input type='text' value={this.props.editedItem.Title ? this.props.editedItem.Title : ''} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type='button' value="Zapisz" onClick={this.props.saveEditedItem} />
                        <input type='button' value='Anuluj' onClick={this.handlerCancelEdit} />
                    </td>
                </tr>
            </table>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        editedItem: state.editedItem,

    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ saveEditedItem, setEditedItem }, dispatch)
    }
};

export const EditItemContainer = connect(mapStateToProps, mapDispatchToProps)(EditItem);