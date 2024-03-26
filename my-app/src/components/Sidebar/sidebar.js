import './sidebar.scss'
const Sidebar = ()=>{
    return(
        <div className='genres'>
            <ol className='genres__names'>
                <li className='genres__name'>Фантастика</li>
                <li className='genres__name'>Детектив</li>
                <li className='genres__name'>Комедия</li>
                <li className='genres__name'>Драмма</li>
                <li className='genres__name'>Романтика</li>
                <li className='genres__name'>Историческое</li>
                <li className='genres__name'>Роман</li>
                <li className='genres__name'>Научная фантастика</li>
                <li className='genres__name'>Фэнтези</li>
                <li className='genres__name'>Детская литература</li>
                <li className='genres__name'>Приключения</li>
            </ol>
        </div>
    )
}
export default Sidebar