import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

export function JointSession() {
  const [participants] = useState(8); // Mock participant count

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-nexus-darker/30 backdrop-blur border border-nexus-blue/20 rounded-xl max-w-md mx-auto">
      <div className="text-center space-y-4">
        {/* Participant Counter */}
        <div className="flex items-center justify-center space-x-3">
          <Users className="text-nexus-green" size={24} />
          <Badge
            variant="secondary"
            className="bg-nexus-green/20 text-nexus-green border-nexus-green/30"
            data-testid="badge-participant-count"
          >
            {participants} Participants
          </Badge>
        </div>
      </div>
    </div>
  );
}
