import "./Header.css";

function Header() {
    return (
    <header className='app-header'>
        <a href='/'>react-testing</a>
        <span></span>
        <a href='transactions'>Transactions</a>
        {/* <a href='transactions'>Test 2</a>
        <a href='transactions'>Test 3</a> */}
    </header>

    )
}

export default Header