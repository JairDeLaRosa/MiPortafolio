export const Nav = () => {
  return (
    <>
      <nav
        id="navbar-example"
        class="navbar px-3 mb-3 fixed-top"
        style={{background: "#1A1A1A"}}
      >
        <div className="container">
          <a class="navbar-brand" href="#" style={{color: "#FFBD7B", fontSize: "30px"}}>
            Jair
          </a>
          <ul class="nav nav-pills" >
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading1" style={{color: "#ffffff"}}>
              Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading2" style={{color: "#ffffff"}}>
                Second
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading3" style={{color: "#ffffff"}}>
                Second
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
