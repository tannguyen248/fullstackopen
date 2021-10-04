import React, { useState } from "react";

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const allFeedback = good + neutral + bad;

  if (allFeedback === 0) {
    return <span>No feedback given</span>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={allFeedback} />
        <StatisticLine
          text="average"
          value={(good * 1 + neutral * 0 + bad * -1) / allFeedback}
        />
        <StatisticLine
          text="positive"
          value={`${(good * 100) / allFeedback}%`}
        />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button onClick={() => setGood((good) => good + 1)}>good</Button>
        <Button onClick={() => setNeutral((neutral) => neutral + 1)}>
          neutral
        </Button>
        <Button onClick={() => setBad((bad) => bad + 1)}>bad</Button>
      </div>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
