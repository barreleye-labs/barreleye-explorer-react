import { ChangeEvent, memo } from 'react';

import { Container } from './styles';

import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';

interface Props {
  name?: string;
  type?: string;
  label?: string;
  defaultValue?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  width?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent) => void;
}
const Input = memo(
  ({ name, width = '50%', type, defaultValue, disabled, label, fullWidth, onChange, placeholder }: Props) => {
    return (
      <Container>
        <FormControl sx={{ m: 1, width }} variant="standard">
          <TextField
            id="fullWidth"
            margin="normal"
            name={name}
            type={type}
            fullWidth={fullWidth}
            label={label}
            placeholder={placeholder}
            disabled={disabled}
            defaultValue={defaultValue}
            onChange={(e) => onChange && onChange(e)}
          />
        </FormControl>
      </Container>
    );
  }
);

export default Input;
