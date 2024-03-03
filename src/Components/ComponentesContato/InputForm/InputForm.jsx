import { TextField } from '@mui/material'
import React from 'react'

export default function InputForm(props) {

  const labelStyles = { color: '#fff' }
  const inputStyles = { color: '#fff', backgroundColor: '#242424', boxShadow:"0 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: '8px',border:"none", outline:"none" }

  return (
    <TextField id={props.label} label={props.label} value={props.value} onChange={props.onChange} variant="outlined" 
    color='secondary'
    name={props.name}
    required
    fullWidth
    type={props.type}
    autoComplete="off"
    aria-autocomplete='none'
    InputLabelProps={{
      style: labelStyles,
    }}
    inputProps={{ style: inputStyles }} />
  )
}
