import { Outlet, Link, useLocation } from 'react-router-dom/'

const Layout = () => {
  const location = useLocation()
  const urlActual = location.pathname

  return (
    <div className="md:flex md: min-h-screen">
        <div className="md:w-1/4 bg-slate-600 px-5 py-10">
            <h2 className="text-4xl font-bold text-center text-white font-inter">CRM Customers</h2>
            <nav className="mt-10">
                <Link 
                    className={`${urlActual === '/customers' ? text-blue-300 : text-white}text-2xl block mt-2 font-inter hover:text-blue-300`}
                    to="/customers"
                >Customers</Link>

                <Link 
                    className="text-white text-2xl block mt-2 font-inter hover:text-blue-300"
                    to="/customers/new"
                >New Customers</Link>
            </nav>
        </div>
        <div className="md:w-3/4">
            <Outlet />
        </div>
        
    </div>
    

  )
}

export default Layout