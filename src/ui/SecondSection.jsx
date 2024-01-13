import { Link } from 'react-router-dom';

function SecondSection() {
  return (
    <div className="relative pt-8">
      <img alt="" src="public\pizza2.png" className="m-auto  mb-6 h-20" />
      <h1 className=" text-center text-3xl uppercase text-orange-400  ">
        Delivering flavor with every order
      </h1>
      <p className="m-auto w-96 text-center text-stone-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam rem
        commodi omnis, facilis impedit veniam! Enim eius modi fugit.
      </p>
      <div className="">
        <Link to="/menu">
          <button
            className="m-auto mt-6 block rounded-none
             border bg-orange-400 p-3
          text-sm font-semibold uppercase text-white 
           hover:border hover:border-orange-400 hover:bg-stone-200 hover:text-orange-400"
          >
            Explore Our Menu
          </button>
        </Link>

        <div className="mx-52  my-8 flex ">
          <div className="w-1/3">
            <h2 className="pb-6 text-2xl font-semibold text-orange-400">
              Openning Times:
            </h2>
            <div className="leading-10">
              <span>Mon - Sat </span>
              <span> ---------------------------- </span>
              <span> 8AM - 7PM</span>
            </div>
            <div className="leading-10">
              <span> Sunday </span>
              <span> ------------------------------- </span>
              <span> Closed</span>
            </div>
          </div>
          <div className="w-1/3">
            <img
              src="pngwing.com (2).png"
              alt="pizza"
              className="m-auto h-72 w-72  translate-y-6 animate-spin-slow duration-100"
            />
          </div>
          <div className="w-1/3">
            <h2 className="mb-2 text-2xl font-semibold text-orange-400  ">
              Find us on Social Media
            </h2>
            <h4 className="mb-2">Instagram</h4>
            <h4 className="mb-2">Twitter</h4>
            <h4 className="mb-2">Youtube</h4>
            <h4 className="mb-2">Facebook</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
