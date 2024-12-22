import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../features/store';

const Nav = styled.nav`
  background-color: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;

const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">E-Shop</Logo>
        <NavLinks>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart ({cartItems.length})</NavLink>
          {user ? (
            <NavLink to="/profile">Profile</NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
