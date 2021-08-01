import { Container, Heading } from 'theme-ui'
import { NavBar } from '../shared/components/NavBar'

const links = [
  {
    text: 'Início',
    href: '/',
  },
  {
    text: 'Posts',
    href: '/posts',
  },
  {
    text: 'Sobre',
    href: '/sobre',
  },
]

export default function Home() {
  return (
    <>
      <NavBar items={links} />

      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 200px)',
        }}
      >
        <Heading as="h1" sx={{ maxWidth: '50%', textAlign: 'center' }}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Heading>
      </Container>
    </>
  )
}
