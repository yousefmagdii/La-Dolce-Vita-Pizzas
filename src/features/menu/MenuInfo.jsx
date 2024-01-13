function MenuInfo({ name, ingredients, unitPrice, soldOut, onAddItem }) {
  const handleAddItem = () => {
    // Call onAddItem with the item's unique identifier (id)
    onAddItem(name);
  };
  return (
    <div className="m-auto my-auto w-96">
      <p className="w-full font-pacifico text-5xl capitalize leading-loose text-orange-400">
        {name}
      </p>
      <p className="space-x-1 text-lg capitalize text-teal-800">
        {ingredients.join(' ,')}
      </p>
      <p className="text-sm text-stone-500">{unitPrice}€</p>
      <button
        onClick={handleAddItem}
        disabled={soldOut}
        className={` mt-2 rounded-full border 
         bg-orange-400 px-3 py-2 font-semibold text-white
          hover:border-orange-400 hover:bg-stone-200 
         hover:text-orange-400 disabled:bg-stone-300
          disabled:hover:border-stone-300  disabled:hover:bg-stone-300 disabled:hover:text-white`}
      >
        {soldOut ? 'Sold Out' : 'Order Now'}
      </button>
    </div>
  );
}

export default MenuInfo;
