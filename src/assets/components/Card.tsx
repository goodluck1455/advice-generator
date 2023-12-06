import Cardimage from "./Cardimage";
import React, { useState, useEffect } from "react";


function Card() {
  const [quote, setQuote] = useState("");
  const [Id, setId] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.adviceslip.com/advice");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setId(data.slip.id);
      setQuote(data.slip.advice);
      setError(null);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setError("An error occurred while fetching the quote.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);
  

  return (
    <div className="container">
      <div className="cardComponent">
        {loading ? (
          <div className="loader"></div>
        ) : (
          <>
            <p className="advice-id">ADVICE #{Id}</p>
            <p className="MainQuote">{quote}</p>
          </>
        )}
        {error && <p className="error-message">{error}</p>}

        <Cardimage onClick={fetchQuote} />
      </div>
    </div>
  );
}

export default Card;



























//Testing 004
// function Card() {

//   return (
//     <div className="container">
//       <div className="cardComponent">

//             <p className="advice-id">ADVICE #117</p>
//             <p className="MainQuote">Lorem ipsum dolor si
//             t amet consectetur, adipisicing elit. Liber!</p>

//         <Cardimage />
//       </div>
//     </div>
//   );
// }

// export default Card;





//Testing 005
// function Card() {
//   const [quote, setQuote] = useState('');
//   const [error, setError] = useState(null);

//   const fetchQuote = async () => {
//     try {
//       const response = await fetch('https://api.quotable.io/random');

//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }

//       const data = await response.json();
//       setQuote(data.content);
//       setError(null); // Clear any previous errors
//     } catch (error) {
//       console.error('Error fetching quote:', error);
//       setError("An error occurred while fetching the quote.");
//     }
//   };

//   useEffect(() => {
//     // Initial load when the component mounts
//     fetchQuote();
//   }, []); // The empty dependency array ensures this effect runs only once on mount

//   return (
//     <div className="container">
//       <div className="cardComponent">
//         {error ? (
//           <p className="error-message">{error}</p>
//         ) : (
//           <>
//             <p className="advice-id">ADVICE #117</p>
//             <p className="MainQuote">{quote}</p>

//             <Cardimage onClick={fetchQuote} />
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Card;










//testing 001
// function Card() {
//   const [quote, setQuote] = useState("");
//   const [Id, setId] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchQuote = async () => {
//     try {
//       setLoading(true); // Set loading to true when starting the fetch
//       const response = await fetch("https://api.adviceslip.com/advice");

//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       const data = await response.json();
//       setId(data.slip.id);
//       setQuote(data.slip.advice);
//       setError(null); // Clear any previous errors
//     } catch (error) {
//       console.error("Error fetching quote:", error);
//       setError("An error occurred while fetching the quote.");
//     } finally {
//       setLoading(false); // Set loading to false when fetch is complete (success or error)
//     }
//   };

//   useEffect(() => {
//     // Initial load when the component mounts
//     fetchQuote();
//   }, []); // The empty dependency array ensures this effect runs only once on mount

//   return (
//     <div className="container">
//       <div className="cardComponent">
//         {error ? (
//           <p className="error-message">{error}</p>
//         ) : (
//           <>
//             <p className="advice-id">ADVICE #{Id}</p>
//             <p className="MainQuote">{quote}</p>
//           </>
//         )}

//         <Cardimage onClick={fetchQuote} loading={loading} />
//       </div>
//     </div>
//   );
// }


// export default Card;



//Testing 002
// function Card() {
//   const [quote, setQuote] = useState('');
//   const [error, setError] = useState(null);

//   const fetchQuote = async () => {
//     try {
//       const response = await fetch('https://api.quotable.io/random');

//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }

//       const data = await response.json();
//       setQuote(data.content);
//       setError(null); // Clear any previous errors
//     } catch (error) {
//       console.error('Error fetching quote:', error);
//       setError('An error occurred while fetching the quote.');
//     }
//   };

//   useEffect(() => {
//     // Initial load when the component mounts
//     fetchQuote();

//   }, []); // The empty dependency array ensures this effect runs only once on mount

//   return (
//     <div className="container">
//       <div className="cardComponent">
//         {error ? (
//           <p className="error-message">{error}</p>
//         ) : (
//           <>
//             <p className="advice-id">ADVICE #117</p>
//             <p className="MainQuote">{quote}</p>
//           </>
//         )}

//         <Cardimage onClick={fetchQuote} />
//       </div>
//     </div>
//   );
// }

// export default Card;




//Testing 003
// function Card() {
//   const [quote, setQuote] = useState("");

//   useEffect(() => {
//     const fetchQuote = async () => {
//       try {
//         const response = await fetch('https://api.quotable.io/random');

//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }

//         const data = await response.json();
//         setQuote(data.content);
//       } catch (error) {
//         console.error('Error fetching quote:', error);
//         setError('An error occurred while fetching the quote.');
//       }
//     };

//     fetchQuote();
//   }, []);

//   return (
//     <>
//       <div className="container">
//         <div className="cardComponent">
//           <p className="advice-id">ADVICE #117</p>

//           <p className="MainQuote">{quote}</p>

//           <Cardimage onClick={fetchQuote()} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Card;
