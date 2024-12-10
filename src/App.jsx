import "./App.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [box, setBox] = useState(false);

  const handleYesClick = () => {
    window.alert("Congratulations!! You are Gay XD");
  };

  // Swap buttons
  const changer = (isNoClicked) => {
    if (isNoClicked) {
      setBox((prevState) => !prevState);
    }
  };

  return (
    <BrowserRouter basename="/PersonalProj/">
      <div className="h-screen flex justify-center items-center">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 text-center">
          <h1 className="text-white text-center my-3 text-2xl">
            Are you Stupid 🤔?
          </h1>

          {/* for buttons */}
          <div className="flex justify-center space-x-4">
            {box ? (
              <>
                {/* "No" button */}
                <button
                  className="outline-none bg-blue-500 py-0.5 px-8 mx-3 shrink-0 text-white rounded-xl active:bg-blue-700 active:scale-95 active:shadow-inner"
                  onClick={() => changer(true)}
                >
                  No
                </button>

                {/* "Yes" button */}
                <button
                  onClick={handleYesClick}
                  className="outline-none bg-blue-500 py-0.5 px-8 mx-3 shrink-0 text-white rounded-xl active:bg-blue-700 active:scale-95 active:shadow-inner"
                >
                  Yes
                </button>
              </>
            ) : (
              <>
                {/* "Yes" button */}
                <button
                  onClick={handleYesClick}
                  className="outline-none bg-blue-500 py-0.5 px-8 mx-3 shrink-0 text-white rounded-xl active:bg-blue-700 active:scale-95 active:shadow-inner"
                >
                  Yes
                </button>

                {/* "No" button */}
                <button
                  className="outline-none bg-blue-500 py-0.5 px-8 mx-3 shrink-0 text-white rounded-xl active:bg-blue-700 active:scale-95 active:shadow-inner"
                  onClick={() => changer(true)}
                >
                  No
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
