import React, { Component } from 'react';
import { ListItem } from './ListItem'
import { connect } from "react-redux";
import {ListItemContainer} from './ListItem'
export class ItemsList extends Component {

    render() {
        let itemsRows;
        
        if (this.props.listItems) {

          
            itemsRows = this.props.listItems.map(item => {
                return (
                   // <tr>
                   //     <td>{item.Id}</td>
                   //     <td>{item.Title}</td>
                   //     </tr>
                    <ListItemContainer Id={item.Id} Title={item.Title} />
                );

            }

            );

        }
        
        return (
            <div className="ItemsList">
                Pobrane elementy listy
            <table>
                    {itemsRows}
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listItems: state.listItems,

    }
};
const mapDispatchToProps = {};

export const ItemsListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemsList);