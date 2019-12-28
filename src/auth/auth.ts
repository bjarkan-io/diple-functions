import * as functions from "firebase-functions";
import firestore from "../firestore";

const userCreated = functions.auth.user().onCreate(async user => {
  await firestore
    .collection("users")
    .doc(user.uid)
    .create({
      id: user.uid,
      metadata: user.metadata.toJSON(),
      phoneNumber: user.phoneNumber,
      email: user.email,
      emailVerified: user.emailVerified,
      providers: user.providerData
    });
});

const userDeleted = functions.auth.user().onDelete(async user => {
  await firestore
    .collection("users")
    .doc(user.uid)
    .collection("commands")
    .doc("suspend")
    .create({
      date: Date.now()
    });
});

export { userCreated, userDeleted };
