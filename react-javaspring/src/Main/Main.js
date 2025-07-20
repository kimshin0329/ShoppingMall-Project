import { useNavigate } from "react-router-dom";
import styled from "styled-components";



export default function Main(){

    const navigate = useNavigate();

    const Button = styled.button`background-color: blue;
    border: none;
    border-radius: 20px;
    height: 100px;
    width: 200px;
    text-align: center;
    font-size: 30px;
    color: black;
    cursor:pointer;
    &: active {
        opacity: 0.3;
    }
    `;
    
    return (
        <div className="Main">
            <header>
                <h1>메인페이지입니다.</h1>
                { " \u00A0"}{ " \u00A0"}<Button onClick={()=>{navigate("/Product");}}>판매</Button>
                { " \u00A0"}{ " \u00A0"}<Button onClick={()=>{navigate("/purchase");}}>구매</Button>
            </header>
        </div>
    )
}