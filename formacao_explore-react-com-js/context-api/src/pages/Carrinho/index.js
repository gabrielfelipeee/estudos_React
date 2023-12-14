import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Snackbar, InputLabel, Select, MenuItem } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Container, Voltar, TotalContainer, PagamentoContainer } from './styles';


import Produto from 'components/Produto';

import { useCarrinhoContext } from 'commom/context/Carrinho';
import { usePagamentoContext } from 'commom/context/Pagamento';


function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const { carrinho } = useCarrinhoContext();
  const { formaPagamaneto, mudarPagamento, tiposDePagamentos } = usePagamentoContext();

  return (
    <Container>
      <Voltar onClick={() => navigate(-1)} />
      <h2>
        Carrinho
      </h2>

      {carrinho.map(produto =>
        <Produto
          key={produto.id}
          {...produto}
        />
      )};

      <PagamentoContainer>
        <Select
          value={formaPagamaneto.id}
          onChange={event => { mudarPagamento(event.target.value) }}
        >
          {tiposDePagamentos.map(pagamento =>
            <MenuItem
              value={pagamento.id}
              key={pagamento.id}
            >
              {pagamento.nome}
            </MenuItem>
          )}
        </Select>
      </PagamentoContainer>
      <TotalContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>R$ </span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ </span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ </span>
        </div>
      </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={
          {
            vertical: 'top',
            horizontal: 'right'
          }
        }
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <MuiAlert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
        >
          Compra feita com sucesso!
        </MuiAlert>
      </Snackbar>
    </Container>
  )
}
export default Carrinho;
