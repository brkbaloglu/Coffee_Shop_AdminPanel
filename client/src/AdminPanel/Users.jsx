import { useEffect, useState } from 'react'
import axios from 'axios'
const Users = () => {

  const [users, setUsers] = useState([])
  useEffect(() => {
    const getAllReviews = async () => {
      const response = await axios.get("http://localhost:3000/auth/users")
      setUsers(response.data)
      console.log(response);
    }
    getAllReviews()
  }, [])
  return (
    <div className='px-5 mt-5'>
      <div className=''>
          <h3 className='my-5 text-4xl font-bold text-[#3b2316]'>Review List</h3>
        <div className='mt-3'>
          <table className='w-[75%]'>
            <thead>
              <tr>
                <th className="w-[40%] text-start">Users</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, id) => (
                  <tr key={id} className=''>
                    <td className="p-2 border-2 border-gray-200">{user.email}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users