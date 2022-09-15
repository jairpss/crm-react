import { Outlet, Link, useLocation } from 'react-router-dom/'

const Layout = () => {
  const location = useLocation()
  const urlActual = location.pathname

  return (
    <div className="md:flex md:min-h-screen ">
        <div className="md:w-1/4 bg-gray-800 px-5 py-10 md:rounded-r-3xl">
            <h2 className="text-4xl font-bold text-center text-white font-jakarta">CRM Customers</h2>
            <nav className="mt-10">
                <Link 
                    className={`${urlActual === '/customers' ? 'text-white bg-blue-600 rounded-xl p-3 hover:text-blue-100' : 'text-white'} text-xl px-3 text-white block mt-5 font-jakarta font-semibold hover:text-blue-500`}
                    to="/customers"
                >Customers</Link>

                <Link 
                    className={`${urlActual === '/customers/new' ? 'text-white bg-blue-600 rounded-xl p-3 hover:text-blue-100' : 'text-white'} text-xl px-3 text-white block mt-6 font-jakarta font-semibold hover:text-blue-500`}
                    to="/customers/new"
                >New Customers</Link>
            </nav>
        </div>
        <div className="md:w-3/4 p-10 md:h-screen overflow-scroll bg-gray-50">
            <Outlet />
        </div>
        
    </div>
    

  )
}

export default Layout