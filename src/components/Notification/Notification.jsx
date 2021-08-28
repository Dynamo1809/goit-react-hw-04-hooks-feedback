import styles from './Notification.module.scss';
import PropTypes from 'prop-types';


const Notification = ({ message }) => {
  return message && <h2 className={styles.Notification__title}>{message}</h2>
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}