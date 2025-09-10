// src/lib/firestoreFunctions.js
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase"; // import Firestore from firebase.js

const productsCollection = collection(db, "products");

// GET: Fetch all products
export const getProducts = async () => {
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// ADD: Add a new product
export const addProduct = async (product) => {
  const docRef = await addDoc(productsCollection, product);
  return { id: docRef.id, ...product };
};

// UPDATE
export const updateProduct = async (id, updatedData) => {
  const productDoc = doc(db, "products", id);
  await updateDoc(productDoc, updatedData);
};

// DELETE
export const deleteProduct = async (id) => {
  const productDoc = doc(db, "products", id);
  await deleteDoc(productDoc);
};
