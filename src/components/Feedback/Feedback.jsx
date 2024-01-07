import { Component } from 'react';
import styles from './feedback.module.css';
import FeedbackActions from './FeedbackActions';
import FeedbackResults from './FeedbackResults';
import Block from 'components/Block/Block';

class Feedback extends Component {
  static feedbackOptions = ['good', 'neutral', 'bad'];
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    // const values = Object.values(this.state);
    // const total = values.reduce((acum, value) => acum + value, 0)
    return total;
  }

  countPositiveFeedbackPercentage(keyName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[keyName];
    return Number(((value / total) * 100).toFixed(2));
  }

  addFeedback = keyName => {
    this.setState(prevState => {
      return {
        [keyName]: prevState[keyName] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();

    // const feedbackPercantage = Number((good / total).toFixed(2));
    const feedbackPercantage = this.countPositiveFeedbackPercentage('good');
    return (
      <div className={styles.wrapper}>
        <Block title={'Please leave feedback'}>
          <FeedbackActions
            options={Feedback.feedbackOptions}
            addFeedback={this.addFeedback}
          />
        </Block>
        <Block title={'Statistics'}>
          {' '}
          <FeedbackResults
            total={total}
            good={good}
            bad={bad}
            neutral={neutral}
            feedback={feedbackPercantage}
          />
        </Block>
      </div>
    );
  }
}

export default Feedback;
