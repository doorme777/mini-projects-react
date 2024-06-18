import './NavCompositor.css';
function NavCompositor({ handleSection, name }) {
  console.log(name);
  return (
    <button
      className="section-menu"
      onClick={() => {
        console.log(handleSection(name));
      }}
    >
      {name}
    </button>
  );
}

export default NavCompositor;
