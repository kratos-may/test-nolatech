import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const HomeFirstPage: FC = () => {
  return (
    <Box id="testimonial" sx={{ pb: { xs: 6, md: 10 }, height: '100vh', paddingTop: '7%', paddingLeft: '10%', backgroundColor: 'background.paper' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              position: 'relative',
              fontSize: { xs: 50, md: 70 },
              lineHeight: 1,
              fontWeight: 'bold',
            }}
          >
            Lorem ipsum dolor sit amet
            <br />
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              position: 'relative',
              lineHeight: 1,
              fontWeight: 'bold',
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, explicabo repellat! Debitis, nihil, vero perspiciatis ipsum quibusdam voluptatem rem saepe dolores error ullam sapiente cupiditate beatae quia numquam. Voluptatum, tempora!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, explicabo repellat! Debitis, nihil, vero perspiciatis ipsum quibusdam voluptatem rem saepe dolores error ullam sapiente cupiditate beatae quia numquam. Voluptatum, tempora!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, explicabo repellat! Debitis, nihil, vero perspiciatis ipsum quibusdam voluptatem rem saepe dolores error ullam sapiente cupiditate beatae quia numquam. Voluptatum, tempora!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, explicabo repellat! Debitis, nihil, vero perspiciatis ipsum quibusdam voluptatem rem saepe dolores error ullam sapiente cupiditate beatae quia numquam. Voluptatum, tempora!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box sx={{ width: { xs: '100%', md: '90%' } }}>
            <Image src="/images/Pic1.png" width={520} height={540} quality={97} alt="Testimonial img" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomeFirstPage
