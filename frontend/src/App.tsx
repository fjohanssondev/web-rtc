import { useEffect, useRef } from 'react'
import { Peer } from "peerjs"
import { Button } from '@/components/ui/button'
import { Video, VideoTitle } from '@/components/ui/video'

function App() {
  const peerRef = useRef(new Peer())
  const userVideo = useRef<HTMLVideoElement | null>(null)



  const getMediaAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      if (userVideo.current){
        userVideo.current.srcObject = stream
      }
    } catch (e){
      console.log(e)
    }
  }

  useEffect(() => {
    getMediaAccess()
  }, [userVideo])


  return (
    <>
      <Button onClick={getMediaAccess}>Get media access</Button>
      <Video ref={userVideo} autoPlay muted>
        <VideoTitle>
          John Doe
        </VideoTitle>
      </Video>
    </>
  )
}

export default App
