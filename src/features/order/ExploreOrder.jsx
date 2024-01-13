import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../cart/cartSlice';

function ExploreOrder() {
  const dispatch = useDispatch();
  // const [counterItem, setCounterItem] = useState('');
  const { counter } = useSelector((store) => store.cart);

  // function handleAddItem() {
  //   dispatch(addItem());
  // }

  return (
    <ul className="flex font-bold uppercase text-orange-400">
      <Link
        to="/"
        className="m-auto  rounded-3xl hover:border hover:border-yellow-950 hover:bg-orange-500 hover:text-white"
      >
        <li className="p-2 ">About</li>
      </Link>

      <Link
        to="/menu"
        className="m-auto  rounded-3xl hover:bg-orange-500 hover:text-white "
      >
        <li className="p-2 ">Menu</li>
      </Link>
      <Link
        to="/"
        className="m-auto rounded-3xl  hover:border hover:border-yellow-950 hover:bg-orange-500 hover:text-white"
      >
        <li className="p-2 ">Blog</li>
      </Link>
      <Link
        to="/cart"
        // className="rounded-3xl  hover:border hover:border-yellow-950 hover:bg-orange-500 hover:text-white"
      >
        <span
          className={
            'icon   mx-4  flex  rounded-full   bg-orange-400 p-2 text-white hover:bg-orange-700 hover:text-white'
          }
        >
          <span className="absolute pl-12">{counter ? counter : ''}</span>
          <span
            className={
              counter
                ? `absolute top-8 ml-12 h-2 w-0 animate-ping rounded-full bg-teal-900 p-1`
                : ''
            }
          ></span>

          <Icon
            icon="mi:shopping-cart"
            height="40"
            width="70"
            className="p-2"
          />
        </span>
      </Link>
    </ul>
  );
}

export default ExploreOrder;
//className="rounded-3xl  hover:border hover:border-yellow-950 hover:bg-orange-500 hover:text-white"
// className={
//   counter
//     ? ` animate-ping`
//     : 'icon   mx-4  flex  rounded-full   bg-orange-400 p-2 text-white hover:bg-orange-700 hover:text-white'
// }
