import "./Title.css";

function Title() {
  return (
    <div className="title">
      <h1>Historical population of Ireland from 1961 to 2022</h1>
      <h2>
        Source:{" "}
        <a
          href="https://en.wikipedia.org/wiki/Historical_population_of_Ireland"
          target="blank"
        >
          Wikipedia
        </a>
      </h2>
    </div>
  );
}
export default Title;
