import './App.css';
import StyledButton, { FancyButton } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <h1>Learning styled components</h1>
      <StyledButton>Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant='outline'>Styled Button</StyledButton>
      <div>
        <br />
      </div>
      {/* as="a" */}
      <FancyButton>Fancy Button</FancyButton>
    </div>
  );
}

export default App;
