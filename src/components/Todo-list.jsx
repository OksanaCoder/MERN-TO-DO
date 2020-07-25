import React, { Component } from 'react'
import  {v1 as uuid} from 'uuid';
import { Container, Col, Row, ListGroup, Modal, Button } from 'react-bootstrap';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';




   export default class TodoList extends Component { 
    state = {
        show: false, 
        items : [
            // { id: uuid(), name: 'brush teeth'},
            // { id: uuid(), name: 'cook eggs'},
            // { id: uuid(), name: 'go to the gym'},
            // { id: uuid(), name: 'study math'}
        ]
    }
    componentDidMount = async () => {
       const response = await fetch('http://localhost:3000/api/items', {
           headers: {
              'Content-Type': 'application/json'
           }
       })
       const data = await response.json()
       this.setState({
           items: data
       })
     
      
    }
 
    removeItem = (id) => {
        this.setState({
            items: this.state.items.filter(item => item.id != id)
        })
    }
       
    handleShow = () => {
        this.setState({
            show: true
        })
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    fetchChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    saveChanges = async (e) =>{
        e.preventDefault()
        const newTodo = {
            name : this.state.name
        }
        const response = await fetch('http://localhost:3000/api/items', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body : JSON.stringify(newTodo)
        })
        this.setState({
            show: false
        })
       
        }
    render() {
  
          
        const { items } = this.state
        console.log(items)

        // const name = prompt('Enter task!')
        // if(name) {
        //     this.setState({
        //         items : [ ...this.state.items, { id: uuid(), name}]
        //     })
        // }
        return (
           <>
           <Container>
               <Row>
                   <Col>
            
                   <button className='mt-4 btn-add' style={{background: 'none', border: 'none'}} onClick={this.handleShow}>   <AddCircleIcon color="primary" /></button>      


                     <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add new task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input 
                          type='text'
                          name='name'
                          value={this.state.name}
                          style={{ width: '100%', border: '1px solid #c7c8ca'}}
                          onChange={this.fetchChange}

                        />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.saveChanges}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>            
                  </Col>
               </Row>
               <Row className='mt-4'>
                    <Col>
                    <ListGroup>
                        { this.state.items.map(item => {

                            return (
                                <>
                                
                                <ListGroup.Item>   <button className='btn-add' style={{background: 'none', border: 'none'}} onClick={() => this.removeItem(item.id)}> <DeleteForeverIcon  className='mr-3'/> </button> {item.name}</ListGroup.Item>
                                </>
                            )
                        })}
                 

                    </ListGroup>   
                    </Col>
               </Row>
            
           </Container>
           </>

        )
    }

}
