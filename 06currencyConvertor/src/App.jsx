import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Inputbox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  //const [count, setCount] = useState(0)

  const [amount , setamount] = useState(0);
  const [form ,setform] = useState("usd");
  const [to , setto] = useState("inr");
  const [convertedAmount , setconvertedAmount] = useState(0);


  const currencyInfo = useCurrencyInfo(form);
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setform(to)
    setto(form)
    setconvertedAmount(amount)
    setamount(convertedAmount)

  }

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style = {{
      backgroundImage : `url('https://images.pexels.com/photos/35903239/pexels-photo-35903239.jpeg')`,
    }}

    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form onSubmit={(e) => {e.preventDefault(); convert()}}>
          <div className='w-full mb-1'>
            <Inputbox label = "From"
            amount = {amount}
            onAmountChange = {(amount) => setamount(amount)}
            currencyOptions = {options}
            onCurrencyChange = {(currency) => setform(currency)}
            selectCurrency = {form}
            />
          </div>
<div className="relative w-full h-0.5">
  <button onClick={swap} type = "button" className='absolute left-1/2
  -translate-x-1/2
  -translate-y-1/2 border-2 
  border-white rounded-md
  bg-blue-600 text-white px-2 py-0.5'> swap </button>
</div>
<div className='w-full mt-1 mb-4'>
  <Inputbox label = "To"
  amount = {convertedAmount}
  currencyOptions = {options}
  onCurrencyChange = {(currency) => setto(currency)}
  selectCurrency = {to}
  amountDisable = {true} />
</div>
<button type = "submit" className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'> Convert {form.toUpperCase()} to {to.toUpperCase()} </button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default App


 