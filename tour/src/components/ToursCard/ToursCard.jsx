import { useState } from 'react';
function ToursCard({ id, removeTour, ...props }) {
  const [info, setInfo] = useState(false);
  const { name, description, imageUrl, price } = props;

  return (
    <article className="flex flex-col relative gap-8relative max-h-[395px] bg-slate-100">
      <figure className="w-full h-3/6 object-cover">
        <img className="w-full h-full" src={imageUrl} alt={name} />
      </figure>
      <span className="absolute top-0 right-0 font-semibold bg-lime-600 rounded-s-md p-1 text-white">
        {price}
      </span>
      <div>
        <p className="text-sm">
          {info ? description : description.substring(0, 250)}
          <button
            className="text-blue-500 no-underline ml-2"
            onClick={() => {
              setInfo(!info);
            }}
          >
            {info ? 'Show Less' : 'Read More'}
          </button>
        </p>

        <div className="flex justify-center">
          <button
            className="text-m text-red-700 border-red-700 bg-transparent rounded-md hover:text-white hover:bg-red-700 px-5 py-2 mt-2 mx-auto"
            onClick={() => {
              console.log('remove tour', id);
              removeTour(id);
            }}
          >
            Remove tour
          </button>
        </div>
      </div>
    </article>
  );
}

export default ToursCard;
