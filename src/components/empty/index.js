import animationData from "../../assets/lottie/empty.json";
import Lottie from "react-lottie";
import "./style.scss";

const Empty = ({ style, className }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={`ioeman-empty ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxHeight: "100vh",
        width: "inherit",
        padding: "50px",
        ...style,
      }}
    >
      <div
        className="content"
        style={{
          width: "100%",
          marginBottom: "50px",
        }}
      >
        <Lottie
          options={defaultOptions}
          height="auto"
          isPaused={false}
          isStopped={false}
          isClickToPauseDisabled={true}
          style={{
            marginBottom: "40px",
            maxWidth: "1200px",
            cursor: "default",
          }}
          className="img-fluid"
        />
        <h1>Nothing to show at the moment...</h1>
        <p>But soon this place will be crowded with study material</p>
      </div>
    </div>
  );
};

export default Empty;
