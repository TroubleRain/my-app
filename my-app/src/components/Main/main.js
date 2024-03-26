import '../../../books.json'
import './main.scss'
const Main = ()=>{
    const items = visibleItems.map((e,i)=>{
        return (
            <li key={i} className="list-item">
                <img src="https://rsv.ru/blog/wp-content/uploads/2021/09/knigi-918x516.jpg" alt={e.title} className="list-item__img" />
                <span className="list-item__name">{e.title}</span>                    
                <span className="list-item__autor">{e.author}</span>                    
            </li>
        )
    })
    return (
        <div className="main">
            <h2 className='main__title'>Популярное</h2>
            <ul className="main__list">
                {items}
            </ul>
        </div>
    )
}
export default Main