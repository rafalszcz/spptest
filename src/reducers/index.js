import { combineReducers } from "redux";
import { lists } from "./lists";
import { metadata } from "./metadata";
import {listId} from './listId'
import {listItems} from './listItems'
import {editedItem} from './editedItem'
export default combineReducers({
    lists,
    metadata,
    listId,
    listItems,
    editedItem
});