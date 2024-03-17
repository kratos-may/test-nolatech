import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import InputBase from '@mui/material/InputBase'
import Typography from '@mui/material/Typography'
import { StyledButton } from '@/components/styled-button'

const JoinUs: FC = () => {
  return (
    <Box id="join-us" sx={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Box
        sx={{
          pb: { xs: 6, md: 10 },
          paddingRight: '5%',
          paddingLeft: '8%',
          backgroundColor: 'background.paper',
          height: '100vh',
          width: '100%',
          backgroundImage: `url('/images/Join-Us.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
        <Box sx={{ width: '50%' }}>
          <Grid container spacing={2} >
            <Grid item xs={12} md={12}>
              <Typography
                variant="h2"
                sx={{
                  position: 'relative',
                  fontSize: { xs: 50, md: 70 },
                  lineHeight: 2,
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                JOIN US.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  position: 'relative',
                  lineHeight: 1,
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <InputBase
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  width: '100%',
                  height: 48,
                  px: 2,
                  mr: { xs: 0, md: 3 },
                  mb: { xs: 2, md: 0 },
                }}
                placeholder="Name"
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <InputBase
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  width: '100%',
                  height: 48,
                  px: 2,
                  mr: { xs: 0, md: 3 },
                  mb: { xs: 2, md: 0 },
                }}
                placeholder="Surname"
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <InputBase
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  width: '100%',
                  height: 48,
                  px: 2,
                  mr: { xs: 0, md: 3 },
                  mb: { xs: 2, md: 0 },
                }}
                placeholder="Phone"
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <InputBase
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  width: '100%',
                  height: 48,
                  px: 2,
                  mr: { xs: 0, md: 3 },
                  mb: { xs: 2, md: 0 },
                }}
                placeholder="Email"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputBase
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  width: '100%',
                  height: 48,
                  px: 2,
                  mr: { xs: 0, md: 3 },
                  mb: { xs: 2, md: 0 },
                }}
                placeholder="Department"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputBase
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  width: '100%',
                  height: 100,
                  px: 2,
                  mr: { xs: 0, md: 3 },
                  mb: { xs: 2, md: 0 },
                  alignItems: 'start'
                }}
                placeholder="Mensaje"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <StyledButton color="primary" size="-xlarge" variant="contained">
                {`${"I'M IN"}`}
              </StyledButton>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography
                variant="subtitle1"
                sx={{
                  position: 'relative',
                  lineHeight: 1,
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsam inventore vitae ullam
              </Typography>
            </Grid>
          </Grid>
          {/* <Box sx={{ '& button': { mr: 2 }, marginTop: '5%' }}>
            <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
              <StyledButton color="primary" size="large" variant="contained">
                I'M IN
              </StyledButton>
            </ScrollLink>
          </Box>           */}
        </Box>
      </Box>
    </Box>
  )
}

export default JoinUs
