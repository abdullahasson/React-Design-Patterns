// Partially applied component :
// Partially applied it's a way to allow ourselves to specify a set number
// of props on a component without having to create a new component like we did
// with the danger button and big success button , we're going to use higher order components


export const partiallyApply = ( Component , partialProps ) => {
    return props => {
        <Component {...partialProps} {...props}/>
    }
}

// export const DangerButton = partiallyApply(Button , {color: 'red'})
// export const BigSuccessButton = partiallyApply(Button , {color: 'green'})
