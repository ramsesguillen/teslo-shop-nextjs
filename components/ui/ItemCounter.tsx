import { AddCircleOutlined, RemoveCircleOutlined } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"
import { FC } from "react"

interface Props {
  maxValue: number,
  currentValue: number,
  updatedQuantity: (value: number) => void;
}

export const ItemCounter: FC<Props> = ({ maxValue, currentValue, updatedQuantity }) => {

  const onChangeValue = (val: number) => {
    if ( val === -1 ) {
      if (currentValue === 1 ) return;
      // else
      return updatedQuantity(currentValue - 1);
    } {
      if (currentValue >= maxValue ) return;
      updatedQuantity(currentValue + 1);
    }
  }


  return (
    <Box display="flex" alignItems="center">
      <IconButton
        onClick={() => onChangeValue(-1) }
      >
        <RemoveCircleOutlined />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: 'center' }}>{ currentValue }</Typography>
      <IconButton
        onClick={() => onChangeValue(1) }
      >
        <AddCircleOutlined />
      </IconButton>
    </Box>
  )
}