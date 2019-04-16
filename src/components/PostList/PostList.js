import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getMapDetails} from '../../actions/mapAction';
import 'semantic-ui-react';


class PostList extends Component {
  
  componentDidMount(){
    this.props.getMapDetails();
  }
  
  renderList(){
    console.log(this.props.mapInfo)
   
      this.props.mapInfo.map((post)=>{
        return (
          <div>
                <h2>{post.type}</h2>

            </div>
        );
      })
    
    

    
  }


  render() {
   
    return (
      <React.Fragment>
        <div className="post-action">
        <div className = "ui relaxed divided list">
            {this.props.mapInfo.length !== undefined &&
              this.props.mapInfo.map((post)=>{
        return (
            <div>
                <h2>{post.location.coordinates}</h2>
            </div>
        );
      })
              
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps,{getMapDetails})(PostList);