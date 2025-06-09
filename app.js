// Importa os SDKs do Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  getDocs
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

// Configuração do seu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAW8-0_8zyB6e96iaDTfLjnmG_UsTbcfpQ",
  authDomain: "sparktime-409dc.firebaseapp.com",
  projectId: "sparktime-409dc",
  storageBucket: "sparktime-409dc.appspot.com",
  messagingSenderId: "568892882639",
  appId: "1:568892882639:web:0f3b57aaf705205905c1ba",
  measurementId: "G-TXXP22XR8L"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// === Autenticação ===

export function loginGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

export function loginEmail(email, senha) {
  return signInWithEmailAndPassword(auth, email, senha);
}

export function signupEmail(email, senha) {
  return createUserWithEmailAndPassword(auth, email, senha);
}

export function logout() {
  return signOut(auth);
}

export function onUserChanged(callback) {
  return onAuthStateChanged(auth, callback);
}

// === Tarefas e pontos ===

const getUserRef = () => doc(db, 'usuarios', auth.currentUser.uid);

export async function getUserPoints() {
  const snap = await getDoc(getUserRef());
  return snap.exists() ? (snap.data().pontos || 0) : 0;
}

export async function addPoint(qtd) {
  const ref = getUserRef();
  const snap = await getDoc(ref);
  if (snap.exists()) {
    await updateDoc(ref, { pontos: (snap.data().pontos || 0) + qtd });
  } else {
    await setDoc(ref, { pontos: qtd });
  }
}

export async function getTasks() {
  const querySnapshot = await getDocs(collection(db, 'tarefas'));
  const tasks = [];
  querySnapshot.forEach((docSnap) => {
    tasks.push({ id: docSnap.id, ...docSnap.data() });
  });
  return tasks;
}

export async function toggleTask(taskId, completed) {
  const ref = doc(db, 'tarefas', taskId);
  await updateDoc(ref, { completed });
}
<script>
  const abrir = document.getElementById("abrir-video");
  const modal = document.getElementById("modal-video");
  const fechar = modal.querySelector(".fechar");

  abrir.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "flex";
  });

  fechar.addEventListener("click", function() {
    modal.style.display = "none";
    modal.querySelector("video").pause();
  });

  window.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
      modal.querySelector("video").pause();
    }
  });
</script>
