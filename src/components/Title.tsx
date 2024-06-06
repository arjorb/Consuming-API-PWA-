const Title = () => {
  return (
    <div className="my-10">
      <h1 className="text-2xl text-center font-semibold text-gray-400 my-10">
        Recent Posts
      </h1>
      <div>
      <img
        src="https://images.unsplash.com/photo-1557992260-ec58e38d363c?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="cover image"
        className="w-full h-80 object-cover rounded-lg"
      />
      <h2>Welcome to Posts</h2>
      </div>
    </div>
  );
};

export default Title;
