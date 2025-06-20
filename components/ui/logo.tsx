import Image from "next/image"
import logo from "@/public/images/kri8fit-logo.png"

export default function Logo() {
  return <Image src={logo} alt="logo" width={200} height={100} />
}
