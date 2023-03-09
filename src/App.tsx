import Works from './components/Works';
import Education from './components/Education';
import Experience from './components/Experience';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import Front from './components/Front';
import About from './components/About';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#00a396",
    },
    secondary: {
      main: "#F79256"
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Front />
      <About />
      <Works />
      <Education />
      <Experience />
      <Footer />
    </ThemeProvider>
  )
}

export default App
