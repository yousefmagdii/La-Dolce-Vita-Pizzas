import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Sort from './Sort';
import Filter from './Filter';

function Search({ search, setSearch }) {
  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  const { pathname } = useLocation('menu');
  return (
    <>
      {pathname === '/menu' ? (
        <div className="flex">
          <input
            value={search}
            onChange={handleSearch}
            placeholder="Search for a pizza..."
            type="search"
            className=" mt-2 rounded-full border bg-teal-50 
          px-3 py-2 text-sm font-semibold text-teal-950
          hover:border-teal-400 hover:bg-stone-50
          hover:text-green-800 focus:bg-stone-50 "
          />
          <Sort className="  " />
          <Filter />
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default Search;
