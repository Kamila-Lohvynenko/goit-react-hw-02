import css from './Options.module.css';

const Options = ({ total, handleClick }) => {
  return (
    <ul className={css.list}>
      <li>
        <button
          className={`${css.button} ${css.green}`}
          onClick={() => {
            handleClick('good');
          }}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={`${css.button} ${css.white}`}
          onClick={() => {
            handleClick('neutral');
          }}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={`${css.button} ${css.red}`}
          onClick={() => {
            handleClick('bad');
          }}
        >
          Bad
        </button>
      </li>
      {total > 0 && (
        <li>
          <button
            className={`${css.button} ${css.gray}`}
            onClick={() => {
              handleClick('reset');
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
