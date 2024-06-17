import Navbar from './components/Navbar';
import SliderComponent from './components/common/SliderComponent';
import SliderSelect from './components/SliderSelect';
import TenureSelect from './components/TenureSelect';
import Result from './components/Result';
import { Container, Grid } from '@mui/material';
import { useState } from 'react';


function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">      
      < Navbar />
      <button onClick={()=> setCounter(counter-5)}>Decrement</button>
      <p>{counter}</p>
      <button onClick={()=> setCounter(counter+10)}>Increment</button>
      <Container maxWidth="md" sx={{marginTop:4}}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            < SliderSelect />
            <TenureSelect />
          </Grid>

          <Grid item xs={12} md={6}>
            < Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
