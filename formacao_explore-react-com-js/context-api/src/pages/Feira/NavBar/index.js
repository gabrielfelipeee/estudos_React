import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';


import { useCarrinhoContext } from 'commom/context/Carrinho';

export default function NavBar() {
  const { quantidadeDeProdutos } = useCarrinhoContext();

  return (
    <Nav>
      <Logo />
      <IconButton disabled={!quantidadeDeProdutos}>
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