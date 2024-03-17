import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { StyledButton } from '@/components/styled-button'

const Man: FC = () => {
  return (
    <Box id="man" 
        sx={{ pb: { xs: 6, md: 10 }, 
          height: '100vh', 
          paddingTop: '7%',  
          paddingLeft: '10%', 
          backgroundColor: '#05BF35' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography
            component="h2"
            sx={{
              position: 'relative',
              fontSize: { xs: 50, md: 70 },
              lineHeight: 1,
              fontWeight: 'bold',
              color: 'white'
            }}
          >
            Lorem ipsum dolor sit amet consectetur
            <br/>
          </Typography>
          <Box sx={{ '& button': { mr: 2 }, marginTop: '5%' }}>
            <StyledButton color="default" size="xlarge" variant="contained" >
              LOREM IPSUM DOLOR SIT
            </StyledButton>
          </Box>
          <Box sx={{ '& button': { mr: 2 }, marginTop: '5%' }}>
            <StyledButton color="secondary" size="large" variant="contained">
              LOREM IPSUM DOLOR SIT AMET
            </StyledButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={8} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box sx={{ width: { xs: '100%', md: '90%', marginLeft: 'auto', marginRight:'auto' } }}>
            <Image src="/images/Pic5.png" width={620} height={630} quality={97} alt="Testimonial img" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Man
