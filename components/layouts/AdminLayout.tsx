import AdminNavbar from "../navbar/AdminNavbar"


type AdminLayoutProps = {
    children : any
}

const AdminLayout = ({children} : AdminLayoutProps) => {
    return(
        <div>
            <AdminNavbar />
            <div className="py-12 px-4 md:px-96">
                {children}
            </div>
        </div>
    )
}
export default AdminLayout