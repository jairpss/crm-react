import { useParams } from 'react-router-dom'

const InfoCustomer = () => {
  const { id } = useParams()

  console.log(id)
  return (
    <div>Info Customer</div>
  )
}

export default InfoCustomer