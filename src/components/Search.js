import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from "react-bootstrap";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  search() {
    console.log("Movie: ", this.state.query);
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
