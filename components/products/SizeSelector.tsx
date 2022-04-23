import { Box, Button } from "@mui/material";
import { FC } from "react";
import { ISize } from "../../interfaces";

interface Props {
  selectedSize?: string;
  sizes: ISize[];

  onSelectedSize: (size: ISize) => void;
}


export const SizeSelector: FC<Props> = ({sizes, selectedSize, onSelectedSize}) => {
  return (
    <Box>
      {
        sizes.map( size => (
          <Button
            variant="contained"
            key={size}
            size='small'
            color={ selectedSize === size ? 'primary' : 'info'}
            onClick={() => onSelectedSize(size) }
          >
            {size}
          </Button>
        ))
      }
    </Box>
  )
}