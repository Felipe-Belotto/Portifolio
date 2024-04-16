import { TextField } from '@mui/material'
import React from 'react'

export default function TextAreaForm(props) {
  const labelStyles = {
    color: '#a9a9a9'
  };

  const inputStyles = { color: '#000', backgroundColor: '#eeeeee', boxShadow:"0 4px 4px rgba(0, 0, 0, 0.25)" }

  return (
    <TextField
      name={props.name}
      id={props.id}
      label={props.label}
      variant="outlined"
      color='secondary'
      fullWidth
      InputLabelProps={{
        style: labelStyles,
      }}
      inputProps={{ style: inputStyles }}
      autoComplete="off"
      multiline
      onChange={props.onChange}
      value={props.value}
      required
      minRows={5}
      sx={{

        '& .MuiOutlinedInput-root': {
          ...inputStyles,
        }
      }}
    />
  );
}