import React from 'react';
import Images from '../Components/Images/Images'

const ContentContext = React.createContext({
  show: false,
  imageData: [],
  imageSrc: '',
  imageDesc: '',
  imageAlt: '',
  imageTitle: '',
  closeModal: () => {},
  openAboutMe: () => {},
  openImage: () => {}
})

export default ContentContext

export class ContentProvider extends React.Component {
  constructor(props) {
    super(props)
    
    this.state ={
      show: false,
      imageData: Images,
      imageSrc: '',
      imageDesc: '',
      imageAlt: '',
      imageTitle: '',
      closeModal: () => {},
      openModal: () => {},
      openImage: () => {}
    }
  }

  closeModal = () => {
    if (this.state.show === true) {
      this.setState({ show: false })
    }
  }

  openModal = () => {
    this.setState({ 
      show: true,
      imageData: this.state.imageData,
      imageSrc: this.state.imageSrc,
      imageDesc: this.state.imageDesc,
      imageAlt: this.state.imageAlt,
      imageTitle: this.state.imageTitle 
    })
  }

  openImage = async (src,desc,alt,title) => {
    console.log('Image import data: ', src, desc, alt, title);
    await this.setState({
      imageSrc: src,
      imageDesc: desc,
      imageAlt: alt,
      imageTitle: title
    });
  }

  render(){

    const content = {
      show: this.state.show,
      imageData: this.state.imageData,
      imageSrc: this.state.imageSrc,
      imageDesc: this.state.imageDesc,
      imageAlt: this.state.imageAlt,
      imageTitle: this.state.imageTitle,
      closeModal: this.closeModal,
      openModal: this.openModal,
      openImage: this.openImage
    }

    return(
      <ContentContext.Provider value={content}>
        {this.props.children}
      </ContentContext.Provider>
    )
  }
}
