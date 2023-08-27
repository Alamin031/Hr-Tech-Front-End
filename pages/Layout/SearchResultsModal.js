
// import React from 'react';

// const SearchResultsModal = ({ isOpen, searchResults, onClose }) => {
//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h2>Search Results</h2>
//         <ul>
//           {searchResults.map((product) => (
//             <li key={product.id}>
//               <p>{product.Product_Name}</p>
//               <p>{product.Product_Brands_Name}</p>
//               <p>{product.Price}</p>
//               {/* Render other product details */}
//             </li>
//           ))}
//         </ul>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default SearchResultsModal;

// import React from 'react';

// const SearchResultsModal = ({ isOpen, searchResults, onClose }) => {
//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content" style={{ top: '70px' }}>
//         <h2>Search Results</h2>
//         <ul>
//           {searchResults.map((product) => (
//             <li key={product.id}>
//               <p>{product.Product_Name}</p>
//               <p>{product.Product_Brands_Name}</p>
//               <p>{product.Price}</p>
//               {/* Render other product details */}
//             </li>
//           ))}
//         </ul>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default SearchResultsModal;

import React from 'react';

const SearchResultsModal = ({ isOpen, searchResults, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              <a href={`/Component/${result.id}`}>{result.Product_Name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResultsModal;

