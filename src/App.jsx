import { Container, Grid } from '@mui/material'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Result from './components/Result'
import SliderSelect from './components/SliderSelect'
import Tenure from './components/Tenure'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item md={6}>
            <SliderSelect />
            <Tenure />
          </Grid>
          <Grid item md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App
