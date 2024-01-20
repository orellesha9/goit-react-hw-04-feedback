import { useState, Component } from 'react';
import styles from './feedback.module.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from 'components/Block/Section';
import Notification from 'components/Notification/Notification';

const feedbackOptions = ['good', 'neutral', 'bad'];

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = keyName => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = feedback[keyName];
    return Number(((value / total) * 100).toFixed(2));
  };

  const addFeedback = keyName => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [keyName]: prevFeedback[keyName] + 1,
    }));
  };
  const { good, neutral, bad } = feedback;

  const total = countTotalFeedback();

  // const feedbackPercantage = Number((good / total).toFixed(2));
  const feedbackPercantage = countPositiveFeedbackPercentage('good');
  return (
    <div className={styles.wrapper}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={feedbackOptions} addFeedback={addFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {!total ? (
          <Notification message="There is no feedback" total={total} />
        ) : (
          <Statistics
            total={total}
            good={good}
            bad={bad}
            neutral={neutral}
            feedback={feedbackPercantage}
          />
        )}
      </Section>
    </div>
  );
};

// class Feedback extends Component {
//   static feedbackOption = ['good', 'neutral', 'bad'];
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     // const values = Object.values(this.state);
//     // const total = values.reduce((acum, value) => acum + value, 0)
//     return total;
//   }

//   countPositiveFeedbackPercentage(keyName) {
//     const total = this.countTotalFeedback();
//     if (!total) {
//       return 0;
//     }
//     const value = this.state[keyName];
//     return Number(((value / total) * 100).toFixed(2));
//   }

//   addFeedback = keyName => {
//     this.setState(prevState => {
//       return {
//         [keyName]: prevState[keyName] + 1,
//       };
//     });
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     const total = this.countTotalFeedback();

//     // const feedbackPercantage = Number((good / total).toFixed(2));
//     const feedbackPercantage = this.countPositiveFeedbackPercentage('good');
//     return (
//       <div className={styles.wrapper}>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={Feedback.feedbackOption}
//             addFeedback={this.addFeedback}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           {!total ? (
//             <Notification message="There is no feedback" total={total} />
//           ) : (
//             <Statistics
//               total={total}
//               good={good}
//               bad={bad}
//               neutral={neutral}
//               feedback={feedbackPercantage}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

export default Feedback;
