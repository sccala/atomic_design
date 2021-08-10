import styled from 'styled-components'
import { Card } from '../../atoms/card/Card'
import React, { memo } from 'react'
import { UserIconWithName } from '../../molecules/users/UserIconWithName'

export const UserCard = memo((props) => {
  const { user } = props
  return (
    <Card>
      <UserIconWithName height={160} width={160} src={user.image} name={user.name} />
      <SDl>
        <dt>Email</dt>
        <dd>{user.email}</dd>
        <dt>Phone</dt>
        <dd>{user.phone}</dd>
        <dt>Company</dt>
        <dd>{user.company.name}</dd>
        <dt>Web</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  )
})

const SDl = styled.div`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`
