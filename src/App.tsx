import Routing from 'Routing';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
