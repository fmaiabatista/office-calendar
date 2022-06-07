import { createSignal, createEffect } from 'solid-js'
import { debounce } from '@solid-primitives/scheduled'
import Avatar from './Avatar'

const User = () => {
  const [username, setUsername] = createSignal(
    localStorage.getItem('username') ?? ''
  )

  createEffect(() => username() && localStorage.setItem('username', username()))

  const handleInput = debounce(setUsername, 1000)

  return (
    <div id="User-container">
      <Avatar />
      {/* should be a button that when clicked opens upload modal */}
      {/* once loaded, will store in localstorage */}
      {"Hi, "}
      <input
        placeholder={username() || localStorage.getItem('username') || 'name'}
        value={username()}
        onInput={(e) => handleInput(e.currentTarget.value)}
      />
    </div>
  )
}

export default User
