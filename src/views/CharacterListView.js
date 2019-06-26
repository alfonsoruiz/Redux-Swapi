import React from "react";
import { connect } from "react-redux";
import { getData } from '../actions';

import { CharacterList } from "../components";

class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    if (this.props.fetching) {
      return (
        <p>Data is being retrieved</p>
      );
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
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getData }
)(CharacterListView);
