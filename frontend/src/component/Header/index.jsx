import {NavLink} from 'react-router-dom'


const Header = () => {

    return (
        <div className='Header'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/quiz">Quiz</NavLink>
        </div>

    )
}

export default Header