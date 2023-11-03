import "../../assets/scss/filter.scss";

export default function Filter() {
  return (
    <>
    <h3>Short By : </h3>
      <div className="filter-box">
        <button className="filter-button active" id="high">
          High
        </button>
        <button className="filter-button" id="medium">
          Medium
        </button>
        <button className="filter-button" id="low">
          Low
        </button>
      </div>
    </>
  );
}
