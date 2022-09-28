import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group my-4">
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  className="form-control"
                  placeholder="search anythings here!!"
                  value={this.state.term}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="col-2">
                <button type="submit">Search</button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default SearchBar;
