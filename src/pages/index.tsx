import gql from 'graphql-tag'
import { GetStaticProps } from 'next'
import client from '../shared/libs/useApollo'

import { Container, Heading } from 'theme-ui'

const GET_HOMEPAGE_DESCRIPTION = gql`
  query GetHomePageDescription {
    portfolio_homepage(order_by: { createdAt: asc }) {
      description
    }
  }
`

type HomeProps = {
  description: string
}

export default function Home({ description }: HomeProps) {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 200px)',
        }}
      >
        <Heading as="h1" sx={{ maxWidth: '50%', textAlign: 'center' }}>
          {description}
        </Heading>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const homepage = await client.query({
    query: GET_HOMEPAGE_DESCRIPTION,
  })

  return {
    props: {
      ...homepage.data.portfolio_homepage[0],
    },
  }
}
