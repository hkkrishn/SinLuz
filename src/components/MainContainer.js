import React, { Component } from "react";
import Map from "./Map";
import { connect } from "react-redux";
import { getMapDetails } from "../actions";
import Navigation from "./Navigation/Navigation";
import PanelAction from "./Panel/PanelAction";
import PostList from './PostList/PostList';
import {BrowserRouter,Route  } from 'react-router-dom';

class MainContent extends Component {
  componentDidMount() {
      this.props.getMapDetails();
  }
  render() {
      
    return (
    <BrowserRouter>

      <div className="main-content">
        <Navigation />
        <PanelAction />
        <Map mapInfo={this.props.mapInfo}/>
        <PostList mapInfo={this.props.mapInfo} />
/>
       
      </div>
    </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('yo')
  console.log(state)
  console.log('yo')
  return state;
};

export default connect(
  mapStateToProps,
  { getMapDetails }
)(MainContent);
