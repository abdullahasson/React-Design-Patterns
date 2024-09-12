import { Children, cloneElement, isValidElement } from "react"

const ControlledOnboardingFlow = ({
    children ,
    onFinish ,
    currentIndex , 
    currentInde ,
    onNext
}) => {

    const goToNext = stepData => {
        onNext(stepData)
    }

    const currentChild = Children.toArray(children)[currentInde]

    if (isValidElement(currentChild)) {
        return cloneElement(currentChild , { goToNext })
    }


    return currentChild
}

export default ControlledOnboardingFlow