import './App.css';
import Controls from './Controls';
import UserList from './UserList';
import Footer from './Footer';

function App() {

  const date = new Date();
  const currentYear = date.getFullYear();
  const isLoggedIn = true;

  return (
    <div className="App">
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
      {isLoggedIn && (
        <>
          <section>
            <Controls />
          </section>

          <section>
            <UserList />
          </section>

          <section>
            <Footer />
          </section>
        </>
      )}

    </div>
  );
}

export default App;
