import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { SecondaryButton } from '../atoms/button/SecondaryButton'

export const Top = () => {
  const history = useHistory()

  const onClickAdmin = () =>
    history.push({
      pathname: '/users',
      state: { isAdmin: true },
    })

  const onClickGeneral = () =>
    history.push({
      pathname: '/users',
      state: { isAdmin: false },
    })

  return (
    <SContainer>
      <h2>Top page</h2>
      <SecondaryButton onClick={onClickAdmin}>Admin User</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>General User</SecondaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`
