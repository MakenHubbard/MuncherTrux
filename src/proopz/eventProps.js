import PropTypes from 'prop-types';

const eventShape = PropTypes.shape({
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  arrival: PropTypes.string.isRequired,
  departure: PropTypes.string.isRequired,
  eventAttending: PropTypes.string.isRequired,
});

export {eventShape};
