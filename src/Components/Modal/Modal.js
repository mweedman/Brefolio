import React from 'react';
import ContentContext from '../../Contexts/ContentContext';
import './Modal.css';

class Modal extends React.Component {
  
  static contextType = ContentContext;

  render(){
    console.log('Modal content: ', this.context);
    return(
      <div className="modalContainer">
        <button onClick={this.context.closeModal}>X</button>
        <h1>{this.context.imageTitle}</h1>
        <p>{this.context.imageDesc}</p>
        <img src={this.context.imageSrc} alt={this.context.imageAlt}/>
      </div>
    )
  }
}

export default Modal;