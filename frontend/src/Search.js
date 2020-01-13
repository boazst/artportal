import "./Search.css";
import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    searchValue: "",
    courses: []
  };
  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = searchInput => {
    // var searchUrl = `http://localhost:3000/pics/one/1`;
    // fetch(searchUrl)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(jsonData => {
    //     this.courses = [...jsonData];
    //     this.setState({ courses: this.courses });
    //     console.log(this.courses);
    //   });

    try {
      const response = axios.get(`http://localhost:3000/pics/all`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.makeApiCall(this.state.searchValue);
    }
  };
  render() {
    return (
      <div>
        <h1>Course search </h1>
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={event => this.handleOnChange(event)}
          onKeyDown={this.handleKeyDown}
          value={this.state.searchValue}
        />
        <button onClick={this.handleSearch}>Search</button>
        {this.state.courses ? (
          <div className="cards-container">
            {this.state.courses.map((course, index) => (
              <div className="card" key={index}>
                <div className="image-container">
                  <img src={course.logoUrl} alt={course.name} />
                </div>
                <div className="details-container">
                  <p>{course.name}</p>
                  <p>time {course.resourceTime}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Try searching for a course</p>
        )}
      </div>
    );
  }
}
export default Search;
