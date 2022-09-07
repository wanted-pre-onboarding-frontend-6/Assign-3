import Routing from 'Routing';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/Global';
import { theme } from 'styles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routing />
    </ThemeProvider>
  );
}

export default App;
