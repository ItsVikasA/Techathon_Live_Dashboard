import {
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase.js";

const statsRef = doc(db, "stats", "dashboard");

export async function upsertStats({
  totalParticipants,
  teamsRegistered,
  projectsSubmitted,
  activeNow,
}) {
  await setDoc(
    statsRef,
    {
      totalParticipants,
      teamsRegistered,
      projectsSubmitted,
      activeNow,
      lastUpdated: serverTimestamp(),
    },
    { merge: true }
  );
}

export async function patchStats(patch) {
  await updateDoc(statsRef, {
    ...patch,
    lastUpdated: serverTimestamp(),
  });
}

export function subscribeStats(callback) {
  return onSnapshot(statsRef, (snapshot) => {
    callback(snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null);
  });
}
