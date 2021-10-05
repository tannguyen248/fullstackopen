import React, { useState } from "react";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const MostVoteAnecdote = ({ anecdote, point }) => {
  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <div>{anecdote}</div>
      <div>has {point} vote(s)</div>
    </div>
  );
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const bestAnecdoteIndex = points.indexOf(Math.max(...points));

  const voteAnecdote = () => {
    const copyPoints = [...points];
    copyPoints[selected] += 1;
    setPoints(copyPoints);
  };

  const randomAnecdote = () => {
    const index = getRandomInt(anecdotes.length);
    setSelected(index);
  };

  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        <div> {anecdotes[selected]}</div>
        <div>
          <Button onClick={voteAnecdote} text="vote" />
          <Button onClick={randomAnecdote} text="next anecdote" />
        </div>
      </div>
      <MostVoteAnecdote
        anecdote={anecdotes[bestAnecdoteIndex]}
        point={points[bestAnecdoteIndex]}
      />
    </div>
  );
};

export default App;
