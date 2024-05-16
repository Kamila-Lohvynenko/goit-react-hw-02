import { useEffect, useState } from 'react';
import './App.css';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

function App() {
  const [options, setOptions] = useState(() => {
    const savedOptions = window.localStorage.getItem('saved-options');
    return JSON.parse(savedOptions) || { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-options', JSON.stringify(options));
  }, [options]);

  const totalFeedback = options.good + options.neutral + options.bad;
  const positiveFeedback = Math.round((options.good / totalFeedback) * 100);

  function updateFeedback(feedbackType) {
    if (feedbackType === 'reset') {
      setOptions({ good: 0, neutral: 0, bad: 0 });
    } else {
      setOptions({ ...options, [feedbackType]: options[feedbackType] + 1 });
    }
  }

  return (
    <>
      <Description />
      <Options total={totalFeedback} handleClick={updateFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          values={options}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
