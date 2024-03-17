import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme, styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import { StyledButton } from '@/components/styled-button'
import { CarrouselCardItem } from '@/components/carrousel'
import { data } from './carrousel.data'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: '-28px !important',
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
        visibility: 'hidden'
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: 'center',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active>div': {
        backgroundColor: 'white',        
      },
    },
  },
}))

const HomeCarrousel: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ 
        height: 10, 
        width: 10, 
        display: 'inline-block', 
        borderRadius: 4,
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: '2px',
        borderStyle: 'solid'}} />
    ),
  }

  return (
    <Box
      id="mentors"
      sx={{
        pt: {
          xs: 3,
          md: 4,
        },
        pb: {
          xs: 4,
          md: 6,
        },
        height: '100vh',
        backgroundColor: '#0A5D3B',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ fontSize: 50, textAlign: 'center', color: 'white'  }}>
          Lorem ipsum dolor sit amet
        </Typography>
        <Slider {...sliderConfig}>
          {data.map((item) => (
            <CarrouselCardItem key={String(item.id)} item={item} />
          ))}
        </Slider>   
        <Box sx={{ '& button': { mr: 2 }, marginTop: '5%', paddingLeft: '40%'}}>
          <StyledButton color="default" size="-xlarge" variant="contained">
            VIEW ALL
          </StyledButton>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeCarrousel
