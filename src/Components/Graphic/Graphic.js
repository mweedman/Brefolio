import React from 'react';
import ContentContext from '../../Contexts/ContentContext';
import './Graphic.css'

class Graphic extends React.Component {
  constructor(props){
    super(props)
    this.state ={

    }
  }

  static contextType = ContentContext;

  sendImage = async () => {
    console.log('Props: ', this.props);
    await this.context.openImage(this.props.image, this.props.description, this.props.alt, this.props.title);
    this.context.openModal();
  }

  render(){
    return(
      <div onClick={this.sendImage}>
        <img src={this.props.image} alt={this.props.alt} />
      </div>
    )
  }

}

export default Graphic;