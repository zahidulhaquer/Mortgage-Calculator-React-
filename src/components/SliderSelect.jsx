import SliderComponent from './common/SliderComponent';

const SliderSelect = () => {
  const bank_limit = 10000

  return (
    <div>
      <SliderComponent amount={3500} unit="$" defaultValue={3000} min={1000} max={bank_limit} label="Home Value" step={100} onChange={(e) => console.log(e.target.value)} />

      <SliderComponent amount={3500} unit="$" defaultValue={3000} min={0} max={3000} label="Down Payment" step={100} onChange={(e) => console.log(e.target.value)} />

      <SliderComponent amount={3500} unit="$" defaultValue={3000} min={0} max={3000} label="Loan Amount" step={100} onChange={(e) => console.log(e.target.value)} />

      <SliderComponent amount={2} unit="%" defaultValue={2} min={2} max={18} label="Interest Rate" step={0.5} onChange={(e) => console.log(e.target.value)} />
    </div>
  )
}

export default SliderSelect                       