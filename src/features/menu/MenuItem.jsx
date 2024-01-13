import { useDispatch, useSelector } from 'react-redux';
import { useSort } from '../../contexts/SortContext';
import MenuImage from './MenuImage';
import MenuInfo from './MenuInfo';
import { addItem } from '../cart/cartSlice';
import { useCart } from '../../contexts/CartContext';

function MenuItem({ search, menu, onAddItem }) {
  // const [counter, setCounter] = useState(0);
  // const dispatch = useDispatch();
  // const { addItem: addItem } = useSelector((store) => store.cart);

  // function handleAddingItem() {
  //   if (!counter) return;

  //   dispatch(addItem(counter));
  //   setCounter(0);
  // }
  // console.log(counter);

  const { handleAddItem } = useCart();

  let sortedProducts = [...menu];
  const { sortBy, setSortBy } = useSort();
  console.log(sortBy);
  const filteredArray = menu.filter((pizza) =>
    pizza.name.toLowerCase().includes(search.toLowerCase()),
  );
  console.log(filteredArray);

  let sortedData;

  if (sortBy === 'dateNewToOld') {
    sortedData = filteredArray.slice().sort((a, b) => a.id - b.id);
  } else if (sortBy === 'dateOldToNew') {
    sortedData = filteredArray.slice().sort((a, b) => b.id - a.id);
  } else if (sortBy === 'priceAsc') {
    sortedData = filteredArray
      .slice()
      .sort((a, b) => a.unitPrice - b.unitPrice);
  } else if (sortBy === 'priceDesc') {
    sortedData = filteredArray
      .slice()
      .sort((a, b) => b.unitPrice - a.unitPrice);
  } else {
    sortedData = filteredArray;
  }

  setSortBy(sortBy);
  sortedProducts = sortedData;

  console.log(filteredArray);
  const dispatch = useDispatch();
  // const [counterItem, setCounterItem] = useState('');

  return sortedProducts.map((pizza, index) => {
    const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
    // function handleAddItem(itemName) {
    //   dispatch(addItem([name, unitPrice, imageUrl, index]));
    //   console.log(name);
    // }
    function handleAddPizza() {
      handleAddItem(dispatch(addItem([name, unitPrice, imageUrl])));
    }

    return (
      <li className="  m-auto grid max-w-5xl grid-flow-col gap-4" key={index}>
        {index % 2 === 0 ? (
          <>
            <MenuImage imageUrl={imageUrl} name={name} soldOut={soldOut} />
            <MenuInfo
              name={name}
              ingredients={ingredients}
              unitPrice={unitPrice}
              soldOut={soldOut}
              filteredArray={filteredArray}
              onAddItem={() => handleAddPizza()}
            />
          </>
        ) : (
          <>
            {' '}
            <MenuInfo
              name={name}
              ingredients={ingredients}
              unitPrice={unitPrice}
              soldOut={soldOut}
              onAddItem={() => handleAddPizza(name)}
            />
            <MenuImage imageUrl={imageUrl} name={name} soldOut={soldOut} />
          </>
        )}
      </li>
    );
  });
}

export default MenuItem;
