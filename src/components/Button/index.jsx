import { BtnStyle } from './styles'

const Button = ({ text, state, more }) => {
    return (
      <BtnStyle onClick={() => {state(more)}}>{text}</BtnStyle>
    )
  }
  
  export default Button