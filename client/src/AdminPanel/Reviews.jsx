import { useEffect, useState } from 'react'
import axios from 'axios'
const Reviews = () => {

  const [reviews, setReviews] = useState([])
  useEffect(() => {
    const getAllReviews = async () => {
      const response = await axios.get("http://localhost:3000/auth/reviews")
      setReviews(response.data)
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
                <th className="w-[20%] text-start">User</th>
                <th className="w-[40%] text-start">User Review</th>
                <th className="w-[20%] text-start">Score</th>
              </tr>
            </thead>
            <tbody>
              {
                reviews.map((review, id) => (
                  <tr key={id} className=''>
                    
                    <td className="p-2 border-2 border-gray-200 flex items-center justify-center flex-col"><img className='w-[150px]' src={review.reviewUserImg} alt="" />{review.reviewUsername}</td>
                    <td className="p-2 border-2 border-gray-200">{review.reviewDescription}</td>
                    <td className="p-2 border-2 border-gray-200 text-center">{review.reviewScore}/10</td>
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

export default Reviews