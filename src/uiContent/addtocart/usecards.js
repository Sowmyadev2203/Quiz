import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Addcount from './addcounter';

function UseCards(props){
    return(
        <>
         <Card style={{ width: '18rem', }}>
      <Card.Img variant="top" src={props.data.image} style={{height:"150px"}}/>
      <Card.Title>{props.data.Title}</Card.Title>
      <Card.Body style={{ height: "150px", overflowY: "scroll" }}>
        
        <Card.Text>
          {props.data.description}
        </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted"> <Button variant="">{<Addcount/>} </Button></Card.Footer>
      
    </Card>
        </>

    )
}
export default UseCards;