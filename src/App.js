import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import GlobalStyle from './commons/styles/global-style';

function App() {
  return (
    <StylesProvider injectionFirst>
      <CssBaseline />
      <GlobalStyle />
      <div>
        Aloha Teste
      </div>
    </StylesProvider>
  );
}

export default App;
