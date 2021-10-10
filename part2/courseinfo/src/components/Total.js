import React from "react";

const Total = ({ parts }) => {
  const numberOfExercises = parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );
  return <h3>total of {numberOfExercises} exercises</h3>;
};

export default Total;
