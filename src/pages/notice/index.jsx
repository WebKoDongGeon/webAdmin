import { Col, Container, Form, Row, Table, InputGroup } from "react-bootstrap";
import '../notice/index.css';
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { current } from "@reduxjs/toolkit";
const Notice = () => {
    const day = dayjs();
    const [findDate, setFindDate] = useState(Array.from({length: 6}, (_, index) => day.year() - index));

    const handleChange = () => {

    }


    useEffect(()=>{
        console.log(findDate);
    },[])

    return (
        <>
            <Container style={{marginTop: "20px"}}>
            <   Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>노출여부</th>
                            <th key={"inline-radio"} colSpan={2}>
                                <Form.Check
                                    type="radio" 
                                    label="Y" 
                                    name="group1" 
                                    inline
                                />
                                <Form.Check 
                                    type="radio"
                                    label="N" 
                                    name="group1" 
                                    inline
                                />
                            </th>

                        </tr>
                        <tr>
                            <th>년,월 지정</th>
                            <th>
                                <Form.Select aria-label="Default select example" inlist >
                                    {findDate.map((e)=>{
                                        return (
                                            <option value={e}>{e}</option>
                                        )
                                    })}
                                </Form.Select>
                            </th>
                            <th>
                                <Form.Select aria-label="Default select example" inlist >
                                    {findDate.map((e)=>{
                                        return (
                                            <option value={e}>{e}</option>
                                        )
                                    })}
                                </Form.Select>
                            </th>
                        </tr>
                        <tr>
                            <th>작성자 검색</th>
                            <th key={"inline-radio"} colSpan={2}>
                                <Form.Check 
                                    type="radio" 
                                    label="Y" 
                                    name="group1" 
                                    inline
                                />
                                <Form.Check 
                                    type="radio"
                                    label="N" 
                                    name="group1" 
                                    inline
                                />
                            </th>
                        </tr>
                        <tr>
                            <th>적용 프로젝트 검색</th>
                            <th key={"inline-radio"} colSpan={2}>
                                <Form.Check 
                                    type="radio" 
                                    label="Y" 
                                    name="group1" 
                                    inline
                                />
                                <Form.Check 
                                    type="radio"
                                    label="N" 
                                    name="group1" 
                                    inline
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            
            <Container style={{marginTop: "10px"}}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>노출기간</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
};


export default Notice;