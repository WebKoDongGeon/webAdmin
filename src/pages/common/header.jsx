import { useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = () => {
    const [user, setUser] = useState();


    return(
        <>
        
        <Navbar expand="lg" className="bg-body-tertiary" style={{overflowX: 'auto', whiteSpace: 'nowrap', width: '100%'}}>
        {/* <Navbar expand="lg" className="titleColor"> */}
            <Container>
                <Navbar.Brand href="#home" className='titleFontColor'>관리자</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">홈</Nav.Link>
                    <Nav.Link href="/board">공지사항</Nav.Link>
                    <Nav.Link href="/event">이벤트</Nav.Link>
                    <Nav.Link href="/memberInfo">회원관리</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            
            </Container>
            <Navbar.Collapse className="justify-content-end" style={{marginRight: '22px'}}>
                {user && 
                    <Navbar.Text>
                        <Link to="/logout">{user}</Link>
                    </Navbar.Text>
                }
                {!user &&
                    <Navbar.Text>
                        <Link to="/join" className='link'>회원가입</Link>
                        &nbsp;&nbsp;
                        <Link to="/login" className='link'>로그인</Link>
                    </Navbar.Text>
                }
            </Navbar.Collapse>   
        </Navbar>
        
        </>
    );
};

export default Header;