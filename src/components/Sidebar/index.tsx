const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="flex flex-col w-full mb-2">
        <div className="flex items-center space-x-5 bg-sideBarHoverBg px-7 py-2.5 cursor-pointer bg-gray-500">
          <h2 className="text-sm font-semibold">Home</h2>
        </div>

        <div className="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer hover:bg-gray-100">
          <h2 className="text-sm">Explore</h2>
        </div>

        <div className="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer hover:bg-gray-100 ">
          <h2 className="text-sm">Subscriptions</h2>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
