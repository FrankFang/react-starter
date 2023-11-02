import { Icon } from '@iconify/react/dist/iconify.js'
import { useUserStore } from '@/stores/user_store'

export const App: React.FC = () => {
  const { user, updateUser } = useUserStore()
  const onClick = () => {
    document.documentElement.classList.toggle('dark')
  }
  const onClickAge = () => {
    updateUser({ age: user.age + 1 })
  }

  return (
    <div className="bg-pink-500 border border-black text-lg p-8 w-96 m-auto dark:bg-black dark:text-white dark:border-white">
      <div className="underline ">
        Hello world!
        <Icon
          className="dark:text-blue-500 w-[1.2em] h-[1.2em] text-gray-500"
          icon="bi:bag-heart-fill"
        />
        <button onClick={onClick}>Dark</button>
      </div>
      <div>
        User Age:
        <button onClick={onClickAge}>{user.age}</button>
      </div>
    </div>
  )
}
