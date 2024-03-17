import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ 
        backgroundColor: 'white', 
        py: { xs: 2, md: 3 },
        paddingLeft: 5, 
        color: 'primary.contrastText',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
       }}
    >
      <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'black', fontWeight: 'bold' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dicta, laboriosam ut quaerat 
        </Typography>
      </Box>
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Image src="/images/companies/grab.png" width={110} height={80} quality={97} />
      </Box>
      <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 }, color: 'black' }}>
        <Typography variant="subtitle2" sx={{ mb: 2, color: 'black', fontWeight: 'bold' }}>
          All rights reserved to Lorem Ipsum 2022
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
