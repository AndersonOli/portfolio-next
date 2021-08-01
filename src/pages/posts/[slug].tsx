import { useRouter } from 'next/router'

import { Container } from 'theme-ui'

export default function Post() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Container>
      <h1>{slug}</h1>
    </Container>
  )
}
