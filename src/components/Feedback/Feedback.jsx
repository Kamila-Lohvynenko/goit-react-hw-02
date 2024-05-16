import css from './Feedback.module.css';

const Feedback = ({
  values: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <ul className={css.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      {totalFeedback && (
        <>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {positiveFeedback}%</li>
        </>
      )}
    </ul>
  );
};

export default Feedback;
