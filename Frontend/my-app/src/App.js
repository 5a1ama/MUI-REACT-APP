import { Route,Routes } from 'react-router';
import { Home } from './Home';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="/" element={<Home mode={mode} setMode={setMode}/>} />
      </Routes>
    </ThemeProvider>

  );
}

export default App;
