import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import { useSearch } from '../../contexts/SearchContext';
import { useEffect, useState } from 'react';
import { SortProvider, useSort } from '../../contexts/SortContext';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../cart/cartSlice';
function Menu() {
  const i = 0;
  const menu = useLoaderData();
  const { search, setSearch } = useSearch('');
  const [arrofSearchedResult, setArrofSearchedResult] = useState([]);

  return (
    <ul
      className="divide-y divide-stone-200
         px-2"
    >
      <div className="m-auto flex max-w-5xl justify-between">
        <div className="">
          <h1 className="w-full  text-right font-pacifico text-3xl capitalize leading-loose text-orange-600">
            Discover
          </h1>
          <p className="font-sans text-5xl font-semibold text-teal-900">
            our Menu
          </p>
        </div>
        <div className=" max-w-2xl leading-loose">
          <p className=" text-md p-3 text-stone-400 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            dignissimos magni suscipit incidunt tenetur debitis, aliquam dolore
            illo amet harum ratione at, cum explicabo nam quibusdam debitis
          </p>
        </div>
      </div>

      <MenuItem
        menu={menu}
        search={search}
        setSearch={setSearch}
        arrofSearchedResult={arrofSearchedResult}
        setArrofSearchedResult={setArrofSearchedResult}
        i={i}
      />
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
