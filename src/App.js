import {ThemeProvider, createGlobalStyle} from 'styled-components';
import logo from './logo.svg';
import './App.css';
import './styles.css'
import StyledButton, { 
  FancyButton,
  SubmitButton 
} from './components/Button/Button';
import { AnimatedLogo, DarkButton } from './components/Button/Button.styles'

const theme = {
  dark: {
    primary: '#000',
    text: '#fff'
  },
  light: {
    primary: '#fff',
    text: '#000'
  },
  fontFamily: 'Segoe UI'
}
const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${(props) => props.theme.fontFamily};
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div className="App">
        <h1>Learning styled components</h1>
        {/* <img src={logo} className='App-logo' alt="logo" /> */}
        <AnimatedLogo src={logo} />
        <StyledButton type='submit'>Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton variant='outline'>Styled Button</StyledButton>
        <div>
          <br />
        </div>
        {/* as="a" */}
        <FancyButton>Fancy Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit</SubmitButton>
        <div>
          <br />
        </div>
        <DarkButton>Dark theme</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
