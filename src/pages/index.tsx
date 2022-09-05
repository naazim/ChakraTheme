import type { NextPage } from 'next'

import { Box, Stack } from '@chakra-ui/react'

import { AppHeader } from '../components/app-header'
import { Catalog } from '../features/catalog'
import { ContactForm } from '../features/contact-form'
import { ImageDisplay } from '../features/image-display';

interface IHome {
    query: {
        theme?: string
    };
}

const Home: NextPage<IHome> = ({query}) => {
  console.log('%c query ', 'background: #029640; color: #fff',query)

  return (
    <Stack spacing={0} height='100%'>
      <AppHeader />
      <Box display='flex' flex='1' overflow='hidden' marginTop='0'>
        <Box width='50%' overflow='auto'>
          <Box padding={8}>
            <ContactForm />
              {query.theme}
          </Box>
          <ImageDisplay />
        </Box>
        <Box width='50%' padding={8} backgroundColor='#FBFDFF' overflow='auto'>
          <Catalog />
        </Box>
      </Box>
    </Stack>
  )
}

Home.getInitialProps = async ({query}) => {
    return {
        query
    }
}

export default Home
