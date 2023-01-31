


import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {useParams} from 'react-router-dom';



function TeacherContentDisplay(props) {
  let { helm } = useParams();
  console.log(helm);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Documents</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://firebasestorage.googleapis.com/v0/b/teachercomdb.appspot.com/o/Documents%2FReport%20Analysis%20Algorithms%20.docx?alt=media&token=06c70225-87a1-493b-bad8-eba52dcb50d7">Lecture001.docx </Nav.Link>
            <Nav.Link href="https://firebasestorage.googleapis.com/v0/b/teachercomdb.appspot.com/o/Documents%2FStatement%20of%20Purpose.pdf?alt=media&token=dec4a462-c5a8-44cf-ae0a-c428447f9381">Lecture002.dox</Nav.Link>
            <Nav.Link href="#pricing">Lecture003.docx</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Videos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Basic Chinese</Nav.Link>
            <Nav.Link href="#features">Intermediate Chinese</Nav.Link>
            <Nav.Link href="#pricing">Advanced Chinese</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Evaluate Your Skills</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Level 1 Evaluate</Nav.Link>
            <Nav.Link href="#features">Level 1.1 Evaluate</Nav.Link>
            <Nav.Link href="#pricing">Level 1.2 Evaluate</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default TeacherContentDisplay;