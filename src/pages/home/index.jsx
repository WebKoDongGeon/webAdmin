import { useEffect } from "react";
import { homeList } from "../api/home";

const Home = () => {
    useEffect(()=>{
        const resultData = homeList();
    })
    return (
        <>
        <div>
            ?
        </div>
        </>
    );
};

export default Home;