import {
  auth,
  db,
  storage,
  onAuthStateChanged,
  signOut,
  getDoc,
  doc,
  getDocs,
  collection,
  updateDoc,
  arrayUnion,
  arrayRemove,
  uploadBytes,
} from "./utilis.js";

// console.log(auth);
// console.log(storage);

const logoutBtn = document.getElementById("logoutBtn");
const loginLink = document.getElementById("loginLink");
const loginImg = document.getElementById("loginImg");
const eventsCardContainer = document.getElementById("eventsCardContainer");
const createMyEventsBtn = document.getElementById("createMyEventsBtn");
const createEventsButton = document.getElementById("createEventsButton");

getAllEvents();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("uid==>", uid);
    loginImg.style.display = "inline-block";
    loginLink.style.display = "none";
    logoutBtn.style.display = "block";
    createMyEventsBtn.style.display = "inline-block";
    createEventsButton.style.display = "inline-block";
    getUserInfo(uid);
    // ...
  } else {
    // window.location.href = "/auth/login/index.html";
    loginImg.style.display = "none";
    loginLink.style.display = "inline-block";
    logoutBtn.style.display = "none";
    createMyEventsBtn.style.display = "none";
    createEventsButton.style.display = "none";
  }
});

logoutBtn.addEventListener("click", () => {
  signOut(auth);
});

function getUserInfo(uid) {
  const userRef = doc(db, "users", uid);
  getDoc(userRef).then((data) => {
    console.log("data==>", data.id);
    console.log("data==>", data.data());

    loginImg.src = data.data().img;
  });
}

async function getAllEvents() {
  try {
    const querySnapshot = await getDocs(collection(db, "Events"));
    eventsCardContainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);

      const event = doc.data();
      console.log("event=>", event);

      const card = `
      <div class="max-w-md rounded-lg shadow-lg bg-[#FCF6F5FF] border-4 border-[#2BAE66FF] shadow-lg border-opacity-50 h-auto">
        <img class="w-full h-64 object-cover rounded-t-lg border-b-4 border-[#2BAE66FF] border-opacity-50" src="${event.banner}" alt="Event Image">
        <div class="p-6">
          <h3 class="text-lg font-bold text-[#2BAE66FF] mb-2">${event.name}</h3>
          <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt text-[#2BAE66FF]">Location:</i> ${event.location}</p>
          <p class="text-gray-600 mb-2"><i class="fas fa-calendar-alt text-[#2BAE66FF]">Date:</i> ${event.date}</p>
          <p class="text-gray-600 mb-2"><i class="fas fa-info-circle text-[#2BAE66FF]"><b> Description:</b></i></p>
          <p class="text-gray-700 text-sm mb-3">${event.description}</p>
        </div>
      </div>
    `;
        


      // window.likes = likes;
      eventsCardContainer.innerHTML += card;
    });
  } catch (err) {
    alert(err);
  }
}

async function likes(e) {

//   if (auth.currentUser) {
//     const docRef = doc(db, "Events", e.id);
//     updateDoc(docRef, {
//       likes: arrayUnion(auth.currentUser.uid),
//     }).then(() => {
//         alert(currentUser.uid);
//       }).catch((err) => {
//         console.log(err);
//       });
//   } else {
//     window.location.href = "../login/index.html";
//   }

}
