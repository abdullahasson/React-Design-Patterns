// react
import { useState , isValidElement , cloneElement , Children } from "react"

const UnControlledOnboardingFlow = ({
    children ,
    onFinish
}) => {

    const [onboardingData , setOnboardingData] = useState({})
    const [currentIndex , setCurrentIndex] = useState(0)

    const goToNext = stepData => {
        const nextIndex = currentIndex + 1

        const updateData = {
            ...onboardingData ,
            ...stepData
        }

        console.log(updateData)

        if (nextIndex < children.length) {
            setCurrentIndex(nextIndex)
        } else {
            onFinish(stepData)
        }

        setOnboardingData(updateData)
    }

    const currentChild = Children.toArray(children)[currentIndex]

    if (isValidElement(currentChild)) {
        return cloneElement(currentIndex , {goToNext})
    }

    return currentChild
}

export default UnControlledOnboardingFlow