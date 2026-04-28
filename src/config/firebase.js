import { config as dotenvConfig } from "dotenv";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

dotenvConfig();

function readEnvValue(name) {
  return process.env[name] ?? process.env[`VITE_${name}`];
}

const required = [
  "FIREBASE_API_KEY",
  "FIREBASE_AUTH_DOMAIN",
  "FIREBASE_PROJECT_ID",
  "FIREBASE_STORAGE_BUCKET",
  "FIREBASE_MESSAGING_SENDER_ID",
  "FIREBASE_APP_ID",
];

for (const key of required) {
  if (!readEnvValue(key)) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

const firebaseConfig = {
  apiKey: readEnvValue("FIREBASE_API_KEY"),
  authDomain: readEnvValue("FIREBASE_AUTH_DOMAIN"),
  projectId: readEnvValue("FIREBASE_PROJECT_ID"),
  storageBucket: readEnvValue("FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: readEnvValue("FIREBASE_MESSAGING_SENDER_ID"),
  appId: readEnvValue("FIREBASE_APP_ID"),
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
