import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import puLogo from "../../image/pu-logo.png";
import './Header.css'

function Header() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="primary" sticky="top" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <img style={{ width: "7%" }} src={puLogo} alt="" /> <span>Presidency
                University</span>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img style={{ width: "7%" }} src={puLogo} alt="" /> Presidency
                  University
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                  <hr className="p-0 m-0" />

                  <Nav.Link as={Link} to="/">
                    Dashboard
                  </Nav.Link>

                  <hr className="p-0 m-0" />

                  <NavDropdown
                    title="Add Items"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={Link} to="/addBook">
                      Add Book
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/addThesis">
                      Add Thesis
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/addJournal">
                      Add Journal
                    </NavDropdown.Item>
                  </NavDropdown>

                  <hr className="p-0 m-0" />

                  <NavDropdown
                    title="View Items"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={Link} to="/viewBooks">
                      View Book
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/viewTheses">
                      View Thesis
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/viewJournals">
                      View Journals
                    </NavDropdown.Item>
                  </NavDropdown>

                  <hr className="p-0 m-0" />

                  <NavDropdown
                    title="ITEM ISSUE"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={Link} to="/issueBook">
                      Book Issue
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/issueThesis">
                      Thesis Issue
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/issueJournal">
                      Journal Issue
                    </NavDropdown.Item>
                  </NavDropdown>

                  <hr className="p-0 m-0" />

                  <NavDropdown
                    title="MEMBERS"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={Link} to="/adminList">
                      Admin List
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/userList">
                      User List
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/addNewAdmin">
                      Add New Admin
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/addNewUser">
                      Add New User
                    </NavDropdown.Item>
                  </NavDropdown>

                  <hr className="p-0 m-0" />

                  <Nav.Link as={Link} to="/issueRequest">
                    ISSUE REQUEST
                  </Nav.Link>

                  <hr className="p-0 m-0" />

                  <Nav.Link as={Link} to="/newMemberRequest">
                    NEW MEMBER REQUEST
                  </Nav.Link>

                  <hr className="p-0 m-0" />

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;

// import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import puLogo from "../../image/pu-logo.png";

// const Header = () => {
//   return (
//     <Navbar bg="primary" variant="dark">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           <img style={{width: '7%'}} src={puLogo} alt="" /> Presidency University
//         </Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
//           <Nav.Link as={Link} to="/catalogs">Catalogs</Nav.Link>
//           <Nav.Link as={Link} to="/members">Members</Nav.Link>
//         </Nav>
//         <Nav>

//         </Nav>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;
