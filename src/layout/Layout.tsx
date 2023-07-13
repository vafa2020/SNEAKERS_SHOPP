import { ReactNode } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
type propsLayout = {
  children: ReactNode;
};

const Layout: React.FC<propsLayout> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="p-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
