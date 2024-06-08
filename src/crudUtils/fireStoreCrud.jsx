"use client";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../config/firestoreConfig";
import { textColor } from "@/app/_data/textColor";

// Add a new document in collection "cities"
export const createForms = async (formsData, userId) => {
  const docId = Date.now().toString();
  try {
    await setDoc(doc(db, "forms", docId), {
      id: docId,
      createdBy: userId,
      createdAt: new Date().toISOString(),
      formData: JSON.parse(formsData),
      lastUpdated: new Date().toISOString(),
      colors: {
        textColor: "#000000",
        bgColor: "#ffffff",
        headingColor: "#000000",
        buttonTextColor: "#ffffff",
      },
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

export const updateForm = async (formId, formData) => {
  const docRef = doc(db, "forms", formId);
  try {
    await updateDoc(docRef, {
      formData: formData,
      lastUpdated: new Date().toISOString(),
    });
    return true;
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export const updateColors = async (formId, newColors) => {
  const docRef = doc(db, "forms", formId);
  try {
    await updateDoc(docRef, {
      colors: newColors,
      lastUpdated: new Date().toISOString(),
    });
    return true;
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};
//? Path: src/firebaseUtils/fireStoreCrud.jsx
