import Nav from "../Nav/Nav";

function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
}

export default Layout;
