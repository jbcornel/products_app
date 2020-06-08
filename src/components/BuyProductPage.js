import React, { Component } from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
export class EditDepartmentModel extends Component {
    constructor(props){
        super(props);
        this.state = {snackbaropen: false, snackbarmessage: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    snackbarClose = (event) => {
        this.setState({snackbaropen: false});
    }
    handleSubmit(event){
        event.preventDefault();
        
        
            this.setState({snackbaropen: true, snackbarmessage: "item purchased"})
        
         
         
     }
    
    
     render(){
         return (
         <div className='container'>
         <Snackbar
         anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} open={this.state.snackbaropen} autoHideDuration={500} onClose={this.snackbarClose}
         message={<span id="message-id">{this.state.snackbarmessage}</span>}
         action={[
         <IconButton key="close" arial-label="Close" color="inherit" onClick={this.snackbarClose}>x</IconButton>]}/>
 
         <Modal
       {...this.props}
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered
     >
       <Modal.Header closeButton>
         <Modal.Title id="contained-modal-title-vcenter">
             Item page
         </Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <div className="container">
         <img src={this.props.productlink} height='200' width='200'/>

         </div>
             
       </Modal.Body>
       <Modal.Footer>
         <Button variant="danger" onClick={this.props.onHide}>Close</Button>
       </Modal.Footer>
     </Modal>
     </div>
     );
     }
 }
 
 export default EditDepartmentModel
 