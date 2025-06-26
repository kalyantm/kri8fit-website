import Image from "next/image"
import logoLight from "@/public/images/kri8fit-logo-light-mode.png"
import logoDark from "@/public/images/kri8fit-logo-dark-mode.png"
import React from "react"

export default function Logo() {
  const [theme, setTheme] = React.useState<string | null>(null)
  React.useEffect(() => {
    console.log(theme)
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [theme])
  return theme && <Image src={theme === "dark" ? logoDark : logoLight} alt="logo" width={200} height={100} />
}
