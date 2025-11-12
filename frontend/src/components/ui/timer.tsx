import { useEffect, useState } from "react";
import { Temporal } from "@js-temporal/polyfill";
import { Disc2 } from "lucide-react";

interface TimerProps {
  startDate: Date;
}

function Timer({ startDate }: TimerProps) {
  const [elapsed, setElapsed] = useState("00:00:00");

  useEffect(() => {
    const calculateElapsed = () => {
      const start = Temporal.Instant.fromEpochMilliseconds(startDate.getTime());
      const now = Temporal.Now.instant();

      const duration = now.since(start);

      const hours = Math.floor(duration.total("hours"));
      const minutes = Math.floor(duration.total("minutes")) % 60;
      const seconds = Math.floor(duration.total("seconds")) % 60;

      const formatted = [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0"),
      ].join(":");

      setElapsed(formatted);
    };

    calculateElapsed();

    const interval = setInterval(calculateElapsed, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="bg-neutral-950 dark:bg-accent text-white rounded-full px-3 py-2 text-sm">
      <div className="flex items-center space-x-2">
        <Disc2 className="text-red-400 w-4 h-4" />
        <p>{elapsed}</p>
      </div>
    </div>
  );
}

export { Timer };
