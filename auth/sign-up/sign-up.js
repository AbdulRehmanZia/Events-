import {
  auth,
  createUserWithEmailAndPassword,
  doc,
  setDoc,
  storage,
  ref,
  db,
  uploadBytes,
  getDownloadURL,
} from "../utilis/utilis.js";

const sumbitForm = document.getElementById("sumbitForm");
const submitBtn = document.getElementById("submitBtn");


sumbitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  const img = e.target[0].files[0];
  const email = e.target[1].value;
  const password = e.target[2].value;
  const firstName = e.target[4].value;
  const lastName = e.target[5].value;
  const phone = e.target[6].value;
  const company = e.target[7].value;
  // console.log(img);

  const userInfo = {
    img,
    email,
    password,
    firstName,
    lastName,
    phone,
    company,
  };

  console.log(userInfo);

  //Creating Account
  submitBtn.disabled = true
  submitBtn.innerText = "loading..."
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user=>", user.uid);

      //Uploading Image
      const userRef = ref(storage, `user/${user.uid}`);
      uploadBytes(userRef, img)
        .then(() => {
          console.log("user image uploaded");
          //getting url of img that we uploaded
          getDownloadURL(userRef)
            .then((url) => {
              console.log("We got a URL", url);

//update userInfo(img) object
              userInfo.img = url

              console.log(user.uid);
              //creating user document reference
              const userDataBaseRef= doc(db, 'users', user.uid)
              console.log(userDataBaseRef);

              //set this document to db
              console.log(userInfo);

              setDoc(userDataBaseRef, userInfo).then(()=>{
                console.log("User Object updated in DB");
                window.location.href = '../utilis/index.html';
                submitBtn.disabled = false
                submitBtn.innerText = "sumbit"    
              
              }).catch((err)=> console.log(err))
             
            })
            .catch((err) => {
              console.log("We cant get the URL from FireBase", err);
              submitBtn.disabled = false
              submitBtn.innerText = "Submit"
            });
        })
        .catch((err) => {
          console.log("Error in uploading image", err);
          submitBtn.disabled = false
          submitBtn.innerText = "Submit"
        });
    })
    .catch((err) => {
      alert(err.message);
      submitBtn.disabled = false
      submitBtn.innerText = "Submit"
    });
});

