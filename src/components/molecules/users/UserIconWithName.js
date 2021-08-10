import React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { userState } from '../../../store/userState'
// import { UserContext } from '../../../provider/UserProvider'


export const UserIconWithName = (props) => {
  const { src, name } = props
  // const { userInfo } = useContext(UserContext)
  const userInfo = useRecoilValue(userState)
  const isAdmin = userInfo ? userInfo.isAdmin : false

  return (
    <SContainer>
      <SImg height={160} width={160} src={src} alt="profile p ics" />
      <SName>{name}</SName>
      {isAdmin && <SEdit>Edit</SEdit>}
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`

const SImg = styled.img`
  border-radius: 50%;
`

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`

const SEdit = styled.p`
  text-decoration: Underline;
  color: #aaa;
  cursor: pointer;
`
