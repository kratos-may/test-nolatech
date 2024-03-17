import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import Divider from '@mui/material/Divider'
import { Navigation } from '../navigation'

interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  {
    label: 'days',
    value: '170',
  },
  {
    label: 'hours',
    value: '13',
  },
  {
    label: 'minutes',
    value: '39',
  },
  {
    label: 'Seconds',
    value: '29',
  }
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color: 'white', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="#1FD34E" variant="h5">
        {label}
      </Typography>
    </Box>
  )
}

const HomeHero: FC = () => {
  return (
    <Box id="hero" sx={{ width: '100%', position: 'relative' }}>
      <Box
        sx={{
          pt: 3,
          height: '80vh',
          width: '100%',
          backgroundImage: `url('/images/Prb-Header.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' }, display: 'grid', justifyContent: 'end' }}>
          <Grid item xs={12} md={12}>
            <Navigation />
          </Grid>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 5 }}>
                <Typography
                  component="h3"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 30, md: 62 },
                    fontWeight: 'bold',
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'white',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    LOREM IPSUM
                    <br />
                  </Typography>
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'black',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'white',
                    }}
                  >
                    LOREM IPSUM DOLOR
                    <br />
                  </Typography>
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'white',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    LOREM IPSUM
                  </Typography>
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 } }}>
                <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="contained">
                    WHAT IS NEXT
                  </StyledButton>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: '#12762C', width: '100%', boxShadow: 2, py: 2, px: 7, display: 'flex' }}>
        <Box sx={{ width: '30%' }} >
          <Typography variant="h2" sx={{ color: 'white', lineHeight: 1.3, ml: 3 }}>
            Lorem ipsum, dolor sit amet consectetur
          </Typography>
        </Box>
        <Box sx={{ width: '70%', display: 'flex', justifyContent: 'space-between', ml: 2 }} >
          <Grid container>
            {exps.map((item) => (
              <Grid key={item.value} item xs={12} md={3} >
                <ExpItem item={item} />
                <Divider orientation="vertical" flexItem sx={{ backgroundColor: 'red' }} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeHero
