import MaterialTable from 'material-table';
import PropTypes from 'prop-types';

export default function ItemList({ columns, data, title }) {
  return <MaterialTable columns={columns} data={data} title={title} />;
}

ItemList.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
};