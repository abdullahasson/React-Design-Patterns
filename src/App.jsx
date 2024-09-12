import styled from "styled-components"


function App() {
  return (
    <h1>app</h1>
  )
}

export default App

const GreenButton = styled.button`
  padding: 10px;
  border-radius: 8px;
  background-color: green;
  cursor: pointer;
  color: white;
  border: 1px solid yellow;
  transition: 0.4s;

  &:hover {
    background-color: aliceblue;
    color: #666;
  }
`

const Box = styled.div`
  background-color: #333;
  padding: 20px;
  text-align: center;
`

const Right = styled(Box)`
  background-color: red;
` 
const Left = styled(Box)`
  background-color: blue;
` 