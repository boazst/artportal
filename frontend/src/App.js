import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
    var searchUrl = `http://localhost:3000/pics/all`;
    fetch(searchUrl)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.pictures1 = [...jsonData];
        this.setState({ pictures: this.pictures1 });
        console.log(this.pictures1);
      });
  }
  render() {
    return (
      <div>
        {this.state.pictures.map((pic, index) => (
          <div className="card" key={index}>
            <div>
              <img src={pic.pic_path} alt={pic.subject} />
            </div>
            <div>
              <p>{pic.subject}</p>
              <p>size {pic.size}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

//ReactDOM.render(<App />, document.getElementById("container"));

export default App;
