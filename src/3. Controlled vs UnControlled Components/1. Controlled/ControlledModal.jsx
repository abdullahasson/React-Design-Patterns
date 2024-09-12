// styled components
import styled from "styled-components"


const ControlledModal = ({
    shouldShow ,
    onClose ,
    children 
}) => {

    return (
        <>
            {shouldShow && (
                <ModalBackground onClick={onClose}>
                    <ModalBody onClick={e => e.stopPropagation()}>
                        <button onClick={onClose}>x</button>

                        {children}
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    )
}

export default ControlledModal

// styled components
const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0 , 0 , 0 , 0.5);
`

const ModalBody = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`