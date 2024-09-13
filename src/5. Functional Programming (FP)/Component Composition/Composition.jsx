// Component Composition : 
// Basically composition is the functional programming analog to 
// to inheritance in object oriented programming now obviously both
// have diggerences

const Button = ({
    size ,
    color ,
    text ,
    ...props
}) => {
    <button
        style={{
            padding: size === 'large' ? '32px' : '18px',
            fontSize: size === 'large' ? '32px' : '16px',
            backgroundColor: color
        }}

        {...props}
    >
        {text}
    </button>
}

export default Button

export const DangerButton = props => {
    return (
        <Button {...props} color='red' />
    )
}

export const BigSuccessButton = props => {
    return (
        <Button {...props} size='large' color='green' />
    )
}