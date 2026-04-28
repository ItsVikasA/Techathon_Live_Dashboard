import { config as dotenvConfig } from "dotenv";
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../config/firebase.js";

dotenvConfig();

async function initializeFirestore() {
  // 1) stats collection
  await setDoc(doc(db, "stats", "dashboard"), {
    totalParticipants: 0,
    teamsRegistered: 0,
    projectsSubmitted: 0,
    activeNow: 0,
    lastUpdated: serverTimestamp(),
  });

  // 2) teams collection
  await addDoc(collection(db, "teams"), {
    teamId: "team-alpha",
    name: "Team Alpha",
    members: ["Member 1", "Member 2"],
    score: 0,
    status: "ideation",
    lastActive: serverTimestamp(),
  });

  // 3) announcements collection
  await addDoc(collection(db, "announcements"), {
    message: "Welcome to the hackathon dashboard.",
    type: "info",
    timestamp: serverTimestamp(),
  });

  // 4) schedule collection
  await addDoc(collection(db, "schedule"), {
    title: "Opening Ceremony",
    time: "09:00",
    status: "upcoming",
  });

  // 5) activity collection
  await addDoc(collection(db, "activity"), {
    message: "Team Alpha submitted their first prototype.",
    type: "submission",
    timestamp: serverTimestamp(),
  });

  // 6) gallery collection
  await addDoc(collection(db, "gallery"), {
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    uploadedBy: "Media Team",
    timestamp: serverTimestamp(),
  });

  await addDoc(collection(db, "gallery"), {
    imageUrl: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
    uploadedBy: "Volunteer Desk",
    timestamp: serverTimestamp(),
  });

  await addDoc(collection(db, "gallery"), {
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    uploadedBy: "Stage Crew",
    timestamp: serverTimestamp(),
  });

  // 7) analytics collection
  await setDoc(doc(db, "analytics", "participationByDepartment"), {
    items: [
      { department: "CSE", participants: 128 },
      { department: "ECE", participants: 96 },
      { department: "MECH", participants: 64 },
      { department: "BIZ", participants: 51 },
    ],
    timestamp: serverTimestamp(),
  });

  await setDoc(doc(db, "analytics", "submissionTrends"), {
    items: [
      { label: "Day 1", submissions: 12 },
      { label: "Day 2", submissions: 28 },
      { label: "Day 3", submissions: 46 },
      { label: "Day 4", submissions: 67 },
    ],
    timestamp: serverTimestamp(),
  });

  await setDoc(doc(db, "analytics", "activeUsersOverTime"), {
    items: [
      { label: "09:00", activeUsers: 42 },
      { label: "11:00", activeUsers: 78 },
      { label: "13:00", activeUsers: 64 },
      { label: "15:00", activeUsers: 89 },
      { label: "17:00", activeUsers: 57 },
    ],
    timestamp: serverTimestamp(),
  });

  console.log("Firestore initialization complete.");
}

initializeFirestore().catch((error) => {
  console.error("Failed to initialize Firestore:", error);
  process.exit(1);
});
