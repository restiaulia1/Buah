import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyBoQovSZfN-IWxwE6SNigeVFl7EyoGo6I8",
  authDomain: "insan-cemerlang-bf3bc.firebaseapp.com",
  projectId: "insan-cemerlang-bf3bc",
  storageBucket: "insan-cemerlang-bf3bc.appspot.com",
  messagingSenderId: "97027282334",
  appId: "1:97027282334:web:f8b63d43a947098d3df28f",
  measurementId: "G-TJFSY9D8R1"
};

// inisialisasi firebase
const aplikasi = initializeApp(firebaseConfig)
const basisdata = getFirestore(aplikasi)


export async function tambahBuah(nama, warna, harga) {
  try {
    // menyimpan data ke firebase
    const refDoKumen = await addDoc(collection(basisdata, "buah"), {
      nama: nama,
      warna: warna,
      harga: harga
    })

    //menampilkan pesan berhasil 
    console.log("berhasil menyimpan data Buah")
  } catch (error) {
    // menampilkan pesan gagal
    console.log("gagal menyimpan data Buah")

  }
}

export async function ambilDaftarbuah() {
  const refDoKumen = collection(basisdata, "buah");
  const kueri = query(refDoKumen, orderBy("nama"));
  const cuplikankueri = await getDocs(kueri);

  let hasilkueri = [];
  cuplikankueri.forEach((dokumen) => {
    hasilkueri.push({
      id: dokumen.id,
      nama: dokumen.data().nama,
      warna: dokumen.data().warna,
      harga: dokumen.data().harga

    })
  })

  return hasilkueri;
}