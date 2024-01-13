import { createContext, useContext, useState } from 'react';

const SortContext = createContext();

function SortProvider({ children }) {
  const [sortBy, setSortBy] = useState('default');
  const handleSortType = (event) => {
    const selectedValue = event.target.value;
    // Add your sorting logic here if needed
    setSortBy(selectedValue);
  };
  return (
    <SortContext.Provider
      value={{
        sortBy,
        setSortBy,
        handleSortType,
      }}
    >
      {children}
    </SortContext.Provider>
  );
}

function useSort() {
  const context = useContext(SortContext);
  if (context === undefined)
    throw new Error('SortContext was used outside of SortProvider');
  return context;
}
export { SortProvider, useSort };
