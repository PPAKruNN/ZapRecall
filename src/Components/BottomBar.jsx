/* eslint-disable react/prop-types */
import { styled } from "styled-components"

import pass from "../assets/icone_certo.png"
import almost from "../assets/icone_quase.png"
import fail from "../assets/icone_erro.png"

const StyledBottomBar = styled.div`
    width: 100%;
    height: 120px;
    background-color: #FFF;
    border: 1px solid black;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    position: fixed;
    bottom: 0px;
    left: 0px;
`

const Text = styled.p`
    font-family: "recursive", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #333;
`

const Title = styled.p`
    font-family: "recursive", sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #333;
`

const FcModeIcon = styled.img`
    width: 23px;
    height: 23px;
    margin: 0px 2px;
`

const modes = {
    pass,
    almost,
    fail
}




export default function BottomBar({length, finishedCount, flashcardsModes}){

    function finishMessage() {
        if(!(length === finishedCount)) return;
        const isAnyFailed = flashcardsModes.some( curr => curr === "fail");
        if(isAnyFailed) {
            return (
                <>
                    <Title> Putz...</Title>
                    <Text>Ainda faltam alguns... Mas não desanime!</Text>
                </>
            )
            
        }
        else {
            return (
                <> 
                    <Title> Parabéns!</Title>
                    <Text>Você não esqueceu de nenhum flashcard!</Text> 
                </>
            )
        }
        
    }

    return(
        <StyledBottomBar>
            {finishMessage()}

            <Text>{finishedCount + "/" + length + " CONCLUÍDOS"}</Text>

            <div>  
                {flashcardsModes.filter(currfc => modes[currfc] != undefined).map( (currfc, index) => {
                    return (
                        <FcModeIcon key={index} src={modes[currfc]}></FcModeIcon>
                    )
                })}
            </div>
        </StyledBottomBar>
    )
}