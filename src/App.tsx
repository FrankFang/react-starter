import { Icon } from '@iconify/react/dist/iconify.js'

export const App: React.FC = () => {
  return (
    <div className="bg-pink-500 border border-black text-lg underline
    p-8 w-96 m-auto"
    >
      Hello world!
      <Icon className="w-[1.2em] h-[1.2em] text-gray-500" icon="mdi-light:home" />
    </div>
  )
}
