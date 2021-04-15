import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from "react-bootstrap";
import { API_KEY } from "../secrets";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  search() {
    console.log("Movie: ", this.state.query);
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${this.state.query}`;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  }

  render() {
    return (
      <>
        <Form inline>
          <FormGroup>
            <ControlLabel></ControlLabel>{" "}
            <FormControl
              type="text"
              placeholder="What movie r u searching 4?"
              onChange={(event) => this.setState({ query: event.target.value })}
            ></FormControl>{" "}
            <Button bsStyle="info" onClick={() => this.search()}>
              Search
            </Button>
          </FormGroup>
        </Form>
      </>
    );
  }
}

export default Search;
