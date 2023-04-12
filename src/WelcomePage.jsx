import { Container , Nav } from "react-bootstrap";


function FancyBorder(props) {
  return (
        <div className={'FancyBorder FancyBorder-' + props.color}>

     <Container style={{
          backgroundColor: 'lightblue'
        }}>
       {props.children}
    </Container>
   </div>
  );
}

export function Dialog(props) {
  return (

    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}


function WelcomeDialog() {
  return (
    <Dialog
      title="TeacherCom"
      message="Language Learning Platform using AI" />
  );
}

export function CurrentDialog()
{ 
  return (
   <div>
    <Dialog
      message="Powered by Blue Machines Inc " />
 
   </div>

      
  );
}




export default WelcomeDialog;