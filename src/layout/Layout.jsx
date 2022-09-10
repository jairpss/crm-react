import { Outlet } from 'react-router-dom/'

const Layout = () => {
  return (
    <div className="md:flex md: min-h-screen">
        <div className="md:w-1/4 bg-slate-600 px-5 py-10">
            <h2 className="text-4xl font-bold text-center text-white font-inter">CRM Customers</h2>
            <nav className="mt-10">
                <a 
                    className="text-white text-2xl block mt-2 font-inter hover:text-blue-300"
                    href="/customers"
                >Customers</a>

                <a 
                    className="text-white text-2xl block mt-2 font-inter hover:text-blue-300"
                    href="/customers/new"
                >New Customers</a>
            </nav>
        </div>
        <div className="md:w-3/4">
            <Outlet />
        </div>
        
    </div>
    

  )
}

export default Layout