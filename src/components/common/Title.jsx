import { Typography } from '@pankod/refine-mui'
import React from 'react'

const Title = ({ title }) => {
    return (
        <Typography
            fontSize={25}
            fontWeight={700}
            color="#808191"
            letterSpacing={2}
            sx={{ textTransform: 'inherit' }}
        >
            {title}
        </Typography>
    )
}

export default Title