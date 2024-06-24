import "./Counter.css";

function Counter({ createLoremUpsum }) {
  let QuantityTexts = [];
  return (
    <div>
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <form
        className="container-counter"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.group("QuantityTexts");
          console.log(QuantityTexts);
          console.groupEnd("QuantityTexts");
          createLoremUpsum(QuantityTexts);
        }}
      >
        <label>
          Paragraphs:
          <input
            className="input-lorem"
            type="number"
            name="number"
            min="0"
            max="8"
            required
            onChange={(e) => (QuantityTexts = parseInt(e.target.value))}
          />
        </label>
        <button type="submit" className="generate-lorem">
          generate
        </button>
      </form>
    </div>
  );
}

export default Counter;
