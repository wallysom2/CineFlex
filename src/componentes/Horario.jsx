import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios"


function Horario(){
    const {filmeID} = useParams()
    const [time, setTime] = useState([])
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeID}/showtimes`)

        promise.then(times => {
            setTime(times.data.days)   
        })
    }, [])

    return (
        <Div>
            <h2>Selecione o horário</h2>
            {time.map(movieTime =>{ const {showtimes: showTimes} = movieTime 
                return( <div><p>{movieTime.weekday} - {movieTime.date}</p> 
                <div>{showTimes.map(hour =>  <p>{hour.name}</p>)}</div>
                </div>)})}
        </Div>
    )
        
}

export default Horario

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: space-between;

    & h2{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 24px;
    font-family: Roboto;
    }
    & div {
    margin-left: 24px;
    height: 50%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }
    & div p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #293845;
    }
    & div div {
    width: 50%;
    display: flex;
    flex-direction: row;
    background-color: red;
}


`