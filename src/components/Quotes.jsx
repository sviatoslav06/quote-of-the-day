import { useState } from "react"
import QUOTES from "../Array-quotes";
import './Quotes.css'

function Quotes() {
    const [quote, setQuote] = useState(-1);

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const updateQuote = () => {
        setQuote(QUOTES[randomNumberInRange(0, 3)]);
    }

    const clearQuote = () => {
        setQuote(-1);
    }

    return (
        <>
            <div className="Buttons">
                <button onClick={updateQuote}>Show</button>
                <button onClick={clearQuote}>Hide</button>
            </div>
            <h2>{quote.author}</h2>
            <div><q>{quote.quote}</q></div>
        </>
    )
}

export default Quotes;