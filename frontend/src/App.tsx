
import { Button } from '@/components/ui/button'

function App() {


  const getMediaAccess = async () => {
    await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    
    
  }

  return (
    <>
      <Button onClick={getMediaAccess}>Get media access</Button>
    </>
  )
}

export default App
