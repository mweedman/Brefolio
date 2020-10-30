import React from 'react';
import Images from '../Components/Images/Images'

const ContentContext = React.createContext({
  show: true,
  imageData: [],
  closeModal: () => {},
  openAboutMe: () => {}
})

export default ContentContext

export class ContentProvider extends React.Component {
  constructor(props) {
    super(props)
    
    this.state ={
      show: true,
      imageData: Images,
      closeModal: () => {},
      openAboutMe: () => {}
    }
  }

  closeModal = () => {
    if (this.state.show === true) {
      this.setState({ show: false })
    }
  }

  openAboutMe = () => {
    this.setState({ show: true })
  }

  render(){

    const content = {
      show: this.state.show,
      imageData: this.state.imageData,
      closeModal: this.closeModal,
      openAboutMe: this.openAboutMe
    }

    return(
      <ContentContext.Provider value={content}>
        {this.props.children}
      </ContentContext.Provider>
    )
  }
}
