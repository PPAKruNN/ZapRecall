/* eslint-disable react/prop-types */
import { css, styled } from "styled-components"

const Text = styled.p`
    font-family: "recursive", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: #FFFFFF;
`

const StyledButton = styled.button`
    width: 33%;
    height: 100%;
    padding: 3px;
    border: none;
    border-radius: 5px;

    ${ (info) => {
        const mode = info.$mode
        switch(mode)
        {
            case "pass":
                return css`
                    background-color: #2BFE34;
                ` 
            case "almost":
                return css`
                    background-color: #FF922E;
                ` 
            case "fail":
                return css`
                    background-color: #FF3030;
                ` 
            default:
                return css`
                    background-color: black;
                `
        }
    }}
`

const messages = {
    "fail": "Não lembrei",
    "almost": "Quase não lembrei",
    "pass": "Zap!"
}

export default function FButton({mode, onClick}) {
    return (
        <StyledButton onClick={onClick} $mode={mode}>
            <Text>{messages[mode]}</Text>
        </StyledButton>
    )
}