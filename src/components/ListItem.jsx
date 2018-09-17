import React, { Component } from 'react';
import { connect } from "react-redux";
import {setEditedItem} from '../actions'
export class ListItem extends Component {
    handleEditItem = () => {
       
        let ei = {
            Id: this.props.Id,
            Title: this.props.Title
        }
        this.props.setEditedItem(ei);
    }
    render() {
        return (
            <tr className="ListItem">
                <td>{this.props.Id}</td>
                <td>{this.props.Title}</td>
                <td><a onClick={this.handleEditItem}>Edytuj</a></td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {};
const mapDispatchToProps = { setEditedItem };

export const ListItemContainer = connect(mapStateToProps, mapDispatchToProps)(ListItem);