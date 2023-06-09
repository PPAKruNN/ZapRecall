/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import Flashcard from "./Flashcard";

const Container = styled.div`
    width: 300px;

    display: flex;
    flex-direction: column;

    gap: 25px;
`

export default function FlashcardsContainer({AppFCState: {flashCards, setFlashCards}, fcArr}) {

    return  (
        <Container>
            {fcArr.map( (fc, index) => {
                return (
                    <Flashcard AppFCState={{flashCards, setFlashCards}} key={index} id={index} data={fc}> </Flashcard>
                )
            })}

        </Container>
    )
}