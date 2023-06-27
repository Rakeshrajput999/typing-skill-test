import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className=" h-screen w-screen bg-gradient-to-t from-green-400 via-emerald-600 to-green-950 flex justify-center items-center">
        <div className="md:w-[60vw] md:h-[60vh] ">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default App;
