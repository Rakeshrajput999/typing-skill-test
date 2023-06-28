import FormComponent from "../component/FormComponent";

const HomePage = () => {
  return (
    <>
      <div className=" w-full md:h-full h-screen bg-gradient-to-br from-orange-300 via-yellow-500 to-orange-200 md:rounded-lg p-6">
        <div>
          <div className=" text-4xl flex  justify-center w-full">
            TypingTest
          </div>
          <FormComponent />
        </div>
      </div>
    </>
  );
};
export default HomePage;
