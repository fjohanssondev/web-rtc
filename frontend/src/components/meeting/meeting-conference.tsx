import { useTracks } from "@livekit/components-react";
import { Track } from "livekit-client";
import { ParticipantVideo } from "@/components/meeting/participant-video";

function MeetingConference() {
  const tracks = useTracks([Track.Source.Camera]);
  console.log("Number of tracks:", tracks.length);
  console.log("Tracks:", tracks);
  return (
    <div className="flex">
      {tracks.map((track) => (
        <ParticipantVideo key={track.publication.trackSid} track={track} />
      ))}
    </div>
  );
}

export { MeetingConference };
