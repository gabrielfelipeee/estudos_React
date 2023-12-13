import { useNavigate } from 'react-router-dom';
import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';


import { useCarrinhoContext } from 'commom/context/Carrinho';


export default function NavBar() {
  const navigate = useNavigate();
  const { quantidadeDeProdutos } = useCarrinhoContext();

  return (
    <Nav>
      <Logo />
      <IconButton
        disabled={!quantidadeDeProdutos}
        onClick={() => navigate('/carrinho')}
      >
        <Badge
          badgeContent={quantidadeDeProdutos}
          color="primary"
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}