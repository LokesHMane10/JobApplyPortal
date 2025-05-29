import "./SearchBar.css";

const SearchBar = () => {
  return (
    <>
      <div className="div-1">Looking for your Dream Job?</div>
      <div className="div-2">Over 8000+ Openings</div>
      <div className="main-job-search-container">
        <div className="search-bar-text">
          <div className="job-search-container">
            <i class="fas fa-search" style={{ color: "#112e5f" }}></i>
            <input
              type="text"
              placeholder="Search by skills, job role, Company "
              className="search-input"
            />

            <select className="dropdown">
              <option value="">Select Location</option>
              <option value="New York">New York</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
            </select>
            <select className="dropdown">
              <option value="">Experience</option>
              <option value="0">Fresher</option>
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3+">3+ Years</option>
            </select>
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
