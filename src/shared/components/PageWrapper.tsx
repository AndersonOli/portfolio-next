import { Container } from 'theme-ui'
import { NavBar } from '../../shared/components/NavBar'

const PageWrapper = ({ children }: any) => {
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

  return (
    <>
      <Container>
        <NavBar items={links} />
        {children}
      </Container>
    </>
  )
}

export default PageWrapper
