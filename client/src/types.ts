export type StatDoc = {
  totalParticipants: number;
  teamsRegistered: number;
  projectsSubmitted: number;
  activeNow: number;
  prizePool?: number;
  eventPhase?: string;
  lastUpdated?: unknown;
  hackathonStartTime?: any;
};

export type Team = {
  id: string;
  teamId?: string;
  name: string;
  members: string[];
  score: number;
  status: "ideation" | "building" | "testing" | "submitted";
  lastActive?: unknown;
  department?: string;
  problemStatement?: string;
};

export type Announcement = {
  id: string;
  message: string;
  type: "info" | "urgent";
  timestamp?: unknown;
};

export type ScheduleItem = {
  id: string;
  title: string;
  time: string;
  status: "upcoming" | "live" | "completed";
};

export type ActivityItem = {
  id: string;
  message: string;
  type: "submission" | "mentor" | "join" | "announcement";
  timestamp?: unknown;
};

export type GalleryItem = {
  id: string;
  imageUrl: string;
  uploadedBy: string;
  timestamp?: unknown;
};

export type DepartmentAnalytics = {
  department: string;
  participants: number;
};

export type SubmissionTrend = {
  label: string;
  submissions: number;
};

export type ActiveUsersPoint = {
  label: string;
  activeUsers: number;
};
