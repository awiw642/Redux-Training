import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateNewItemValue } from '../actions/new-item-actions';
import { addNewItem } from '../actions/items-actions';
import NewItem from '../components/NewItem';


const mapStateToProps = ({ newItemValue }) => {
  return { value: newItemValue };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNewItemValue,
    onSubmit: addNewItem
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);