import './Cards.css';

function Card(props) {
  const { title, price, text, img } = props;
  return (
    <article className="card">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="container-description">
        <div className="header-description">
          <h3>{title}</h3>
          <span>{price}</span>
        </div>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default Card;
