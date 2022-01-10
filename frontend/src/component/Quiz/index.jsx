import { useContext } from "react"
import { DataContext } from "../../context/context"
import { useParams, useNavigate } from 'react-router-dom'

const Quiz = () => {
    const {number} = useParams()
    const {data, addResp , respArray}=useContext(DataContext)
    let navigate=useNavigate();

    const sendRes = (number,res) => {
        addResp(res)
        const newNumber=parseInt(number)+1
        console.log(number,data.length)
        if(parseInt(number)!=data.length-1){
            navigate('/quiz/'+newNumber)
        }else{
            navigate('/results')
        }
    }
    // console.log('security',number,respArray.length)
    // if(number!=respArray.length){
       
    //     navigate('/quiz/'+respArray.length)
    // }

    return (
        <div className="Quizz">
            <div className="Quizz__container">
                <img className="Quizz__container__img" src={data[number].photo}/>
                <div className="Quizz__container__question">
                    {data[number].question}
                </div>
                <ul className="Quizz__container__response">
                    {data[number]["availableResponses"].map((res,index)=>
                        <li key={index} onClick={()=>sendRes(number,index)}>{res}</li>)}
                </ul>

            </div>
        </div>
    )
}

export default Quiz