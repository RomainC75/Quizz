import './App.css';
import { BrowserRouter as Router , Route, Routes, Switch } from 'react-router-dom'
import Header from './component/Header'
import Main from './component/Main'
import FirstQuiz from './component/Quiz'
import Quiz from './component/Quiz'
import WelcomeQuiz from './component/WelcomeQuiz';
import Results from './component/Results';
import { DataProvider } from './context/context'

function App() {
  return (
    <DataProvider>
    <Router>
  
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
          <Route exact path="/quiz/" element={<WelcomeQuiz/>}/>
          <Route exact path="/quiz/:number" element={<Quiz/>}/>
        <Route path="/results" element={<Results/>}/>
      </Routes>
    
    </Router>  
    </DataProvider>
  );
}

export default App;
