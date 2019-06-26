import React from "react";
import { connect } from "react-redux";
import { getData } from '../actions';

import { CharacterList } from "../components";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    characters: state.characters,
    fetching: state.fetching
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getData }
)(CharacterListView);
