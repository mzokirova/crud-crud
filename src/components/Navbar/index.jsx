import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="shadow-md">
    <div className="container mx-auto flex justify-between items-center  ">
      <h1 className="text-xl">Logoipsum</h1>
      <nav>
        <ul className="flex  justify-center items-center gap-x-12 py-8 ">
          <li><Link to="/">Home</Link></li>
          <li><Link to="create">Create</Link></li>
          <li><Link to="/update">Update</Link></li>
          <li><Link to="/delete">Delete</Link></li>
        </ul>
      </nav>
    </div>

    </div>
  )
}

export default Navbar
