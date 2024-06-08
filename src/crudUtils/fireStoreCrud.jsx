"use client";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../config/firestoreConfig";

// Add a new document in collection "cities"
export const createForms = async (formsData, userId) => {
  const docId = Date.now().toString();
  try {
    await setDoc(doc(db, "forms", docId), {
      id: docId,
      createdBy: userId,
      createdAt: new Date().toISOString(),
      formsData: formsData,
    });

    return docId;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getForms = async (userId) => {
  const forms = [];
  const formsRef = collection(db, "forms");
  const q = query(formsRef, where("createdBy", "==", userId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    forms.push(doc.data());
  });

  return forms;
};

export const getOneForm = async (formId) => {
  const docRef = doc(db, "forms", formId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};
//? Path: src/firebaseUtils/fireStoreCrud.jsx
