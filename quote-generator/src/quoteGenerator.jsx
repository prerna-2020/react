import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

function QuoteGenerator() {
  const url = "https://dummyjson.com/quotes";
  const [{ data, loading }] = useFetch(url);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setQuote(data[0]);
    }
  }, [data]);

  const generateQuote = () => {
    let dataLength = data.length;
    let random = Math.floor(Math.random() * dataLength);

    setQuote(data[random]);
  };

  return (
    <>
      <div className="container">
        <div className="main">
          {loading && (
            <div className="loader">
              <img src="/loader.gif" />
            </div>
          )}

          {quote && (
            <div className="quoteBlock">
              <h2>Quote Generator</h2>
              <blockquote>
                <p className="quote">{quote.quote}</p>
                <p className="author">
                  <cite>{quote.author}</cite>
                </p>
              </blockquote>

              <button type="button" onClick={generateQuote}>
                New Quote
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default QuoteGenerator;
