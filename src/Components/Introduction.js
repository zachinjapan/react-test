import Bio from "./Bio";

function Introduction(props) {
  return (
    <div>
      <h3>My name is {props.name}</h3>
      <Bio
        food={props.food}
        movie={props.movie}
        number={props.number}
        color={props.number}
      />
    </div>
  );
}

export default Introduction;
