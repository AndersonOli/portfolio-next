import { Container, Flex, Box, Heading, Text } from 'theme-ui'
import Link from 'next/link'

export type NavBarLink = {
  text: string
  href: string
}

type NavBarProps = {
  items: NavBarLink[]
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
        <Heading>Brand</Heading>
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
            <Link href={link.href}>
              <Text sx={{ cursor: 'pointer' }}>{link.text}</Text>
            </Link>
          </Box>
        ))}
      </Flex>
    </Container>
  )
}

export { NavBar }
