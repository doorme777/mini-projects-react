function ToursGrid({ children }) {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 row-auto">
      {children}
    </section>
  );
}

export default ToursGrid;
