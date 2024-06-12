import "./SlideOfGuests.css";

function SlideOfGuest(props) {
  console.clear();
  const { name, age, image } = props;
  console.log(image);
  return (
    <div className="slide">
      <figure className="slide-left">
        <img src={`${image}`} alt={`${name}`} />
      </figure>
      <div className="slide-right">
        <h2>{name}</h2>
        <p>{age}</p>
      </div>
    </div>
  );
}

export default SlideOfGuest;
