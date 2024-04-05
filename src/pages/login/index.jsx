import { Button, Container, Form } from "react-bootstrap";
import { login } from "../../api/login";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { user } from "../../store/reducer/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [userId, setUserId] = useState();
    const [userPw, setUserPw] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginCheck = async() => {

        const formData = {
            username: userId,
            password: userPw,
        }

        const resultData = await login(formData);

        console.log("로그인 : ",resultData.data.split("&"));

        const data = resultData.data.split("&");

        let resultUsername = '';
        let resultPermission = '';
        let resultAccess = '';
        data.map((e, index)=>{
            console.log(e);
            console.log(index);
            if(index === 0) {
                resultAccess = e;
            } else if(index === 1) {
                resultUsername = e;
            } else {
                resultPermission = e;
            }
            
        })

        if(resultData.status === 200) {
            dispatch(user({
                userName: resultUsername
                , permission: resultPermission
                , accessToken: resultAccess
            }))

            navigate("/");
        }
    }


    return(
        <>
        <Container className="container">
            
            <Form style={{marginTop: "100px"}}>
                <Form.Control 
                    type="text" 
                    placeholder="아이디" 
                    value={userId || ""}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <Form.Control 
                    type="text" 
                    placeholder="비밀번호"
                    value={userPw || ""}
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