import { useState } from "react";
import { InputBox } from "./components/"; //in this case we don't need to mention index file because the index will done be called by defualt
import useCurrencyInfo from './hooks/useCurrancyInfo'
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
    className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url('https://w0.peakpx.com/wallpaper/888/769/HD-wallpaper-bitcoin-price-analysis-12-in-sight-as-bullish-pennant-forms.jpg')`,
    }}
  >
    <div className="w-full px-4">
      <div className="max-w-md mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-sm bg-white/30 shadow-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* From Currency Input */}
          <div className="mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
  
          {/* Swap Button */}
          <div className="relative mb-4">
            <button
              type="button"
              onClick={swap}
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-4 py-1"
            >
              Swap
            </button>
          </div>
  
          {/* To Currency Input */}
          <div className="mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  </div>
  
  );
}

export default App;
