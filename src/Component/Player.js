// import { players } from "../players";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl}) => {
   return (

   <Card style={{ width: '18rem', backgroundColor:'silver',paddingTop:'1rem', marginBottom: '30px'}}>
      <Card.Img variant="top" src={imageUrl} style={{margin: 'auto',display: 'block',width:'11rem', height:'11rem', borderRadius:'50%', backgroundColor:'#A99E1C'}} alt={name} />
         <Card.Body>
            <Card.Title  style={{ fontSize: '26px', fontWeight: 'bold', textAlign: 'center' }} >{name}</Card.Title>
               <Card.Text>
                  <strong style={{ textAlign: 'center'}}>Team: <span style= {{fontSize: '18px', fontWeight: 'lighter'}}>{team}</span> </strong> 
                  <br />

                  <strong style={{ textAlign: 'center'}}>Nationality:</strong> {nationality} 
                  <br />  
                  
                  <strong style={{ textAlign: 'center'}}>Jersey Number:</strong> {jerseyNumber} 
                  <br />

                  <strong style={{ textAlign: 'center'}}>Age:</strong> {age} 
                  <br />
               </Card.Text>
         {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
   </Card>
 );

 Player.defaultProps = {
   name: 'Unknown',
   team: 'Unknown',
   nationality: 'Unknown',
   jerseyNumber: '0',
   age: '0',
   imageUrl: 'data:image/jpeg;base64,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',
 };
} 
 
export default Player;