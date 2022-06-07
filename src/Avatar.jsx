import { createEffect, createSignal } from 'solid-js'

const Avatar = () => {
  const [avatar, setAvatar] = createSignal(null)

  const uploadAvatar = async (event) => {
    try {
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      // store b64 in localstorage
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div style={{ border: '1px solid black' }}>
      <label
        htmlFor="single"
        style={{
          background: 'yellow',
          cursor: 'pointer',
        }}
      >
        <img
          src={avatar() ?? `https://place-hold.it/64x64`}
          alt={avatar() ? 'Avatar' : 'No image'}
          style={{
            height: 64,
            width: 64,
            border: '1px solid red',
            display: 'block',
          }}
        />
      </label>

      <span style={{ display: 'none' }}>
        <input
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
        />
      </span>
    </div>
  )
}

export default Avatar

// Todo: add dynamic initials avatar (image) component based on username
