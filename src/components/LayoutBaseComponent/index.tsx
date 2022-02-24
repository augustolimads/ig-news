import { HeaderComponent } from '../HeaderComponent'

type Props = {
  children: React.ReactNode
}

export const LayoutBaseComponent = ({ children }: Props) => {
  return (
    <div className="relative">
      <HeaderComponent />
      {children}
    </div>
  )
}
