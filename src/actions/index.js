import axios from 'axios';

export const listFetched = (lists) => ({
  type: 'FETCH_LIST_SUCCESS',
  lists
});

export const metadataFetched = (metadata) => ({
  type: 'FETCH_METADATA_SUCCESS',
  metadata
});


export const fetchLists = () => (dispatch, getState) => {
  const url = "http://sppdev4.cn.in.pekao.com.pl/sites/UamAll/_api/web/lists";
  axios({
    url: url,
    method: 'get',
    headers: {
      'Accept': 'application/json;odata=verbose'
    }
  }).then((result) => {

    const data = result.data.d.results;
    let listSelection = [];
    for (var i = 0; i < data.length; i++) {
      listSelection.push({
        Id: data[i].Id,
        Title: data[i].Title
      });

    }
    if (listSelection.length > 0) {
      dispatch(metadataFetched(data[0].__metadata));
    }
    dispatch(listFetched(listSelection));
  });
}


export const listSelected = (listId) => ({
  type: 'LIST_SELECTED',
  listId
});



export const fetchListItems = () => (dispatch, getState) => {
  const url = "/sites/UamAll/_api/web/lists(guid'" + getState().listId + "')/items";
  axios({
    url: url,
    method: 'get',
    headers: {
      'Accept': 'application/json;odata=verbose'
    }
  }).then(result => {
    console.log(result);
    const data = result.data.d.results;
    let items = [];
    for (var i = 0; i < data.length; i++) {
      items.push({
        Id: data[i].Id,
        Title: data[i].Title
      });
    }
    dispatch(listItemsFetched(items));
  });
}
export const listItemsFetched = (listItems) => ({
  type: 'FETCH_LIST_ITEMS_SUCCESS',
  listItems
});



export const setEditedItem = (editedItem) => ({
  type: 'SET_EDITED_ITEM',
  editedItem
});



export const saveEditedItem = () => (dispatch, getState) => {
  var formdigest = document.getElementById("__REQUESTDIGEST").value;
 
  let editedItem = getState().editedItem;
  console.log('saveEditedItem');
  console.log(editedItem);
  let listId = getState().listId;
  const url = "/sites/UamAll/_api/web/lists(guid'" + listId + "')/items(" + editedItem.Id + ")";
  axios({
    url: url,
    method: 'post',
    headers: {
      "accept": "application/json;odata=verbose",
      "content-type": "application/json;odata=verbose",
      "X-HTTP-Method": "MERGE",
      "X-RequestDigest": formdigest,
      "IF-MATCH": "*"
    },
    data: JSON.stringify({
      __metadata: getState().metadata,
      'Title': editedItem.Title
    })
  }).then(result => {
    dispatch(fetchListItems());
    let newEditedItem = {};
    dispatch(setEditedItem(newEditedItem));
  }).catch(function (error) {
    // handle error
    console.log(error);
  });
}