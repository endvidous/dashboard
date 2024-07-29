import "./loading.css";
const LoadingUI = () => {
  return (
    <div className="spinnerContainer">
      <div className="loader">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default LoadingUI;
