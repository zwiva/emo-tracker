
const Navbar = ({ today }) => {

  return (
    <nav className="navigation__section p-05">
      <h3>
        Mood-Detector
      </h3>
      <div>
        <span className="text-navigation">Today: {today}</span>
      </div>
    </nav>
  )

}

export default Navbar;