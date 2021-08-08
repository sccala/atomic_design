import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <SHeader>
      <SLink to="/">Home</SLink>
      <SLink to="/users">Users</SLink>
    </SHeader>
  )
}

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`

const SLink = styled(Link)`
  margin: 0 8px;
`
