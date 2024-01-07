import styles from './feedback.module.css';

const FeedbackActions = ({options,addFeedback}) => {
  const buttonElements = options.map(name => (
    <button onClick={() => addFeedback(name)} key={name}>
      {name}
    </button>
  ));

  return buttonElements;
};

export default FeedbackActions;
