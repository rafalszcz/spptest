import React, { Component } from 'react';
import './App.css';
import { Layout } from './components/Layout'
import axios from 'axios';
import { connect } from "react-redux";
import { listFetched } from "./actions";
import {fetchLists} from './actions';
import {LayoutContainer} from './components/Layout'

class App extends Component {
  constructor() {
    super();
    this.state = {
     // webLists: [],
      listItems: [],
     // selectedListId: '',
      editedItem: {
        Id: 0,
        Title: ''
      },
    //  __metadata: {}
    }
  }
  //region repository
 // getWebLists = () => {
   
    // const url = "http://sppdev4.cn.in.pekao.com.pl/sites/UamAll/_api/web/lists";
    // axios({
    //   url: url,
    //   method: 'get',
    //   headers: {
    //     'Accept': 'application/json;odata=verbose'
    //   }
    // }).then(result => {
    //   const data = result.data.d.results;
    //   let listSelection = [];
    //   for (var i = 0; i < data.length; i++) {
    //     listSelection.push({
    //       Id: data[i].Id,
    //       Title: data[i].Title
    //     });

    //   }
    //   if (listSelection.length > 0) {
    //     this.setState({ __metadata: data[0].__metadata });
    //   }
    //   this.props.listFetched(listSelection);
    //   //this.setState({ webLists: listSelection });
    // });
    //this.props.fetchLists();
  //}
  // setCurrentListId = (newSelectedListId) => {
  //   this.setState({ selectedListId: newSelectedListId });
  // }
  // loadListItems(listId) {
  //   const url = "/sites/UamAll/_api/web/lists(guid'" + listId + "')/items";
  //   axios({
  //     url: url,
  //     method: 'get',
  //     headers: {
  //       'Accept': 'application/json;odata=verbose'
  //     }
  //   }).then(result => {
  //     console.log(result);
  //     const data = result.data.d.results;
  //     let items = [];
  //     for (var i = 0; i < data.length; i++) {
  //       items.push({
  //         Id: data[i].Id,
  //         Title: data[i].Title
  //       });
  //     }
  //     this.setState({ listItems: items });
  //   });
  // }
  // handleGetListItems = () => {
  //   console.log(this.props.listId);
  //   this.loadListItems(this.props.listId);
  // }
  // handlerSetEditedItem = (newEditedItem) => {
  //   this.setState({ editedItem: newEditedItem });
  // }
  // handlerUpdateEditedItem = (updateItem) => {
  //   var formdigest = document.getElementById("__REQUESTDIGEST").value;
  //   console.log(updateItem);
  //   const url = "/sites/UamAll/_api/web/lists(guid'" + this.props.listId + "')/items(" + updateItem.Id + ")";
  //   axios({
  //     url: url,
  //     method: 'post',
  //     headers: {
  //       "accept": "application/json;odata=verbose",
  //       "content-type": "application/json;odata=verbose",
  //       "X-HTTP-Method": "MERGE",
  //       "X-RequestDigest": formdigest,
  //       "IF-MATCH": "*"
  //     },
  //     data: JSON.stringify({
  //       __metadata:
  //         {
  //           type: "SP.Data.Sownik_x0020_aplikacjiListItem"
  //         },
  //       'Title': updateItem.Title
  //     })
  //   }).then(result => {
  //     this.loadListItems(this.props.listId);
  //     let editedItem = {
  //       Id: 0,
  //       Title: ''
  //     }
  //     this.handlerSetEditedItem(editedItem);
  //   }).catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   });
  // }
  //endregion
  // componentDidMount() {
  //   this.getWebLists();
  // }
  render() {
    return (
      <div className="App">

        <LayoutContainer  />
      </div>
    );
  }
}

export default App;
const mapStateToProps = (state) => {
  return {
    lists: state.lists,
    listId: state.listId
  }
};
const mapDispatchToProps = { fetchLists };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);