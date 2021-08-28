import React, { Fragment, useState } from 'react';
// Components //
import { Section } from './components/Section';
import Statistics from './components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleCLick = (e) => {
    const { value } = e.currentTarget;
    
    switch( value ) {
      case 'good':
        setGood(prevValue => prevValue + 1);
        break;

      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      
      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad ;
  };

  const countPositiveFeedbackPercentage = () => {
    const integerPercentage = Math.round(good * 100 / countTotalFeedback());
    return integerPercentage;
  };
  
    return (
      <Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions options={{good, neutral, bad}} onLeaveFeedback={handleCLick} />
        </Section>

        <Section title="Statistics">
          <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={countTotalFeedback} 
            positivePercentage={countPositiveFeedbackPercentage} 
          >
          </Statistics>
        </Section>      
      </Fragment>
      
    )   
};

export default App;
