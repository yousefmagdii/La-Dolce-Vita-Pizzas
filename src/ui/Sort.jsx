import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';
import { useSort } from '../contexts/SortContext';

function Sort() {
  const { sortBy, setSortBy, handleSortType } = useSort();
  // const { search } = useSearch();
  // const menu = useLoaderData();
  // const newArray = menu;
  // //Sort products

  // const filteredArray = menu.filter((pizza) =>
  //   pizza.name.toLowerCase().includes(search.toLowerCase()),
  // );
  // const [sortBy, setSortBy] = useState('default');

  // const handleSortChange = (sortType) => {
  //   let sortedData;

  //   if (sortType === 'dateNewToOld') {
  //     sortedData = filteredArray.slice().sort((a, b) => b.id - a.id);
  //   } else if (sortType === 'dateOldToNew') {
  //     sortedData = filteredArray.slice().sort((a, b) => a.id - b.id);
  //   } else if (sortType === 'priceAsc') {
  //     sortedData = filteredArray.slice().sort((a, b) => a.price - b.price);
  //   } else if (sortType === 'priceDesc') {
  //     sortedData = filteredArray.slice().sort((a, b) => b.price - a.price);
  //   } else {
  //     return;
  //   }
  //   setSortBy(sortType);
  //   newArray = sortedData;
  // };
  return (
    <>
      <Icon
        icon="mi:sort"
        height="40"
        width="40"
        className="icon m-auto my-2  ml-8 mt-4 rounded-full bg-orange-400    p-2 text-white"
      />
      <select
        value={sortBy}
        onChange={handleSortType}
        className="ml-6 mt-2 rounded-full  border-8 
          border-orange-400 bg-orange-400 px-3 py-2 text-sm font-semibold "
      >
        <option value="default" className="my-2 bg-orange-400">
          Default
        </option>
        <option value="priceAsc" className="my-2 bg-orange-400">
          Price: Low to High
        </option>
        <option value="priceDesc" className="my-2 bg-orange-400">
          Price: High to Low
        </option>
        <option value="dateNewToOld" className="my-2 bg-orange-400">
          Date: New to Old
        </option>
        <option value="dateOldToNew" className="my-2 bg-orange-400">
          Date: Old to New
        </option>
      </select>
    </>
  );
}

export default Sort;
