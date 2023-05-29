import Dropdown from 'react-bootstrap/Dropdown';

function LanguageSel() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>


      <Dropdown.Menu>
      {menuItems.map( function(row,index)  {
             
             return (            

        <Dropdown.Item key={}>{}</Dropdown.Item>
      )})}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSel;