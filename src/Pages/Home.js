import React from "react";
import { useDispatch } from "react-redux";
import { useGetProductQuery } from "../Redux/PostApi";
import { addProduct } from "../Redux/PostSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { data } = useGetProductQuery();

  return (
    <div className="container grid grid-cols-3 mt-10 shadow-inner mx-auto h-auto">
      {data?.map((alldata) => (
        <div
          className="h-auto w-56 mb-10 shadow-lg px-4 py-4 mx-auto"
          key={alldata.id}
        >
          <img className="h-24 mx-auto" src={alldata.image} alt="" />
          <h1 className="pt-4 flex justify-center ">{alldata.title}</h1>
          <div className="mt-2 flex justify-center ">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => dispatch(addProduct(alldata))}
            >
              Add
            </button>
            <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
