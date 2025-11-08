import type { TrackReference } from "@livekit/components-react";
import { useEffect, useRef } from "react";
import { Video } from "@/components/ui/video";

interface ParticipantVideoProps {
  track: TrackReference;
}

function ParticipantVideo({ track }: ParticipantVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && track.publication.track) {
      const mediaStreamTrack = track.publication.track.mediaStreamTrack;
      videoRef.current.srcObject = new MediaStream([mediaStreamTrack]);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [track]);

  return <Video ref={videoRef}>...</Video>;
}

export { ParticipantVideo };
