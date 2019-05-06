// import shortid from 'shortid';
import types from './noteActionTypes';


const toggleNote = id => ({
  type: types.TOGGLE_COMPLETED,
  payload: id
});

const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter
});

const fetchRequest = () => ({
  type: types.FETCH_REQUEST
});

const fetchSuccsess = (notes) => ({
  type: types.FETCH_SUCCSESS,
  payload: notes
});

const fetchError = (error) => ({
  type: types.FETCH_ERROR,
  payload: error
});

const addNoteSuccsess = (note) => ({
  type: types.ADD_SUCCSESS,
  payload: note
});

const deleteNoteSuccsess = (id) => ({
  type: types.DELETE_SUCCSESS,
  payload: id
});


export default { deleteNoteSuccsess, addNoteSuccsess, fetchError, fetchRequest, fetchSuccsess, toggleNote, changeFilter };
