import NavCompositor from '../NavCompositor/NavCompositor';
import './Nav.css';

function Nav({ handleSection, section }) {
  return (
    <nav className="nav">
      <ul>
        {section &&
          section.map((name, index) => (
            <NavCompositor
              key={index}
              name={name}
              handleSection={handleSection}
            />
          ))}
      </ul>
    </nav>
  );
}

export default Nav;
