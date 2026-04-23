import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebase.js";

const announcementsCollection = collection(db, "announcements");
const validTypes = ["info", "urgent"];

function assertAnnouncementType(type) {
  if (!validTypes.includes(type)) {
    throw new Error(`Invalid announcement type: ${type}`);
  }
}

export async function createAnnouncement({ message, type }) {
  assertAnnouncementType(type);

  const created = await addDoc(announcementsCollection, {
    message,
    type,
    timestamp: serverTimestamp(),
  });

  return created.id;
}

export function subscribeAnnouncements(callback) {
  const q = query(announcementsCollection, orderBy("timestamp", "desc"));
  return onSnapshot(q, (snapshot) => {
    const announcements = snapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    callback(announcements);
  });
}
