import Icondice from "/icon-dice.svg";

import patternDivider from "/pattern-divider-desktop.svg";
// import patternDivider from "../images/pattern-divider-desktop.svg";
import "../components/cardimage.css";

// function Cardimage({ onClick }){
//     return(

//         <>
//               <div className="audit">
//            <img src={patternDivider} alt="" className='patternDivider'/>

//              <div className='icondice-A' onClick={onClick}>
//              <img src={Icondice} alt="" className='icondice'/>
//              </div>
//              </div>

//         </>
//     )
// }

//   export default Cardimage;

function Cardimage({
  onClick,
  loading,  // Add this line even if not used in the component
}: {
  onClick: () => void | Promise<void>;
  loading?: boolean;  // Make loading optional
}) {
  return (
    <div className="audit" >
      <img src={patternDivider} alt="" className="patternDivider" />

      <div className="icondice-A" onClick={onClick} >
        {loading ? (
          // Display a loader with a spinner while loading
          <div className="loader"></div>
        ) : (
          <img src={Icondice} alt="" className="icondice" />
        )}
      </div>
    </div>
  );
}

export default Cardimage;

// function Cardimage({ onClick, loading }) {
//   return (
//     <>
//       <div className="audit">
//         <img src={patternDivider} alt="" className="patternDivider" />

//         <div className="icondice-A" onClick={onClick}>
//           {loading ? (
//             // Display a loader while loading
//             <div className="loader">Loading advice.........</div>
//           ) : (
//             <img src={Icondice} alt="" className="icondice"  />
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cardimage;

// function Cardimage({ onClick }) {
//   return (
//     <>
//       <div className="audit">
//         <img src={patternDivider} alt="" className="patternDivider" />

//         <div className="icondice-A" onClick={onClick}>
//           <img src={Icondice} alt="" className="icondice" />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cardimage;
