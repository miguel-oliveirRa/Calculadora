import { ButtonContainer } from "./style";

const Button = ({ label, onClick, percentual }) => {
    return( 
        <ButtonContainer onClick={ onClick } type="button" percentual={ percentual } >
            { label }
        </ButtonContainer>
    )
}

export default Button