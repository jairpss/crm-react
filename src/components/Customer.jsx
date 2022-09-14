import { useNavigate } from 'react-router-dom'

const Customer = ({customer, handleDelete}) => {

  const {name, company, email, phone, notes, id} = customer
  const navigate = useNavigate()

  return (
    <tr className="border-b hover:bg-slate-50">
        <td className="p-3 font-inter font-medium text-gray-700">{name}</td>
        <td className="p-3 font-inter text-gray-700">
            <p><span className="font-semibold">Email: </span>{email}</p>
            <p><span className="font-semibold">Phone: </span>{phone}</p>
        </td>
        <td className="p-3 font-inter font-medium text-gray-700">{company}</td>
        <td className="p-3">
            <button
                type="button"
                className="bg-teal-400 hover:bg-teal-500 block w-full text-white p-2 font-bold font-jakarta text-xs rounded-full"
                onClick={() => navigate(`/customers/${id}`)}
            >Info</button>

            <button
                type="button"
                className="bg-blue-500 hover:bg-blue-600 block w-full text-white p-2 font-bold font-jakarta text-xs rounded-full mt-2"
                onClick={() => navigate(`/customers/edit/${id}`)}
            >Edit</button>

            <button
                type="button"
                className="bg-pink-400 hover:bg-pink-600 block w-full text-white p-2 font-bold font-jakarta text-xs rounded-full mt-2"
                onClick={() => handleDelete(id)}
            >Delete</button>
        </td>
    </tr>
  )
}
 
export default Customer