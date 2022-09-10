import { Outlet, Link, useLocation } from 'react-router-dom/'

const Layout = () => {
  const location = useLocation()
  const urlActual = location.pathname

  return (
    <div className="md:flex md: min-h-screen">
        <div className="md:w-1/4 bg-gradient-to-r from-gray-600 to-slate-500 px-5 py-10">
            <h2 className="text-4xl font-bold text-center text-white font-inter">CRM Customers</h2>
            <nav className="mt-10">
                <Link 
                    className={`${urlActual === '/customers' ? 'text-blue-400' : 'text-white'} text-2xl text-white block mt-2 font-inter hover:text-blue-400`}
                    to="/customers"
                >Customers</Link>

                <Link 
                    className={`${urlActual === '/customers/new' ? 'text-blue-400' : 'text-white'} text-2xl text-whiteblock mt-2 font-inter hover:text-blue-400`}
                    to="/customers/new"
                >New Customers</Link>
            </nav>
        </div>
        <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
            <Outlet />
        </div>
        
    </div>
    

  )
}

export default Layout