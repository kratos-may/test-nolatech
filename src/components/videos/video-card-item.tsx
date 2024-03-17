import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Videos } from '@/interfaces/videos'

interface Props {
  item: Videos
}

const VideoCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        height: 150,
        width: 280,
      }}
    >
      <Box
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
          }}
        >
          <Image src={item.cover} width={280} height={150} alt={'Course ' + item.id} />
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
            <Typography variant="h1" sx={{ mt: { xs: 0, md: -5 }, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', fontSize: { xs: 10, md: 15 }, color: 'black' }}>
              Lorem ipsum dolor sit amet consectetur
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default VideoCardItem
