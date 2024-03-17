import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { Carrousel } from '@/interfaces/carrousel'

interface Props {
  item: Carrousel
}

const CarrouselCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'background.paper',
          height: '55vh',
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,                      
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
          }}
        >
          <Image src={item.photo as string} width={570} height={690} alt={'Mentor ' + item.id} />
        </Box>
      </Box>
    </Box>
  )
}
export default CarrouselCardItem
