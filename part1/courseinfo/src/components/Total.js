import React from "react";

const Total = ({ parts }) => {
  const numberOfExercises = parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );
  return <p>Number of exercises {numberOfExercises}</p>;
};

export default Total;
