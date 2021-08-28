import styles from './FeedbackOptions.module.scss';
import PropTypes from 'prop-types';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKeys = Object.keys(options); 
  return optionsKeys.map( (option, ind) => (
      <button 
        className={styles.FeedbackOptions__button}
        value={option}
        key={option}
        type="button" 
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    )
  )  
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.number).isRequired,
}
