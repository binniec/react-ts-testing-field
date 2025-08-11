import './App.css'

function App() {



  function myButton() {

    return (
      <button>
        I'm a Button
      </button>
    )

  }

  return (
    <>
      {myButton()}

      <h1>About</h1>
      <p className='paragraph'>Hello there.<br/>How do you do?</p>
    </>
  )
}

export default App
