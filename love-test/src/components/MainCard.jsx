import image from "../assets/pictures/picture.png";
import happy from "../assets/pictures/happy.gif";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainCard() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [absolute, setAbsolute] = useState(false);

  const handlePosition = () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 100));
    if (absolute === false) {
      setAbsolute(true);
    }
    setPosition({ x: x, y: y });
  };

  const notify = () =>
    toast(
      <div>
        <img src={happy} />
        <h2 style={{ color: "black" }}>Biliyordumm</h2>
      </div>
    );

  return (
    <div
      style={{
        backgroundColor: "#9dc1d5",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "100%",
        maxWidth: "800px",
        minHeight: "100vh",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={1}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "auto",
          maxWidth: "90vw",
          padding: "0 10px",
          zIndex: 9999,
        }}
      />

      <img src={image} />
      <h2>Merhaba Aşkımm</h2>
      <h3>Beni seviyor musun?</h3>
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          style={{
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            color: "purple",
            backgroundColor: "pink",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
          onClick={notify}
        >
          Evettttt
        </button>
        <button
          style={{
            position: absolute ? "absolute" : "static",
            top: position.y,
            left: position.x,
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            color: "purple",
            backgroundColor: "pink",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
          onClick={handlePosition}
        >
          Hayır
        </button>
      </div>
    </div>
  );
}

export default MainCard;
