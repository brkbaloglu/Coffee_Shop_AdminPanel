import { useEffect, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import axios from "axios"

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const getAllReviews = async () => {
            const response = await axios.get("http://localhost:3000/reviews")
            setReviews(response.data)
            console.log(response)
        }
        getAllReviews()
    }, [])


  return (
    <div>
        <Header />
            <div>
                <h2 className="text-center text-4xl font-bold my-10 text-[#3b2316]">Customer Reviews</h2>
                <div className="grid grid-cols-3 mx-10">
                    {
                        reviews.map((review) => (
                            <div key={review.id} className="flex items-center justify-center flex-col w-[400px] h-[500px] my-5">
                                <img className="w-[300px] h-[200px]" src={review.reviewUserImg} alt="" />
                                <h2 className="text-2xl font-bold text-[#3b2316] my-3">{review.reviewUsername}</h2>
                                <h2>{review.reviewDescription}</h2>
                                <h2>{review.reviewScore}/10</h2> 
                            </div>
                        ))
                    }
                </div>
            </div>
        <Footer />
    </div>
  )
}

export default Reviews