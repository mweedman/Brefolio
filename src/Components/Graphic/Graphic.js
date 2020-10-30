import React from 'react';
import './Graphic.css'

class Graphic extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <img src={this.props.image} />
      </div>
    )
  }

}

export default Graphic;