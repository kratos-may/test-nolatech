import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SecondPage } from '@/interfaces/secondPage'

interface Props {
  item: SecondPage
}

const ImageCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        height: 350,
        width: 300,
        backgroundColor: '#05BF35',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#05BF35',
          
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
          }}
        >
          <Image src={item.cover} width={300} height={300} alt={'Course ' + item.id} />
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              textAlign: 'center',
              backgroundColor: 'red',
              marginTop: '15%'

            }}
          >
            <Typography variant="h1" sx={{ mt: { xs: 0, md: -5 }, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', fontSize: { xs: 10, md: 15 }, color: 'white' }}>
              LOREM IPSUM
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ImageCardItem
