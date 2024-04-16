import { TextField } from '@mui/material'
import React from 'react'

export default function InputForm(props) {

  const labelStyles = { color: '#a9a9a9' }
  const inputStyles = { color: '#000', backgroundColor: '#eeeeee', boxShadow:"0 4px 4px #acacac", borderRadius: '6px',border:"none", outline:"none" }

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
