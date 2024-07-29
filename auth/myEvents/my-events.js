// // import {
// //     auth,
// //     db,
// //     storage,
// //     onAuthStateChanged,
// //     signOut,
// //     getDoc,
// //     doc,
// //     getDocs,
// //     collection,
// //     updateDoc,
// //     arrayUnion,
// //     arrayRemove,
// //     uploadBytes,
// //     query,
// //     where,
// //   } from "../utilis/utilis.js";
  
// //   // console.log(auth);
// //   // console.log(storage);
  
// //   const logoutBtn = document.getElementById("logoutBtn");
// //   const loginLink = document.getElementById("loginLink");
// //   const loginImg = document.getElementById("loginImg");
// //   const eventsCardContainer = document.getElementById("eventsCardContainer");
  
// //   getMyEvents();
  
// //   onAuthStateChanged(auth, (user) => {
// //     if (user) {
// //       // User is signed in, see docs for a list of available properties
// //       // https://firebase.google.com/docs/reference/js/auth.user
// //       const uid = user.uid;
// //       console.log("uid==>", uid);
// //       loginImg.style.display = "inline-block";
// //       loginLink.style.display = "none";
// //       getUserInfo(uid);
// //       getMyEvents(user.uid)
// //       // ...
// //     } else {
// //       // window.location.href = "/auth/login/index.html";
// //       loginImg.style.display = "none";
// //       loginLink.style.display = "inline-block";
// //     }
// //   });
  
// //   logoutBtn.addEventListener("click", () => {
// //     signOut(auth);
// //   });
  
// //   function getUserInfo(uid) {
// //     const userRef = doc(db, "users", uid);
// //     getDoc(userRef).then((data) => {
// //       console.log("data==>", data.id);
// //       console.log("data==>", data.data());
  
// //       loginImg.src = data.data().img;
// //     });
// //   }
  
// //   async function getMyEvents(uid) {
// //     try {
// //         const q = query(collection(db, "events"), where("createdBy", "==", uid));
// //         const querySnapshot = await getDocs(q);
// //           eventsCardContainer.innerHTML = "";
// //       querySnapshot.forEach((doc) => {
// //         console.log(`${doc.id} => ${doc.data()}`);
  
// //         const event = doc.data();
// //         console.log("event=>", event);
  
// //         const card = `
// //         <div class="max-w-sm rounded-lg shadow-lg bg-white h-100">
// //           <img class="w-full h-64 object-cover rounded-t-lg" src="${event.banner}" alt="Event Image">
// //           <div class="p-6">
// //             <h3 class="text-lg font-bold mb-2">${event.name}</h3>
// //             <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt">Location:</i> ${event.location}</p>
// //             <p class="text-gray-600 mb-2"><i class="fas fa-calendar-alt">Date:</i> ${event.date}</p>
// //             <p class="text-gray-600 mb-2"><i class="fas fa-info-circle"><b> Description:</b></i> </p>
// //             <p class="text-gray-700 text-sm mb-3">${event.description}</p>
// //           </div>
// //         </div>
// //       `;
  
// //         // window.likes = likes;
// //         eventsCardContainer.innerHTML += card;
// //       });
// //     } catch (err) {
// //       alert(err);
// //     }
// //   }
  
// // //   async function likes(e) {
// //   //   if (auth.currentUser) {
// //   //     const docRef = doc(db, "Events", e.id);
// //   //     updateDoc(docRef, {
// //   //       likes: arrayUnion(auth.currentUser.uid),
// //   //     }).then(() => {
// //   //         alert(currentUser.uid);
// //   //       }).catch((err) => {
// //   //         console.log(err);
// //   //       });
// //   //   } else {
// //   //     window.location.href = "../login/index.html";
// //   //   }
  
// // //   }
  
// import {
//     auth,
//     db,
//     storage,
//     onAuthStateChanged,
//     signOut,
//     getDoc,
//     doc,
//     getDocs,
//     collection,
//     updateDoc,
//     arrayUnion,
//     arrayRemove,
//     uploadBytes,
//     query,
//     where,
//   } from "../utilis/utilis.js";
  
//   // console.log(auth);
//   // console.log(storage);
  
//   const logoutBtn = document.getElementById("logoutBtn");
//   const loginLink = document.getElementById("loginLink");
//   const loginImg = document.getElementById("loginImg");
//   const eventsCardContainer = document.getElementById("eventsCardContainer");
  
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/auth.user
//       const uid = user.uid;
//       console.log("uid==>", uid);
//       loginImg.style.display = "inline-block";
//       loginLink.style.display = "none";
//       getUserInfo(uid);
//       getMyEvents(uid); // Pass the user ID to the function
//     } else {
//       // User is signed out
//       loginImg.style.display = "none";
//       loginLink.style.display = "inline-block";
//       eventsCardContainer.innerHTML = ""; // Clear events if the user is signed out
//     }
//   });
  
