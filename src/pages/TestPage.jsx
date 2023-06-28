import TestComponent from "../component/TestComponent";
import TimerComponent from "../component/TimerComponent";

const TestPage = () => {
  return (
    <>
      <div className="w-full md:h-full h-screen bg-gradient-to-br from-orange-300 via-yellow-500 to-orange-200 rounded-lg p-6">
        <div>
          <TimerComponent />
          <TestComponent />
        </div>
      </div>
    </>
  );
};
export default TestPage;
