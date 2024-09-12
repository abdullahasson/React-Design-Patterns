// usage
{/* 
const RightHand = () => {
  return <Right>Right</Right>
}

const LeftHand = () => {
  return <Left>Left</Left>
}

<SplitScreen 
    leftWeight={5}
    rightWeight={1}
>
    <LeftHand />
    <RightHand />
</SplitScreen> 
*/}

import styled from "styled-components";

const SplitScreen = ({
    children ,
    leftWeight = 1,
    rightWeight = 1,
}) => {

    const [ left , right ] = children

    return (
        <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane> 

            <Pane weight={rightWeight}>
                {right}
            </Pane> 
        </Container>
    )

}
export default SplitScreen

// styled components
const Container = styled.div`
    display: flex
`

const Pane = styled.div`
    flex: ${props => props.weight}
`