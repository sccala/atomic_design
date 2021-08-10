import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import {useSetRecoilState} from 'recoil';
import { SecondaryButton } from '../atoms/button/SecondaryButton'
// import { UserContext } from '../../provider/UserProvider'
import { userState } from '../../store/userState';

export const Top = () => {
  const history = useHistory()
  // const { setUserInfo } = useContext(UserContext)
const setUserInfo = useSetRecoilState(userState)
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true })
    history.push('/users')
  }

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false })
    history.push('/users')
  }

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
