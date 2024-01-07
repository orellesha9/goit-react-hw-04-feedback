
const Statistics = ({ good, neutral, bad, total, feedback }) => {
  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {feedback}%</p>
    </>
  );
};

export default Statistics;
