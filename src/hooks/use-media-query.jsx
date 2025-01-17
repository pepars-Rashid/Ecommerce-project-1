'use client'
import * as React from "react";  

export function useMediaQuery(query) {  
  const [matches, setMatches] = React.useState(false);  

  React.useEffect(() => {  
    const mql = window.matchMedia(query);  
    const handleChange = () => setMatches(mql.matches);  
    
    // Set the initial state  
    setMatches(mql.matches);  
    
    // Add the listener for changes  
    mql.addEventListener("change", handleChange);  

    // Cleanup the event listener on unmount  
    return () => {  
      mql.removeEventListener("change", handleChange);  
    };  
  }, [query]);  

  return matches;  
}