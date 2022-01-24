import styled from "styled-components"

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
`

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border:none;
`