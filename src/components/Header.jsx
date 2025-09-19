import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link>Market</Link>
      <Link>Search</Link>
      <Link>Map</Link>
      <Link>Notifications</Link>
      <Link>Transactions</Link>
      <Link>Wallet</Link>
      <Link>Profile</Link>
      <Link>Settings</Link>
      <Link>KYC</Link>
      <Link>Company</Link>
      <Link>Contracts</Link>
      <Link>Logout</Link>
    </nav>
  );
}

export default Header;
