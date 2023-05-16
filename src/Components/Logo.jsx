import { styled } from "styled-components"
import imagesrc from "../assets/logo.png"

const LogoImg = styled.img`
    width: 52px;
    height: 60px;
`

const LogoTitle = styled.h1`
    font-family: 'Righteous';
    font-weight: 400;
    font-size: 36px;
    color: #FFF;
`

const Container = styled.div`
    display: flex;
    gap: 15px;
    width: 300px;
    gap: 25px;
    align-items: center;
    justify-content: center;
`

export default function Logo() {
    return (
        <Container>
            <LogoImg src={imagesrc} alt="ZapRecall Logo"/>
            <LogoTitle>ZapRecall</LogoTitle>
        </Container>
    )
}