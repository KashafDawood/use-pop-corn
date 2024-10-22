import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./Components/StarRating";

// function Test() {
//   const [movieRate, setRate] = useState(0);

//   return (
//     <div>
//       <StarRating
//         maxRating={10}
//         color="blue"
//         defaultRating={5}
//         onSetRating={setRate}
//       />
//       <p>the movie is rated {movieRate}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} />
    <Test /> */}
  </React.StrictMode>
);
