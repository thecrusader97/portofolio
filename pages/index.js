import NextLink from 'next/link'
import {Container, Box, Heading, Image, useColorModeValue, Button} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () =>{
    return <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center">
            Hello, I&apos;m a full-stack developer  based in Indonesia!
        </Box>
        <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-tittle">
                    Taufiq kurnia
                </Heading>
                <p>TKsan19 (Artist / Developer / Designer / Gamer)</p>
            </Box>
            <Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align="center">
                <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/takuya.jpg" alt="Profile Image"/>
            </Box>
        </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Work
            </Heading>
            <Paragraph>Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{' '}
          <NextLink href="/works/inkdrop">
              Inkdrop
          </NextLink>
          </Paragraph>
          <Box align="center" my={4} >
              <NextLink href="/works">
                  <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My Portofolio</Button>
              </NextLink>
          </Box>
        </Section>
    </Container>
    
}

export default Page