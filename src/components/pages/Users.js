import React from 'react'
import styled from 'styled-components'
// import { UserContext } from '../../provider/UserProvider'
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { useRecoilState } from 'recoil'
import { SearchInput } from '../molecules/SearchInput'
import { UserCard } from '../organisms/user/UserCard'
import { userState } from '../../store/userState'

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `Fake name${val}`,
    image: 'https://source.unsplash.com/NE0XGVKTmcA',
    email: '12345@example.com',
    phone: '090-1111-1222',
    company: {
      name: 'test company',
    },
    website: 'https://google.com',
  }
})

export const Users = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState)
//   const { userInfo, setUserInfo } = useContext(UserContext)

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin })
  return (
    <SContainer>
      <h2>All users</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>Switch</SecondaryButton>
      <SUserArea>
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} />
        ))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`
