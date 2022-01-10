import { Link } from 'react-router-dom'


const WelcomeQuiz = () => {
    return (
        <div className="WelcomeQuizz">
            <div>
                <p>Bienvenue au Quizz, cliquez quand vous serez prêt !</p>
            </div>
            <Link to="/quiz/0">
                <button>START</button>
            </Link>
        </div>
    )
}

export default WelcomeQuiz