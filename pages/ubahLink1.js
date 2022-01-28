// App.js
import { useState} from 'react'

const App = () => {
  const [text, setText] = useState('');

  const inputHandler = event => {
    setText(event.target.value);
  }

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    // alert('Text copied');
  }

  return <div style={styles.container}>
    <input type="text" value={text} onChange={inputHandler} />
    <button onClick={copy} disabled={!text}></button>
  </div>;
};

export default App;

const styles = {
  container: {
    margin: '10%'
  }
}