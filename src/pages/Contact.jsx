import ReactPlayer from "react-player";

const Contact = () => {
  return (
    <>
      <p
        className="text-center pt-5"
        style={{
          fontFamily: "PottaOne",
          fontSize: "32px",
          color: "#095183",
          fontWeight: "bold",
        }}
      >
        Contact
      </p>

      {/* Contenedor centrado */}
      <div className="flex justify-center py-10">
        <ReactPlayer
          url="https://i.imgur.com/ST4oEes.mp4"
          controls
          loop
          playing
          width="640px"
          height="360px"
        />
      </div>
    </>
  );
};

export default Contact;
