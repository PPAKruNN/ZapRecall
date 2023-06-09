/* eslint-disable react/prop-types */
import { css, styled } from "styled-components"
import FButton from "./FlashButton"
import play from "../assets/seta_play.png"
import virar from "../assets/seta_virar.png"
import pass from "../assets/icone_certo.png"
import almost from "../assets/icone_quase.png"
import fail from "../assets/icone_erro.png"
import { useState } from "react"

const Hid = styled.div`
    width: 300px;
    height: 65px;
    box-shadow: 0px 4px 5px 0px black;
    background-color: #FFFFFF;
    border-radius: 5px;

    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0px 15px;
`

const Title = styled.h1`
    font-family: "recursive", sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-decoration: line-through;
    ${ (info) => {
        const mode = info.$mode
        switch(mode)
        {
            case "pass":
                return css`
                    color: #2BFE34;
                ` 
            case "almost":
                return css`
                    color: #FF922E;
                ` 
            case "fail":
                return css`
                    color: #FF3030;
                ` 
            default:
                return css`
                    color: #333;
                    text-decoration: none;
                `
        }
    }}
`
const Content = styled.div`
    width: 300px;
    min-height: 65px;
    max-height: max-content;

    position: relative;

    box-shadow: 0px 4px 5px 0px black;
    background-color: #FFFFD4;
    border-radius: 5px;

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 10px 15px;
    gap: 15px;
`


const ContentText = styled.p`
    font-family: "recursive", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #333;
    line-height: 22px;
`

const PlayButton = styled.img`
    width: 23px;
    height: 23px;
`

const FlipButton = styled.img`
    width: 30px;
    height: 20px;
    position: absolute;
    bottom: 5px;
    right: 15px;
`

const ButtonsBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
    height: 37px;
    box-sizing: border-box;
`

const icons = {
    play,
    pass,
    almost,
    fail
}

const iconsDatatests = {
    play: "play-btn",
    pass: "zap-icon",
    almost: "partial-icon",
    fail: "no-icon",
}

// eslint-disable-next-line react/prop-types
export default function Flashcard({id, AppFCState: {flashCards, setFlashCards}, data: {question, answer}}){

    const [state, setState] = useState("base");
    //  base
    //  question
    //  answer
    const [mode, setMode] = useState("play")
    //  play
    //  pass
    //  almost
    //  fail

    function changeMode(_mode) {
        setMode(_mode);
        setState("base");
        updateAppState(_mode, "base", id);
    }

    function changeState(str) {
        if(mode != "play") return;
        setState(str);
        updateAppState(mode, str);
    }

    function updateAppState(_mode, _state, indexToAddToFila = undefined) {
        const obj = {...flashCards.fc}
        obj[id] = {_mode, _state}

        if(indexToAddToFila != undefined)
        {
            const arr = [...flashCards.fila];
            arr.push(indexToAddToFila);
            return setFlashCards({fc: obj, fila: arr});
        }

        setFlashCards({fc: obj, fila: flashCards.fila});
    }

    function evaluateState() {
        if(flashCards.fc[id] === undefined)
        {
            updateAppState(mode, state);
        }

        if(state == "base")
        {
            return (
                <Hid data-test="flashcard">
                    <Title data-test="flashcard-text" $mode={mode}>Pergunta {id + 1}</Title>
                    <PlayButton data-test={iconsDatatests[mode]} onClick={() => changeState("question")} src={icons[mode]}></PlayButton>
                </Hid>  
            )
        }

        if(state == "question") 
        {
            return (
                <Content data-test="flashcard" >
                    <ContentText data-test="flashcard-text">
                        {question}
                    </ContentText>
                    <FlipButton data-test="turn-btn" onClick={() => changeState("answer")} src={virar}></FlipButton>
                </Content>
            )
        }

        if(state == "answer")
        {
            return (
                <Content data-test="flashcard" >
                    <ContentText data-test="flashcard-text" >
                        {answer}
                    </ContentText>
                    <ButtonsBox>
                        <FButton onClick={() => changeMode("fail")} mode="fail"></FButton>
                        <FButton onClick={() => changeMode("almost")} mode="almost"></FButton>
                        <FButton onClick={() => changeMode("pass")} mode="pass"></FButton>
                    </ButtonsBox>
                </Content>
            )
        }
    }

    return (
        <>
            {evaluateState()}
            
        </>
    )
}