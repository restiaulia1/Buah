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


export async function tambahBuah(Nama,Warna, Harga) {
  try {
    // menyimpan data ke firebase
    const refDoKumen = await addDoc(collection(basisdata, "Buah"),{
      Nama: Nama,
      Warna: Warna,
      Harga: Harga
    })
    
    //menampilkan pesan berhasil 
    console.log("berhasil menyimpan data Buah")
  } catch (error) {
     // menampilkan pesan gagal
     console.log("gagal menyimpan data Buah")
  
  } 
}

export async function ambilDaftarbuah() {
  const refDoKumen = collection(basisdata, "Buah");
  const kueri = query(refDoKumen, orderBy("Nama"));
  const cuplikankueri = await getDocs(kueri);
  
  let hasilkueri = [];
  cuplikankueri.forEach((dokumen) => {
    hasilkueri.push({
      id: dokumen.id,
      Nama: dokumen.data().Nama,
      Warna: dokumen.data().Warna,
      Harga: dokumen.data().Harga
     
    })
  })
  
  return hasilkueri;
}