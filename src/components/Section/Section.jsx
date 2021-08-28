import styles from './Section.module.scss';
import PropTypes from 'prop-types';


export const Section = ({ children, title }) => {
  return (
    <section className={styles.Section}>
      {title && 
        <h1>{title}</h1>
      }
      {children} 
    </section>
  )
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
}

