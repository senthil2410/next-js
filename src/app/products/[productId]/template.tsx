
const Template=({ children }: { children: React.ReactNode })=> {
  return (
    <div>
      {/* <h2>Component  rerenders when the route changes</h2> */}
      {children}
    </div>
  );
}
export default Template;