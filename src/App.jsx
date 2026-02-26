import { Container, Grid } from '@mui/material'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Result from './components/Result'
import SliderSelect from './components/SliderSelect'
import Tenure from './components/Tenure'

function App() {
  // const [count, setCount] = useState(10)
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2, // 20% of home value
    loanAmount: 3000 * 0.8, // Remaining after down payment
    loanTerm: 5,
    interestRate: 5,
  })

  // console.log(data);

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item md={6}>
            <SliderSelect data={data} setData={setData}/>
            <Tenure />
          </Grid>
          <Grid item md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>

      {/* <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div> */}
    </div>
  )
}

export default App
