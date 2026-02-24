import { Grid } from '@mui/material'
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
      < Navbar />
      <Grid container spacing={2}>
        <Grid item>
          <SliderSelect />
          <Tenure />
        </Grid>
        <Grid item>
          <Result />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
