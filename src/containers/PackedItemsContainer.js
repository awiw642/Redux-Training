import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Items from '../components/Items';
import { toggleItem, removeItem } from '../actions/items-actions';

const mapStateToProps = ({ items, filter }) => ({
  items: items.filter(item => {
    return item.packed && item.value.includes(filter.packedItemsFilter);
  }),
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onCheckOff: toggleItem,
      onRemove: removeItem,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
