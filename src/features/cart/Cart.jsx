import { useDispatch, useSelector } from 'react-redux';
import { Link, useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { addItem, deleteOneItem, resetCart } from './cartSlice';
import { deleteItem } from './cartSlice';
import { useCart } from '../../contexts/CartContext';
import Map from '../Map/Map';
function Cart() {
  // const [cartCounter, setCartCounter] = useState('');
  const menu = useLoaderData();
  const dispatch = useDispatch();

  function handleDeleteAll() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?',
    );
    console.log(confirmed);

    confirmed && dispatch(resetCart());
  }
  function handleDeleteItem(itemName) {
    dispatch(deleteItem({ name: itemName }));
  }
  function handleMinus(itemName) {
    dispatch(deleteOneItem({ name: itemName }));
  }

  const { cart } = useSelector((store) => store.cart);
  console.log(cart);
  const { handleAddItem } = useCart();

  function handleAddPizza(e) {
    handleAddItem(e);
  }

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.unitPrice * item.quantity;
  }, 0);
  const { counter, itemCounter } = useSelector((store) => store.cart);
  // console.log(cart);
  // const propertyValues = Object.values(itemCounter);
  // console.log(propertyValues);
  // console.log(propertyValues[3]);

  // console.log(cart);

  // Use map to create an array of ids
  // const ids = cart.map((item) => item[3]);

  // Create an object to store the counts
  // const idCounts = {};

  // Iterate through the array of ids and count occurrences
  // ids.forEach((id) => {
  //   idCounts[id] = (idCounts[id] || 0) + 1;
  // });

  // Log the counts
  // console.log(idCounts);
  // function handleDeleteOneItem() {
  //   if (!cartCounter) return;
  //   dispatch(deleteItem(cartCounter));
  //   setCartCounter('');
  // }

  return (
    <div className="bg-natural-50  min-h-svh  ">
      {cart.length ? (
        <div className="m-auto max-w-[70%] rounded-3xl bg-stone-900 py-8 pt-5 shadow-2xl ">
          {cart.map((item, index) => {
            const { name, unitPrice, imageUrl, quantity } = item;

            return (
              <div
                key={index}
                className="group m-auto my-5 flex w-full max-w-[70%] justify-between  p-5   px-10 font-extrabold
             text-white duration-700 hover:scale-125 hover:rounded-full  hover:bg-orange-300 hover:text-teal-900"
              >
                <img src={imageUrl} alt={name} className="h-20  rounded-2xl" />
                <span className="m-auto w-10">{name}</span>
                <span className="m-auto font-dance">
                  {unitPrice * quantity} €
                </span>
                <div className="m-auto">
                  <button
                    onClick={() => handleMinus(name)}
                    className="mr-2 rounded-full border-2 border-orange-300 p-4
                hover:bg-orange-300  hover:text-teal-900 group-hover:border-teal-900 
                group-hover:bg-teal-900  group-hover:text-white "
                  >
                    -
                  </button>
                  <span className="m-auto font-dance">{quantity}</span>
                  <button
                    onClick={() =>
                      handleAddPizza(
                        dispatch(
                          addItem([name, unitPrice, imageUrl, quantity]),
                        ),
                      )
                    }
                    className="ml-2 rounded-full  border-2   border-orange-300 p-4 
                group-hover:border-teal-900 group-hover:bg-teal-900  group-hover:text-white"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleDeleteItem(name)}
                  className={` m-auto 
             h-16 rounded-full border bg-red-900 font-semibold text-white duration-500
             hover:bg-red-400 hover:px-3 hover:py-2 
             `}
                >
                  <Icon
                    icon="mi:delete"
                    height="40"
                    width="70"
                    className="p-2"
                  />
                </button>
              </div>
            );
          })}
          <div className="flex  ">
            <span
              className="col-span-2 m-auto w-96  rounded-3xl
             border-8 border-double border-orange-200 bg-orange-400 text-center font-dance text-4xl font-semibold
             shadow-md"
            >
              <span className="my-auto">
                <span className=" tracking-wider text-white ">
                  Total Price:{' '}
                </span>
                <span className="text-white ">{totalPrice}€</span>
              </span>
            </span>
          </div>
          <div className="  flex justify-center">
            <Link to={'/cart/map'}>
              <button
                className={`m-8 mb-0
              h-10 w-40
              border-4
              border-double bg-teal-800 text-center align-middle
              text-sm font-semibold text-white hover:bg-teal-700 group-hover:bg-teal-700
              `}
              >
                <span className="">Check Out</span>
              </button>
            </Link>
            <button
              onClick={handleDeleteAll}
              className={`  m-8
               h-10 w-40
               border-4
              border-double bg-red-800 text-center align-middle
              text-sm font-semibold text-white hover:bg-red-700 group-hover:bg-red-700
              `}
            >
              Clear All
            </button>
          </div>
        </div>
      ) : (
        <p className="mt-32 text-center font-dance text-5xl font-semibold text-orange-600">
          {' '}
          Your Cart is empty add pizza to it
        </p>
      )}
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Cart;
