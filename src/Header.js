import logo from './img/pepeOk.png';

const Header = (props) => {
  return (
    <header>
      <img
        className='logo'
        alt='logo'
        title='Pepe Emoji Memory Game'
        src={logo}
      />
      <div className='titleHeader'>
        <h1>Pepe Emoji Memory Game</h1>
        <p>Don't click on the same image more than once.</p>
      </div>
      <div className='scoreDiv'>
        <p>Max Score: 24</p>
        <p>Best Score: {props.bestScore}</p>
        <p>Current Score: {props.score}</p>
      </div>
    </header>
  );
};

export default Header;
