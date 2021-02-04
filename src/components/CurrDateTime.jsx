import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup} from 'react-bootstrap';

const CurrDateTime=()=>
{
const currDate = new Date().toDateString()
const currTime = new Date().toLocaleTimeString()
return(
    <div className="container">
    <div className="row dttime">
    
  
    <ListGroup as="ul"  variant="flush" className="mr-auto col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-2">
  <ListGroup.Item as="li" active>
  <h5 className=" mr-auto"> Date : {currDate} </h5>
  </ListGroup.Item>
</ListGroup>

<ListGroup as="ul"  variant="flush" className="ml-auto col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-2 ">
  <ListGroup.Item as="li" active>
<h5 className="ml-auto ">India Time : {currTime}</h5>
</ListGroup.Item>
</ListGroup>
</div>

</div>
);

}
export default CurrDateTime;