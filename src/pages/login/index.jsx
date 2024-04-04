import { Button, Container, Form } from "react-bootstrap";
import { login } from "../api/login";
import { useState } from "react";

const Login = () => {
    const [userId, setUserId] = useState();
    const [userPw, setUserPw] = useState();

    const loginCheck = async() => {

        const formData = {
            username: userId,
            password: userPw,
        }

        const resultData = await login(formData);

        if(resultData.status === 200) {
            
        }
    }


    return(
        <>
        <Container className="container">
            
            <Form style={{marginTop: "100px"}}>
                <Form.Control 
                    type="text" 
                    placeholder="아이디" 
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <Form.Control 
                    type="text" 
                    placeholder="비밀번호"
                    value={userPw}
                    onChange={(e) => setUserPw(e.target.value)}
                />
                <Button
                    style={{marginTop: "10px"}}
                    variant="outline-primary"
                    onClick={loginCheck}
                >로그인</Button> 
            </Form>
            
        </Container>
        </>
    );
};

export default Login;