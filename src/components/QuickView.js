import PropTypes from 'prop-types';

export default function QuickView({ itemData, onClose }) {
  return (
    <div>
      <button onClick={onClose}>X</button>
      <p>Name: {itemData.name}</p>
      <p>Amount: {itemData.amount}</p>
      <p>Get By: {itemData.date}</p>
      <p>Location: {itemData.location}</p>
      <p>Description: {itemData.description}</p>
    </div>
  );
}

QuickView.propTypes = {
  itemData: PropTypes.object,
  onClose: PropTypes.func
};