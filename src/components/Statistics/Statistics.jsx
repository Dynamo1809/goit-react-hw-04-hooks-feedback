import Notification from 'components/Notification';
import PropTypes from 'prop-types';

import styles from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const withoutFeedbacks = (good === 0 && neutral === 0 && bad === 0) ;
  return (
    withoutFeedbacks ? (
      <Notification message="No feedback given"/>
      ): (
        <div>
          <p className={styles.Statistics__text}>Good: {good}</p>
          <p className={styles.Statistics__text}>Neutral: {neutral}</p>
          <p className={styles.Statistics__text}>Bad: {bad}</p>
          <p className={styles.Statistics__text}>Total: {total()}</p>
          <p className={styles.Statistics__text}>Positive feedback: {positivePercentage()}%</p>
        </div> 
      )       
  )
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
}