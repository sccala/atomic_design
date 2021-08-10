import React, {memo} from 'react';
import styled from 'styled-components'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { Input } from '../atoms/input/input'

export const SearchInput = memo(() => {
  return (
    <div>
      <SContainer>
        <Input placeholder="input search words" />
        <SButtonWrapper>
          <PrimaryButton>Search</PrimaryButton>
        </SButtonWrapper>
      </SContainer>
    </div>
  )
})
  

const SContainer = styled.div`
  display: flex;
  align-items: center;
`
const SButtonWrapper = styled.div`
  padding-left: 8px;
`
