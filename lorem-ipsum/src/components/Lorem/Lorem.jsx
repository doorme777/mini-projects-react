import "./Lorem.css";

function Lorem({ texts }) {
  return (
    texts &&
    texts.map((item, index) => {
      return (
        <p className="lorem" key={index}>
          {item}
        </p>
      );
    })
  );
}

export default Lorem;
