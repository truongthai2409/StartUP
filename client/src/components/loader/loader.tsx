import "./loader.scss";

export default function Loader() {
  console.log("Loader is showing...");
  return (
    <div className="bg-loader">
      <div className="loader"></div>
    </div>
  );
}
