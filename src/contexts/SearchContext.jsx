import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [search, setSearch] = useState('');

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const rndInt = randomIntFromInterval(52, 80);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        randomIntFromInterval,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error('searchContext was used outside of SearchProvider');
  return context;
}
export { SearchProvider, useSearch };
