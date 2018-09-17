import React, { Component } from 'react';
import { ItemsList } from './ItemsList'
import { ItemsListContainer } from './ItemsList'
import { EditItem } from './EditItem'
import { listSelected } from '../actions'
import { connect } from "react-redux";
import { fetchLists } from '../actions';
import { fetchListItems } from '../actions'
import { bindActionCreators } from 'redux'
import {EditItemContainer} from './EditItem'
export class Layout extends Component {

    componentDidMount() {
        this.props.fetchLists();
    }
    handleChange = (event) => {
        this.props.listSelected(event.target.value);
    }
    // handleGetListItems = () => {
    //     this.props.getListItems();
    // }
    render() {
        let listSelection;
        listSelection = this.props.lists.map(list => {
            return (
                <option value={list.Id} >{list.Title}</option>
            );
        });

        return (
            <div className="Layout">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Wybierz listę</label>
                        <select className='form-control' onChange={this.handleChange}>
                            <option>Wybierz</option>
                            {listSelection}
                        </select>
                    </div>
                    <input type="button" className="btn btn-primmary" value="Wczytaj" onClick={this.props.fetchListItems} />
                </form>
                <EditItemContainer />
                <ItemsListContainer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listId: state.listId,
        lists: state.lists,
        editedItem: state.editedItem

    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ listSelected, fetchLists, fetchListItems }, dispatch)
    }
};

export const LayoutContainer = connect(mapStateToProps, mapDispatchToProps)(Layout);