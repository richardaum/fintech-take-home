import { HeaderBackground } from '@/shared/assets'

import { HeaderActions } from './HeaderActions'
import { HeaderTopbar } from './HeaderTopbar'
import { HeaderWallet } from './HeaderWallet'

function Header() {
  return (
    <header
      className="bg-bg-accent text-content-on-color flex flex-col items-center bg-cover bg-center bg-no-repeat px-4 pt-2 text-center"
      style={{
        backgroundImage: `url(${HeaderBackground})`,
      }}
    >
      <section className="w-full max-w-[400px] px-4">
        <HeaderTopbar />
        <HeaderWallet className="mt-6" />
        <HeaderActions className="mt-12 mb-[-44px]" />
      </section>
    </header>
  )
}

export { Header }
