import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ResetButton({props}) {
  
  var currentValPush = props;  
  var [currentText, setCurrentValue] = useState(currentValPush.goals);
  var [currentDataRefTag, setCurrentTag] = useState(currentValPush.timeSlotSelected); 

function onClickRequest(e)  {
     
   

}    
    
  
return (
    <>
      <style type="text/css">
        {`
    .btn-reset {
      background-color: grey ;
      color: white;
    }

    .btn-xl{
      padding: 1rem 1.0rem;
      font-size: 0.9rem;
    }
    `}
      </style>

      <Button onClick={onClickRequest} variant="reset" size="xxl">
        Reset All
      </Button>
    </>
  );
}

export default ResetButton;