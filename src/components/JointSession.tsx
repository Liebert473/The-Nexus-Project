import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

export function JointSession() {
  const [participants] = useState(0); // Mock participant count

  const handleSeeAllParticipants = () => {
    // This would typically open a participants list or redirect to participants page
    alert("Participants list would open here!");
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-nexus-darker/30 backdrop-blur border border-nexus-blue/20 rounded-xl max-w-md mx-auto">
      <div className="text-center space-y-4">
        <h2
          className="font-mono text-2xl font-semibold text-nexus-blue"
          data-testid="text-joined-participants-title"
        >
          Joined Participants
        </h2>

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

      {/* See All Participants Button */}
      <Button
        onClick={handleSeeAllParticipants}
        className="bg-nexus-blue hover:bg-nexus-blue/80 text-white font-mono"
        data-testid="button-see-all-participants"
      >
        <Users className="mr-2" size={16} />
        See all participants
      </Button>
    </div>
  );
}
