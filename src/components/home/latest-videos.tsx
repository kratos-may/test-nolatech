import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '@/components/styled-button'
import { data } from './latest-videos.data'
import { VideoCardItem } from '@/components/videos'

const HomeLatestVideos: FC = () => {
  return (
    <Box
      id="videos"
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
            Latest Videos
          </Typography>
        </Box>
        <Grid container spacing={13}>
          {data.map((item, index) => (
            <Grid key={index} item xs={12} md={4}>
              <VideoCardItem key={String(item.id)} item={item} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ '& button': { mr: 2 }, marginTop: '5%', paddingLeft: '45%' }}>
          <StyledButton color="primary" size="-xlarge" variant="contained">
            VIEW ALL
          </StyledButton>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeLatestVideos
