import { useSearch } from '../../contexts/SearchContext';

function MenuImage({ imageUrl, name, soldOut }) {
  const { randomIntFromInterval } = useSearch();
  return (
    <div className="m-11">
      <img
        src={imageUrl}
        alt={name}
        className={`  w-${randomIntFromInterval(
          52,
          80,
        )} rounded-full border-4  border-double
     border-orange-600 shadow-2xl   ${
       soldOut
         ? 'grayscale'
         : 'duration-700 hover:rotate-45 hover:scale-150 hover:shadow-gray-600'
     }`}
      />
    </div>
  );
}

export default MenuImage;
