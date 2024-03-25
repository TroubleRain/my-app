import './header.scss'
const Header = ()=>{
    return (
      <header className='container'>
        <h1 className="logo">Название сайта</h1>
        <form className="search" action="#">
          <input placeholder="Введите название" className="search__input" type="text" />
        </form>
        <nav className="navigation">
          <ul className="header-list">
            <li className="header-item">
              <a className="header-link" href='#'>Главная</a>
            </li>
            <li className="header-item">
              <a className="header-link"href='#'>О нас</a>
            </li>
            <li className="header-item">
              <a className="header-link"href='#'>Контакты</a>
            </li>
          </ul>
          <h2>Профиль</h2>
        </nav>
      </header>
    );
}
export default Header