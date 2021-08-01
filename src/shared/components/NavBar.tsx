import { Container, Flex, Box, Heading, NavLink } from 'theme-ui'

type Link = {
  text: string
  href: string
}

type NavBarProps = {
  items: Link[]
}

const NavBar = ({ items }: NavBarProps) => {
  return (
    <Container
      as="header"
      sx={{
        height: 100,
        display: 'flex',
        alignItems: 'center',
        flexDirection: ['column', 'row', 'row'],
      }}
    >
      <Box>
        <Heading>BRAND</Heading>
      </Box>

      <Flex
        as="ul"
        variant="list"
        sx={{
          ml: 10,
          padding: 0,
          width: ['100%', '50%'],
          jusifyContent: ['space-between', 'space-evelyn'],
        }}
      >
        {items.map((link, index) => (
          <Box
            key={index}
            as="li"
            sx={{
              my: [10, null],
              flex: [1, null],
              textAlign: 'center',
              padding: ['5px 10px', 10],
            }}
          >
            <NavLink href={link.href}>{link.text}</NavLink>
          </Box>
        ))}
      </Flex>
    </Container>
  )
}

export { NavBar }
