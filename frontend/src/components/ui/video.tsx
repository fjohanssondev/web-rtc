import type { VideoHTMLAttributes } from "react"

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  ref: React.RefObject<HTMLVideoElement | null>
}

interface VideoTitleProps {
  children: React.ReactNode
}

function Video({ ref, ...props }: VideoProps) {
  return (
    <div>
      <video ref={ref} {...props} />
    </div>
  )
}

function VideoTitle({ children }: VideoTitleProps){
  return (
    <div>
      {children}
    </div>
  )
}

export { Video, VideoTitle }