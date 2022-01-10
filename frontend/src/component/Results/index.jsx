import { useContext } from 'react'
import { DataContext } from '../../context/context'



const Results = () => {
    const {data, respArray} = useContext(DataContext)
    return (
        <div className="Results">
            <ul>
                {data.map((question,index)=>
                    <li key={index}>
                        <div className="question">{question.question}</div>
                        <div>Your Answer</div>
                        <div>{respArray[index]}</div>
                        {question.goodAnswer==respArray[index] ? <div className="goodAnswer">GoodAnswer !</div> : <div><div className='badAnswer'>BadAnswer :</div><div className="correction">{question.availableResponses[question.goodAnswer]}</div></div>}
                    </li>)}
            </ul>
            <div className="Results__resultat">
                <div>Resultats : <mark>{data.filter((q,index)=>q.goodAnswer==respArray[index]).length}/{data.length}</mark></div>
            </div>
        </div>
    )
}

export default Results