import { BtnStyle } from './styles'

const Button = ({ text, state, more }) => {
    return (
      <BtnStyle data-testid='btn' onClick={() => {state(more)}}>{text}</BtnStyle>
    )
  }
  
  export default Button