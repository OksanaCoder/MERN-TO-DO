import React, { Component } from 'react'
import  {v1 as uuid} from 'uuid';
import { Container, Col, Row, ListGroup } from 'react-bootstrap';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';




   export default class TodoList extends Component { 
    state = {
        items : [
            { id: uuid(), name: 'brush teeth'},
            { id: uuid(), name: 'cook eggs'},
            { id: uuid(), name: 'go to the gym'},
            { id: uuid(), name: 'study math'}
        ]
    }

    removeItem = (id) => {
        this.setState({
            items: this.state.items.filter(item => item.id != id)
        })
    }
       
    
    render() {
  
          
        const { items } = this.state
        console.log(items)
       
          
        return (
           <>
           <Container>
               <Row>
                   <Col>
            
                   <button className='mt-4 btn-add' style={{background: 'none', border: 'none'}} onClick={() => {
                       const name = prompt('Enter task!')
                       if(name) {
                           this.setState({
                               items : [ ...this.state.items, { id: uuid(), name}]
                           })
                       }
                   }}>   <AddCircleIcon color="primary" /></button>                  
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
