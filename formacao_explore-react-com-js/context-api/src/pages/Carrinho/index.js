import { useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Snackbar, Select, MenuItem } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Container, Voltar, TotalContainer, PagamentoContainer } from './styles';


import Produto from 'components/Produto';

import { useCarrinhoContext } from 'commom/context/Carrinho';
import { usePagamentoContext } from 'commom/context/Pagamento';
import { UsuarioContext } from 'commom/context/Usuario';


function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const { carrinho, totalCarrinho } = useCarrinhoContext();
  const { saldo } = useContext(UsuarioContext);
  const { formaPagamento, mudarPagamento, tiposDePagamentos } = usePagamentoContext();

  // Só vai fazer o calcular quando saldo e totalCarrinho mudar, (evita ficar renderizando desnecessáriamente)
  const saldoRestante = useMemo(() => saldo - totalCarrinho, [
    saldo, totalCarrinho
  ]);

  return (
    <Container>
      <Voltar onClick={() => navigate('/feira')} />
      <h2>
        Carrinho
      </h2>

      {carrinho.map(produto =>
        <Produto
          key={produto.id}
          {...produto}
        />
      )}

      <PagamentoContainer>
        <Select
          value={formaPagamento.id}
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
          <h2>Total no carrinho: </h2>
          <span>R$ {totalCarrinho}</span>
        </div>
        <div>
          <h2> Seu saldo: </h2>
          <span> R$ {saldo}</span>
        </div>
        <div>
          <h2> Saldo restante: </h2>
          <span> R$ {saldoRestante.toFixed(2)}</span>
        </div>
      </TotalContainer>
      <Button
      disabled={saldoRestante < 0}
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
