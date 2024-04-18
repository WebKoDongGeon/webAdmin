import { Col, Container, Form, Row, Table, InputGroup } from "react-bootstrap";
import '../notice/index.css';
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { current } from "@reduxjs/toolkit";
import { findNoticeList } from "../../api/notice";
const Notice = () => {
    const day = dayjs();
    const [findDateY, setFindDateY] = useState(Array.from({length: 6}, (_, index) => day.year() - index));
    const [findDateM, setFindDateM] = useState(Array.from({length: 12}, (_, index) => index + 1));
    const [findProject, setFindProject] = useState(["전체"]);



    const handleChange = () => {

    }

    const dataSet = async() => {

        const resultData = await findNoticeList();

        if(resultData.status === 200){
            console.log(resultData.data);
        }

    }


    useEffect(()=>{
        //초기 데이터 셋팅
        // dataSet();
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
                                    {findDateY.map((e)=>{
                                        return (
                                            <option value={e}>{e}년</option>
                                        )
                                    })}
                                </Form.Select>
                            </th>
                            <th>
                                <Form.Select aria-label="Default select example" inlist >
                                    {findDateM.map((e)=>{
                                        return (
                                            <option value={e}>{e}월</option>
                                        )
                                    })}
                                </Form.Select>
                            </th>
                        </tr>
                        <tr>
                            <th>작성자 검색</th>
                            <th key={"inline-radio"} colSpan={2}>
                                <Form.Control type="text" placeholder="ex) 김상수" />
                            </th>
                        </tr>
                        <tr>
                            <th>적용 프로젝트 검색</th>
                            <th key={"inline-radio"} colSpan={2}>
                                <Form.Select aria-label="Default select example" inlist >
                                    {findProject.length > 0 ? findProject.map((e)=>{
                                        return (
                                            <option value={e}>{e}</option>
                                        )
                                    }) : <option value={""}>프로젝트 없음</option>}
                                    
                                </Form.Select>
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