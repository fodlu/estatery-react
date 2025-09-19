import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function AppLayout() {
  return (
    <div className="layout">
      <Header />

      <section>
        <aside>
          <img
            src="https://slem-propereti-fe-five.vercel.app/assets/Pie%20chart%20_Isometric%202-BDtwfski.svg"
            alt="Logo"
          />
          <h1>Welcome</h1>
          <p>
            Login to get started If not yet registered click on sign up to get
            started
          </p>
        </aside>
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default AppLayout;
