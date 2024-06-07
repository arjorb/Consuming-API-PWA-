import { Link } from "react-router-dom";

const Recommended = () => {
  return (
    <div className="text-center mt-20 text-gray-400">
      <Link
        to={"/"}
        className="text-2xl font-bold flex justify-center text-gray-400"
      >
        Recommended
      </Link>
      <p className="mt-4">This is a description of recommended posts.</p>
    </div>
  );
};

export default Recommended;
