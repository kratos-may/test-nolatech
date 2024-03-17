import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { StyledButton } from '@/components/styled-button'
import { Link as ScrollLink } from 'react-scroll'

const News: FC = () => {
  return (
    <Box id="news" sx={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Box
        sx={{
          pb: { xs: 6, md: 10 },
          paddingTop: '7%',
          paddingLeft: '10%',
          backgroundColor: 'background.paper',
          height: '100vh',
          width: '100%',
          backgroundImage: `url('/images/Pic6.png')`,
          backgroundPosition: 'center',
        }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Typography
              variant="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 50, md: 70 },
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
              Lorem ipsum <br /> dolor sit
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
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ '& button': { mr: 2 }, marginTop: '5%' }}>
          <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
            <StyledButton color="primary" size="-xlarge" variant="contained">
              VIEW ALL
            </StyledButton>
          </ScrollLink>
        </Box>
      </Box>
    </Box>
  )
}

export default News
