import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase.js";

const scheduleCollection = collection(db, "schedule");
const validStatuses = ["upcoming", "live", "completed"];

function assertScheduleStatus(status) {
  if (!validStatuses.includes(status)) {
    throw new Error(`Invalid schedule status: ${status}`);
  }
}

export async function createScheduleItem({ title, time, status }) {
  assertScheduleStatus(status);

  const created = await addDoc(scheduleCollection, {
    title,
    time,
    status,
  });

  return created.id;
}

export async function updateScheduleItem(itemId, patch) {
  if (patch.status) {
    assertScheduleStatus(patch.status);
  }

  const itemRef = doc(db, "schedule", itemId);
  await updateDoc(itemRef, patch);
}

export function subscribeSchedule(callback) {
  const q = query(scheduleCollection, orderBy("time", "asc"));
  return onSnapshot(q, (snapshot) => {
    const items = snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
    callback(items);
  });
}
