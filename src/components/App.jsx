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

  return (
    <>
      <Description />
      <Options values={options} setValues={setOptions} total={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback values={options} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
