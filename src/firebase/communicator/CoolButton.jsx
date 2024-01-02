import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function CoolButton({props}) {
  
  var currentValPush = props;  
  var [currentText, setCurrentValue] = useState(currentValPush.goals);
  var [currentDataRefTag, setCurrentTag] = useState(currentValPush.timeSlotSelected); 

function onClickRequest(e)  {
     
   

}    
    
  
return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: green;
      color: white;
    }

    .btn-xl {
      padding: 1rem 1.5rem;
      font-size: 0.9rem;
    }
    `}
      </style>

      <Button onClick={onClickRequest} variant="flat" size="xxl">
        Request for Demo
      </Button>
    </>
  );
}

export default CoolButton;