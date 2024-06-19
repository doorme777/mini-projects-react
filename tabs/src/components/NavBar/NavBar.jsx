import "./NavBar.css";

function NavBar({ handleProfile, companies }) {
  return (
    <nav>
      <ul>
        {companies &&
          companies.map((company) => {
            return (
              <li key={company}>
                <button onClick={() => handleProfile(company)}>
                  {company}
                </button>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}

export default NavBar;
