import React from 'react';
import Graphic from '../Graphic/Graphic';
import Images from '../Images/Images'

class Graphics extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      images: Images
    }
  }

  render(){

    return(
      <div className="graphicsViewport">
        <ul>
          {this.state.images.map((image, index) => {
            return(
              <li key={index} className="graphicsContainer">
                <Graphic id={image.id} image={image.src} title={image.title} description={image.description}/>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Graphics