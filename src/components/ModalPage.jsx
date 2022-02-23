import React, { Component } from 'react'
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap'

class ModalPage extends Component {
    constructor(){
        super()
        this.state ={
            actors: [],
            modalIsOpen:true
        }
    }

    handlerToggle(){
        this.setState({modalIsOpen:!this.state.modalIsOpen})
        this.props.handalModal(!this.state.modalIsOpen)
        
    }
  render() {
      const {popularity}=this.props.dataActor[0]
    const {dataActor, profile_path,known_for,id, } = this.props.dataActor[0]
     const {modalIsOpen} = this.state
     const { name } = this.props.dataActor[0]
     console.log(known_for)     
    return (
      <Modal isOpen={modalIsOpen} toggle={()=> this.handlerToggle()}>
          <ModalHeader>{name}</ModalHeader>
          <ModalBody>
              
              <div class="body">
                <figure>
                    <img 
                      src={"https://image.tmdb.org/t/p/w500/"
                      + known_for[0].poster_path  }
                      className="image-actor"
                    />
                    <p>{popularity}</p>
                </figure>
                  </div>
          </ModalBody>
          <ModalFooter> this is my Footer</ModalFooter>
      </Modal>
    )
  }
}
export default ModalPage