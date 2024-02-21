import axios from 'axios';
import { useSnackbar } from 'notistack';

import { useCallback, useMemo } from 'react';

import { Container } from './styles';

import { CardContent, Typography } from '@mui/material';
import Button from '@mui/material-next/Button';

import { Input } from '@components/input';

import { IFaucet } from '@src/types/api';

import useInput from '@hooks/useInput';

const Transfer = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [faucet, onChange] = useInput<IFaucet>({ accountAddress: '', balance: 0 });
  const { accountAddress, balance } = faucet;

  const showToast = useCallback(({ variant, message }: { variant: 'success' | 'error'; message: string }) => {
    enqueueSnackbar(message, {
      variant,
      anchorOrigin: { vertical: 'top', horizontal: 'right' }
    });
  }, []);

  const onSubmit = useCallback(() => {
    console.log(faucet);
    axios
      .post(
        '/api/faucet',
        {
          accountAddress
        },
        { withCredentials: true }
      )
      .then(() => {
        showToast({ variant: 'success', message: 'Your Barrel Faucet request accepted.' });
      })
      .catch((err) => {
        showToast({ variant: 'error', message: err.response.data === '' ? 'Check the network.' : err.response.data });
      });
  }, [accountAddress, balance]);
  const disabled = useMemo(() => !accountAddress, [accountAddress]);
  return (
    <Container>
      <CardContent>
        <>
          <Typography variant="h5" sx={{ mb: 1.5 }}>
            Barrel Faucet
          </Typography>
          <Typography sx={{ mb: 1 }} color="text.secondary">
            The Barrel Faucet runs on Testnet.
          </Typography>

          <Input
            fullWidth
            label="Account Address"
            value="accountAddress"
            placeholder="Please put your wallet address here"
            name="accountAddress"
            onChange={onChange}
          />
          <Input
            label="Barrel Balance"
            name="balance"
            value="balance"
            type="number"
            placeholder="0.000000"
            disabled={true}
            defaultValue="10"
            fullWidth
            onChange={onChange}
          />
        </>

        <div className="btn-wrapper">
          <Button disabled={disabled} className="button" size="large" variant="filled" onClick={onSubmit}>
            Run Faucet
          </Button>
        </div>
      </CardContent>
    </Container>
  );
};

export default Transfer;