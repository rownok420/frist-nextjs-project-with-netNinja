import Footer from "./Footer";
import TopBar from "./TopBar";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <TopBar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
