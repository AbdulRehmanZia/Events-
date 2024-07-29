import {
  collection,
  ref,
  db,
  storage,
  uploadBytes,
  getDownloadURL,
  addDoc,
  auth
} from '../utilis/utilis.js';

console.log(auth);
const eventForm = document.getElementById("eventForm");
const submitEvent = document.getElementById("submitEvent");

eventForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  submitEvent.disabled = true
  submitEvent.innerText = "Creating Your Event...."

  const eventInfo = {
    banner: e.target[0].files[0],
    name: e.target[1].value,
    date: e.target[2].value,
    location: e.target[3].value,
    description: e.target[4].value,
    likes:[],
    userId: auth.currentUser.uid,
  };
  console.log(eventInfo);

  const bannerRef = ref(storage, eventInfo.banner.name);
  uploadBytes(bannerRef, eventInfo.banner)
    .then(() => {
      console.log("Event Banner Has Been Uploaded");

      getDownloadURL(bannerRef).then((url) => {
        console.log("We got the url=>", url);
        eventInfo.banner = url;
        console.log(eventInfo);

        //now we add the doucment in event collection

        const eventCollection = collection(db, "Events")
        addDoc(eventCollection, eventInfo).then(()=>{
            console.log("Document Added");
            window.location.href = '../utilis/index.html';
            submitEvent.disabled = false
  submitEvent.innerText = " Create Event"
        })
      });
    })
    .catch((err) => {
      console.log("There was an error while uploading an image");
    });
});
