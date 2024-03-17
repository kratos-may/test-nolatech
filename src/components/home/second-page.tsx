import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '@/components/styled-button'
import { data } from './second-page.data'
import { ImageCardItem } from '@/components/second-page'


const HomePopularCourse: FC = () => {
  return (
    <Box
      id="popular-course"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: 14,
        backgroundColor: 'background.default',
        height: '100vh'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'flex-start' },
            textAlign: 'center'
          }}
        >
          <Typography variant="h1" sx={{ mt: { xs: 0, md: -5 }, fontSize: { xs: 30, md: 48 }, marginLeft: 'auto', marginRight: 'auto', marginBottom: 3 }}>
            Lorem ipsum
          </Typography>
        </Box>
        <Box
          sx={{
            width: '70%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'flex-start' },
            textAlign: 'center',
            marginTop: 4,
            marginLeft: '15%'
          }}
        >
          <Typography variant="subtitle2" sx={{ mt: { xs: 0, md: -5 }, marginLeft: 'auto', marginRight: 'auto', marginBottom: 3 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima facere suscipit nesciunt pariatur, molestiae quae consequuntur consequatur nostrum. Expedita, necessitatibus sunt? Placeat quam velit deleniti! Iure non maiores placeat!
          </Typography>
        </Box>
        <Grid container spacing={13}>
          {data.map((item, index) => (
            <Grid key={index} item xs={12} md={4}>
              <ImageCardItem key={String(item.id)} item={item} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ '& button': { mr: 2 }, marginTop: '5%', paddingLeft: '45%' }}>
          <StyledButton color="default" size="large" variant="contained">
            LEARN MORE
          </StyledButton>
        </Box>
      </Container>
    </Box>
  )
}

export default HomePopularCourse
