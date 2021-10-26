function Bio(props) {
  return (
    <ol>
      <li>My favorite food is {props.food}</li>
      <li>My favorite movie is {props.movie}</li>
      <li>My favorite color is {props.color}</li>
      <li>My favorite number is {props.number}</li>
    </ol>
  );
}

export default Bio;
