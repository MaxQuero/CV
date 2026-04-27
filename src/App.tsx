import { useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createCvTheme } from './theme/theme';
import { CVPage } from './pages/CVPage';

function App() {
  const theme = useMemo(() => createCvTheme(), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CVPage />
    </ThemeProvider>
  );
}

export default App;
