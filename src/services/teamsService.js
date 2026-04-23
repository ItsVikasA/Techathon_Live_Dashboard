import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase.js";

const teamsCollection = collection(db, "teams");
const validStatuses = ["ideation", "building", "testing", "submitted"];

function assertTeamStatus(status) {
  if (!validStatuses.includes(status)) {
    throw new Error(`Invalid team status: ${status}`);
  }
}

export async function createTeam(team) {
  assertTeamStatus(team.status);

  if (team.teamId) {
    const teamRef = doc(db, "teams", team.teamId);
    await setDoc(teamRef, {
      teamId: team.teamId,
      name: team.name,
      members: team.members ?? [],
      score: team.score ?? 0,
      status: team.status,
      lastActive: serverTimestamp(),
    });
    return team.teamId;
  }

  const created = await addDoc(teamsCollection, {
    teamId: null,
    name: team.name,
    members: team.members ?? [],
    score: team.score ?? 0,
    status: team.status,
    lastActive: serverTimestamp(),
  });

  await updateDoc(created, { teamId: created.id });
  return created.id;
}

export async function updateTeam(teamId, patch) {
  if (patch.status) {
    assertTeamStatus(patch.status);
  }

  const teamRef = doc(db, "teams", teamId);
  await updateDoc(teamRef, {
    ...patch,
    lastActive: serverTimestamp(),
  });
}

export function subscribeTeams(callback) {
  const q = query(teamsCollection, orderBy("lastActive", "desc"));
  return onSnapshot(q, (snapshot) => {
    const teams = snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
    callback(teams);
  });
}
