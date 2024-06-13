import { TextField, useTheme } from '@mui/material'
import React from 'react'

const Search = () => {
    const themePallet = useTheme()
  return (
    <TextField sx={{
        backgroundColor: themePallet.palette.background.default,
        borderRadius: '27px',
        outline: 'none'
    }}></TextField>
  )
}

export default Search