//   logoutBtn.addEventListener("click", () => {
//     signOut(auth);
//   });
  
//   function getUserInfo(uid) {
//     const userRef = doc(db, "users", uid);
//     getDoc(userRef).then((data) => {
//       console.log("data==>", data.id);
//       console.log("data==>", data.data());
  
//       loginImg.src = data.data().img;
//     });
//   }
  
//   async function getMyEvents(uid) {
//     try {
//       // Query to get events created by the current user
//       const q = query(collection(db, "Events"), where("createdBy", "==", uid));
//       const querySnapshot = await getDocs(q);
//       eventsCardContainer.innerHTML = "";
//       querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
  
//         const event = doc.data();
//         console.log("event=>", event);
  
//         const card = `
//           <div class="max-w-sm rounded-lg shadow-lg bg-white h-100">
//             <img class="w-full h-64 object-cover rounded-t-lg" src="${event.banner}" alt="Event Image">
//             <div class="p-6">
//               <h3 class="text-lg font-bold mb-2">${event.name}</h3>
//               <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt">Location:</i> ${event.location}</p>
//               <p class="text-gray-600 mb-2"><i class="fas fa-calendar-alt">Date:</i> ${event.date}</p>
//               <p class="text-gray-600 mb-2"><i class="fas fa-info-circle"><b> Description:</b></i> </p>
//               <p class="text-gray-700 text-sm mb-3">${event.description}</p>
//             </div>
//           </div>
//         `;
//         eventsCardContainer.innerHTML += card;
//       });
//     } catch (err) {
//       alert(err);
//     }
//   }
  
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
    query, 
    where,
    deleteDoc
  } from "../utilis/utilis.js";
  
  // console.log(auth);
  // console.log(storage);
  
  const logoutBtn = document.getElementById("logoutBtn");
  const loginLink = document.getElementById("loginLink");
  const loginImg = document.getElementById("loginImg");
  const eventsCardContainer = document.getElementById("eventsCardContainer");
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log("uid==>", uid);
      loginImg.style.display = "inline-block";
      loginLink.style.display = "none";
      getUserInfo(uid);
      getMyEvents(uid); // Pass the user ID to the function
    } else {
      // User is signed out
      loginImg.style.display = "none";
      loginLink.style.display = "inline-block";
      eventsCardContainer.innerHTML = ""; // Clear events if the user is signed out
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
  
  async function getMyEvents(userId) {
    try {
      const querySnapshot = await getDocs(collection(db, "Events"));
      eventsCardContainer.innerHTML = "";
      querySnapshot.forEach((doc) => {
        const event = doc.data();
        
        // Check if the event belongs to the current user
        if (event.userId === userId) {
          console.log(`${doc.id} => ${event}`);
          const card = `
          <div class="max-w-md rounded-lg shadow-lg bg-[#FCF6F5FF] border-4 border-[#2BAE66FF] shadow-lg border-opacity-50 h-auto">
            <img class="w-full h-64 object-cover rounded-t-lg border-b-4 border-[#2BAE66FF] border-opacity-50" src="${event.banner}" alt="Event Image">
            <div class="p-6">
              <h3 class="text-lg font-bold text-[#2BAE66FF] mb-2">${event.name}</h3>
              <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt text-[#2BAE66FF]">Location:</i> ${event.location}</p>
              <p class="text-gray-600 mb-2"><i class="fas fa-calendar-alt text-[#2BAE66FF]">Date:</i> ${event.date}</p>
              <p class="text-gray-600 mb-2"><i class="fas fa-info-circle text-[#2BAE66FF]"><b> Description:</b></i></p>
              <p class="text-gray-700 text-sm mb-3">${event.description}</p>
              <button onclick='delteEvent(this)' id="${doc.id}" class="bg-red-500 text-white font-bold py-2 px-4 rounded-full border border-black border-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 flex items-center">
                <i id="likeIcon" class="far fa-heart mr-2"></i>
                <span id="likeText">Delete</span>
              </button>
            </div>
          </div>
        `;
        

          window.delteEvent = delteEvent
          eventsCardContainer.innerHTML += card;
        }
      });
    } catch (err) {
      alert(err);
    }

    async function delteEvent(e){
        console.log(e);
        const docRef = doc(db, "Events", e.id)
        await deleteDoc(docRef)
        getMyEvents(auth.currentUser.uid)
    }
  }
  