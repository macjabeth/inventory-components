import PropTypes from 'prop-types';

export default function RowContainer({ rowData }) {
  return (
    <div>
      <p>Name: {rowData.name}</p>
      <p>Date: {rowData.date}</p>
      <p>Description: {rowData.description}</p>
    </div>
  );
}

RowContainer.propTypes = {
  rowData: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string
  })
};