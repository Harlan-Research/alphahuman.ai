import Link from "next/link"
import Image from "next/image"
import { Dancing_Script } from "next/font/google"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

const DEFAULT_IMAGE_WIDTH = 110
const DEFAULT_IMAGE_HEIGHT = 100

type LogoProps = {
  variant?: "image" | "script"
  width?: number
  height?: number
  className?: string
  /** Script variant only: text size (e.g. "text-2xl", "text-3xl") */
  scriptClassName?: string
}

export function Logo({
  variant = "image",
  width = DEFAULT_IMAGE_WIDTH,
  height = DEFAULT_IMAGE_HEIGHT,
  className,
  scriptClassName = "text-2xl md:text-3xl font-semibold text-foreground",
}: LogoProps) {
  const content =
    variant === "script" ? (
      <span className={`${dancingScript.className} ${scriptClassName}`}>
        AlphaHuman
      </span>
    ) : (
      <Image
        src="/logos/logo-dark.png"
        alt="AlphaHuman Logo"
        width={width}
        height={height}
        className={className}
      />
    )

  return (
    <Link href="/" className="flex items-center">
      {content}
    </Link>
  )
}
