import ClockLoader from "react-spinners/ClockLoader";
const Loader = ({ isLoading }) => {
  return (
    <div>
      <div className=" absolute bg-white w-[100%] h-[100vh] flex justify-center items-center z-50 top-0 ">
        <ClockLoader color={"#080f16"} loading={isLoading} size={250} />
      </div>
    </div>
  );
};
export default Loader;
