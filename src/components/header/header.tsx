import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SensorsIcon from '@mui/icons-material/Sensors';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Header: FC = () => {
  return (
    <Box sx={{ backgroundColor: '#05BF35' }}>
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>          
          <Box 
            sx={{ backgroundColor: 'red', 
                  width: '10%',
                  py: { xs: 1, md: 1 }, 
                  textAlign: 'center', 
                  fontWeight: 'bold', 
                  color: 'white'}}>
            <Typography variant="h4">
              LIVE <SensorsIcon fontSize='medium' />
            </Typography>
          </Box>
          <Box sx={{ ml: '20px', width: '40%', color: 'white'}}>
            <Typography 
              variant="subtitle1"
              sx={{ fontSize: { xs: 15, md: 30 } }}>
              Lorem, ipsum dolor sit amet 
            </Typography>            
          </Box>
          <Box sx={{ backgroundColor: '#16A23B',  width: '20%', py: { xs: 1, md: 1 }, textAlign: 'center', fontWeight: 'bold', color: 'white'}}>
            <Typography variant="h4">
              JOIN NOW! <PlayCircleOutlineIcon fontSize='medium'/>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
