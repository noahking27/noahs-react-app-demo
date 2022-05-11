import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import WinCounter from './components/WinCounter';

// components = logo building block
// what is a prop? a prop is a property

// you'll make component
// you'll import that component
// pass props
// component renders on the screen
const App = () => {
  
  return (
    <div className="App">
      <header className="App-header">
        <Button buttonText="hello world" color="red" onClick={() => console.log('you clicked the hello world button')}/> 
        2 + 2 = {2 + 2}
      <WinCounter />
      </header>
      <Footer footerText="This is a footer"/>
    </div>
  );
}

export default App;
