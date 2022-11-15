import React from "react";

export const Paginator = ( { onNext, page, onPrevious } ) => {

  return (
    <>
      <button 
        onClick={ () => onPrevious() }
        disabled={ page === 1 || page === 0 }
      >
        Previous
      </button>
        {page}
      <button onClick={ () => onNext() }>Next</button>
    </>
  );
};
