import { shallow } from 'enzyme'
import Home from '../pages'
import { NavBar } from '../shared/components/NavBar'

describe('Homepage test', () => {
  const links = [
    {
      text: 'Test',
      href: '/',
    },
  ]

  const homepage = shallow(<Home description="A text" />)
  const navbar = <NavBar items={links} />

  it('homepage should render correctly', () => {
    expect(homepage.contains('h1'))
    expect(homepage.find('h1').contains('Lorem'))
  })

  it('homepage should contain a navbar', () => {
    expect(homepage.contains(navbar))
  })

  it('navbar should contain a link', () => {
    const navbarRendered = shallow(navbar)
    expect(navbarRendered.html()).toContain(links[0].text)
  })
})
