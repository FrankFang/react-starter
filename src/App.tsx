import { Icon } from '@iconify/react/dist/iconify.js'

export const App: React.FC = () => {
  const onClick = () => {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <div className="bg-pink-500 border border-black text-lg underline
    p-8 w-96 m-auto dark:bg-black dark:text-white dark:border-white"
    >
      Hello world!
      <Icon className="dark:text-blue-500 w-[1.2em] h-[1.2em] text-gray-500" icon="mdi-light:home" />
      <button onClick={onClick}>Dark</button>
    </div>
  )
}
