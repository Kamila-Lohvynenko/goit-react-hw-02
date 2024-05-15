import css from './Options.module.css';

const Options = ({ values, setValues, total }) => {
  function updateFeedback(feedbackType) {
    if (feedbackType === 'reset') {
      setValues({ good: 0, neutral: 0, bad: 0 });
    } else {
      setValues({ ...values, [feedbackType]: values[feedbackType] + 1 });
    }
  }
  return (
    <ul className={css.list}>
      <li>
        <button
          className={`${css.button} ${css.green}`}
          onClick={() => {
            updateFeedback('good');
          }}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={`${css.button} ${css.white}`}
          onClick={() => {
            updateFeedback('neutral');
          }}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={`${css.button} ${css.red}`}
          onClick={() => {
            updateFeedback('bad');
          }}
        >
          Bad
        </button>
      </li>
      {total && (
        <li>
          <button
            className={`${css.button} ${css.gray}`}
            onClick={() => {
              updateFeedback('reset');
            }}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
