import "./Profile.css";

function Profile(props) {
  const { title, company, date, desc } = props;
  console.table(props);
  return (
    <article className="profile">
      <header>
        <h2>{title}</h2>
        <span>{company}</span>
        <p>{date}</p>
      </header>
      <ul>{desc && desc.map((desc, index) => <li key={index}>{desc}</li>)}</ul>
    </article>
  );
}

export default Profile;
