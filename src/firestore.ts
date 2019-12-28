import * as admin from "firebase-admin";

// Initialize Admin SDK
admin.initializeApp();

const firestore = admin.firestore();

export default firestore;
