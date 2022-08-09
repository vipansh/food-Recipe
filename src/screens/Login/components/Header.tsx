const Header = () => {
  return (
    <div className=" w-1/2  bg-gradient-to-tr from-blue-800 to-purple-700 ">
      <div className="flex flex-row">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">
            Its coocking time
          </h1>
          <p className="text-white mt-1">Looking for food recipe</p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
        <h6>Looking for food recipe</h6>
        <p>Its coocking time</p>
        <p>Cook proffesional deshes roght in your kitchen</p>
      </div>
    </div>
  )
}
export default Header
