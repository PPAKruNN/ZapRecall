import { styled } from "styled-components"
import FButton from "./FlashButton"
import play from "../../public/assets/seta_play.png"
import virar from "../../public/assets/seta_virar.png"

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
    color: #333;
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
    width: 20px;
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

export default function Flashcard(){

    return (
        <>
            <Hid>
                <Title>Pergunta 1</Title>
                <PlayButton src={play} ></PlayButton>
            </Hid>  
            <Content>
                <ContentText>
                    Qual o nome do criador do React??
                </ContentText>
                <FlipButton src={virar}></FlipButton>
            </Content>

            <Content>
                <ContentText>
                    Markinho zoquerbergue
                </ContentText>
                <ButtonsBox>
                    <FButton mode="fail"></FButton>
                    <FButton mode="almost"></FButton>
                    <FButton mode="pass"></FButton>
                </ButtonsBox>
            </Content>
        </>
    )
}