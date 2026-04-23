import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase.js";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

export async function loginAdmin(email, password) {
  if (!ADMIN_EMAIL) {
    throw new Error("ADMIN_EMAIL is not configured in environment variables.");
  }

  const credential = await signInWithEmailAndPassword(auth, email, password);
  const signedInEmail = credential.user.email?.toLowerCase();

  if (signedInEmail !== ADMIN_EMAIL.toLowerCase()) {
    await signOut(auth);
    throw new Error("Access denied: this account is not an admin.");
  }

  return credential.user;
}

export async function logoutAdmin() {
  await signOut(auth);
}

export function subscribeAuthState(callback) {
  return onAuthStateChanged(auth, callback);
}
