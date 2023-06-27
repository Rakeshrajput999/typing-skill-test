import FormComponent from "../component/FormComponent";

const HomePage = () => {
  return (
    <>
      <div className=" w-full h-full bg-gradient-to-br from-orange-300 via-yellow-500 to-orange-200 rounded-lg p-6">
        <div>
          <div className=" text-5xl flex  items-center">TypingTest</div>
          <FormComponent />
        </div>
      </div>
    </>
  );
};
export default HomePage;
