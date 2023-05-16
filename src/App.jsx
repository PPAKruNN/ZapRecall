import { styled } from "styled-components"
import BottomBar from "./Components/BottomBar"
import FlashcardsContainer from "./Components/FlashcardsContainer"
import Logo from "./Components/Logo"

const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

const StyledApp = styled.div`
  width: 100vw;
  padding-top: 40px;
  padding-bottom: 170px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 25px;

  background-color: #FB6B6B;
`

function App() {

  return (
    <StyledApp>
      <Logo></Logo>
      <FlashcardsContainer fcArr={cards}></FlashcardsContainer>
      <BottomBar finishedCount={1} length={2} flashcardsModes={["pass", "almost"]}></BottomBar>
    </StyledApp>
  )
}

export default App
