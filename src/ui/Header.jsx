import { Link } from 'react-router-dom';
import ExploreOrder from '../features/order/ExploreOrder';
import Search from './Search';

function Header({ search, setSearch }) {
  console.log(search);
  return (
    <>
      <header
        className=" sticky top-0
         z-50 flex w-full
         items-center justify-between border-b
         border-stone-200 bg-teal-950  bg-opacity-80 px-4 py-3 text-white shadow-md  sm:p-3"
      >
        <div className="flex justify-between">
          <img alt="" src="pizza2.png" className="h-14  " />

          <Link
            to="/"
            className=" m-auto px-5 font-caveat text-xl  font-semibold uppercase tracking-widest
            text-orange-50 duration-700 hover:text-2xl hover:text-orange-400"
          >
            La Dolce Vita Pizzas
          </Link>
        </div>
        <Search search={search} setSearch={setSearch} />
        <ExploreOrder />
      </header>
    </>
  );
}

export default Header;
