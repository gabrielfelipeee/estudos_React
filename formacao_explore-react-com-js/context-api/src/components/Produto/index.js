import { Container } from './styles';
import { memo, useContext } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';



import { CarrinhoContext } from 'commom/context/Carrinho';



function Produto({ nome, foto, id, valor, unidade }) {

  const { carrinho, setCarrinho } = useContext(CarrinhoContext);


  const addProduto = (novoProduto) => {
    // Ver se o produto já existe
    const temOProduto = carrinho.some(produto => produto.id === novoProduto.id);


    if (!temOProduto) {
      novoProduto.quantidade = 1;
      return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto]);
    } else {
      setCarrinho(carrinhoAnterior => carrinhoAnterior.map(produto => {
        if (produto.id === novoProduto.id) {
          produto.quantidade ++;
        }
        return produto;
      }));
    }
  };


  return (
    <Container>
      <div>
        <img
          src={`/assets/${foto}.png`}
          alt={`foto de ${nome}`}
        />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton
          color="secondary"
        >
          <RemoveIcon />
        </IconButton>
        <IconButton
          onClick={() => addProduto({ nome, foto, id, valor })}
        >
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  )
}
export default memo(Produto);
