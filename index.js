import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore"
// const { credentials } = require('./credentials.js'); = The old way
import { credentials } from "./credentials.js";

initializeApp({
    credential: cert(credentials)
})

const db = getFirestore()

const car = {make: 'Audi', model: 'a3', year: 2018, color: 'grey'}

db.collection('cars').add(car)
