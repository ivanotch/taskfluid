import Sidebar from "../Sidebar/page";

const Layout = ({ children }: {children: any}) => {
    return (
        <main className="h-[100vh] px-[1rem] py-[1rem] overflow-hidden flex" style={{ margin: '-0.5rem -1rem' }}>
            <Sidebar />
            {children}
        </main>
    )
}

export default Layout;