import styled, {keyframes} from "styled-components"

export const StyledButton = styled.button`
  border:2px solid orangered;
  background-color:${(props) => props.variant === 'outline' ? 'transparent' : 'orangered'};
  color:${(props) => props.variant === 'outline' ? 'orangered' : '#fff'};
  padding:15px 32px;
  text-align:center;
  text-decoration:none;
  display:inline-block;
  font-size:16px;
  border-radius: 8px;
  cursor:pointer;
  transition:all .5s ease-in-out;
  //pseudo classes
  &:hover {
    background-color:${(props) => props.variant !== 'outline' ? 'transparent' : 'orangered'};
    color:${(props) => props.variant !== 'outline' ? 'orangered' : '#fff'};
  }
`
// extending styles
export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border:none;
`
// passed props and adding attributes
export const SubmitButton = styled(StyledButton).attrs(props => ({
  type: 'submit',
}))`
  box-shadow: 0 9px #999;
  &:active {
    background-color: ${(props) => props.variant !== 'outline' ? '#fff' : '#orangered'};
    box-shadow: 0 5px #666;
    transform: translate(4px);
  }
`

const rotate = keyframes`
  from{
    transform: rotate()(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`
export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
 `
export const DarkButton = styled(StyledButton)`
  border:2px solid ${(props) => props.theme.dark.primary};
  background-color:${(props) => props.theme.dark.primary};
  color:${(props) => props.theme.light}
`

//global styles
