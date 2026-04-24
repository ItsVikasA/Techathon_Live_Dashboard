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
  projectDescription?: string;
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

// ============ TILE SYSTEM TYPES ============

export type TileSize = "sm" | "md" | "lg";

export type TileType =
  | "stats"
  | "eventProgress"
  | "masterClock"
  | "analytics"
  | "countdown"
  | "circularProgress"
  | "leaderboard"
  | "announcements"
  | "schedule"
  | "activityFeed"
  | "quickLinks"
  | "problemStatements"
  | "quickHelp"
  | "teamSpotlight"
  | "ideaBoard"
  | "resourceHub"
  | "helpRequests"
  | "audienceVoting";

export type TileConfig = {
  id: string;
  type: TileType;
  size: TileSize;
  order: number;
  visible: boolean;
};

export type QuickLink = {
  id: string;
  name: string;
  url: string;
  icon?: string;
  timestamp?: unknown;
};

export type ProblemStatement = {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  track?: string;
  timestamp?: unknown;
};

export type HelpRequest = {
  id: string;
  teamName: string;
  message: string;
  status: "open" | "resolved";
  timestamp?: unknown;
};

export type IdeaPrompt = {
  id: string;
  prompt: string;
  category?: string;
  timestamp?: unknown;
};

export type VotePoll = {
  id: string;
  question: string;
  options: { label: string; votes: number }[];
  isActive: boolean;
  timestamp?: unknown;
};

export type ResourceItem = {
  id: string;
  name: string;
  url: string;
  category: "api" | "docs" | "tool" | "template";
  description?: string;
};

// Default tile layout
export const DEFAULT_TILES: TileConfig[] = [
  { id: "tile-progress", type: "eventProgress", size: "lg", order: 0, visible: true },
  { id: "tile-clock", type: "masterClock", size: "sm", order: 1, visible: true },
  { id: "tile-stats", type: "stats", size: "lg", order: 2, visible: true },
  { id: "tile-analytics", type: "analytics", size: "lg", order: 3, visible: true },
  { id: "tile-countdown", type: "countdown", size: "md", order: 4, visible: true },
  { id: "tile-circular", type: "circularProgress", size: "sm", order: 5, visible: true },
  { id: "tile-leaderboard", type: "leaderboard", size: "lg", order: 6, visible: true },
  { id: "tile-announcements", type: "announcements", size: "md", order: 7, visible: true },
  { id: "tile-schedule", type: "schedule", size: "md", order: 8, visible: true },
  { id: "tile-activity", type: "activityFeed", size: "md", order: 9, visible: true },
];

export const TILE_TEMPLATES: { type: TileType; label: string; description: string; icon: string; defaultSize: TileSize }[] = [
  { type: "quickLinks", label: "Quick Links", description: "Custom shortcuts to external resources", icon: "🔗", defaultSize: "sm" },
  { type: "problemStatements", label: "Problem Statements", description: "Browse hackathon challenges", icon: "📋", defaultSize: "md" },
  { type: "quickHelp", label: "Quick Help", description: "Send a message to organizers", icon: "🆘", defaultSize: "sm" },
  { type: "teamSpotlight", label: "Team Spotlight", description: "Highlight trending teams", icon: "⭐", defaultSize: "md" },
  { type: "ideaBoard", label: "Idea Board", description: "Rotating innovation prompts", icon: "💡", defaultSize: "sm" },
  { type: "resourceHub", label: "Resource Hub", description: "APIs, docs, and tools", icon: "📦", defaultSize: "md" },
  { type: "helpRequests", label: "Help Requests", description: "Live team issues feed", icon: "🩹", defaultSize: "md" },
  { type: "audienceVoting", label: "Audience Voting", description: "Live polls and voting", icon: "🗳️", defaultSize: "md" },
  { type: "stats", label: "Stat Cards", description: "Key metrics overview", icon: "📊", defaultSize: "lg" },
  { type: "leaderboard", label: "Leaderboard", description: "Team rankings", icon: "🏆", defaultSize: "lg" },
];
