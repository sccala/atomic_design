import { BrowserRouter } from 'react-router-dom'
import { PrimaryButton } from './components/atoms/button/PrimaryButton'
import { SecondaryButton } from './components/atoms/button/SecondaryButton'
import { SearchInput } from './components/molecules/SearchInput'
import { UserCard } from './components/organisms/user/UserCard'
import { HeaderOnly } from './components/templates/HeaderOnly'
import './styles.css'

const user = {
  name: 'fake name',
  image: 'https://source.unsplash.com/NE0XGVKTmcA',
  email: '12345@example.com',
  phone: '090-1111-1222',
  company: {
    name: 'test company',
  },
  website: 'https://google.com',
}

export default function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderOnly>
          <PrimaryButton>Test</PrimaryButton>
          <SecondaryButton>Search</SecondaryButton>
          <br />
          <SearchInput />
          <UserCard user={user} />
        </HeaderOnly>
      </BrowserRouter>
    </>
  )
}
