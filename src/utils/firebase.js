import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// ​//In the storage section of your project dashboard there should be a link at the top. That goes here.
const firebaseConfig = {
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE, //IMPORTANT: change this to match you app.
};
//  Initialize Firebase
let app;
// Check to see if the app already exists, if not initialize it.
if (!app) {
  app = initializeApp(firebaseConfig);
}
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
//This function is designed to test and upload files to firebase storage.
//File should the actual file object you want uploaded fileDestination is
//the location in the firebase storage you want it to go, must include the file name and extension.
export const uploadToStorage = async (file, fileDestination) => {
  //Create a reference to the full path of the file destination, including the file name
  //The filDestination is the actual location where you want the file stored in the firebase storage.
  //If the file destination does not exists it will be generated with all needed subsequent folders.
  //For example if my fileDestination is images/people/person1.png, and those files don't exist
  //firebase will create a images folder and a people folder inside of that.
  const reference = ref(storage, fileDestination);

  //Finally we take the ref and the file and pass them to uploadByte() which actually uploads the files
  //to the firebase storage.
  let snapshot = await uploadBytes(reference, file);

  //Get the url location of the file in cloud storage
  let url = await getDownloadURL(reference);
  console.log(url);
  return { url, reference, snapshot, fileDestination };
};

//This function will take a src and convert it into a File() object.
export async function srcToFile(src, fileName, mimeType) {
  const res = await fetch(src);
  const buffer = await res.arrayBuffer();
  return new File([buffer], fileName, { type: mimeType });
}
//Here is an example of using the srcToFile function to create a File object from a src file in my current project.
// let image = srcToFile(
//   "/images/people/mixologist1.png",
//   "mixologist1.png",
//   "image/png"
// ).then(res=>res);
//IMPORTANT: If you are using a file input field to upload a file and you are getting the
//file from the input.value it should already be a File object and will not need to be converted
//this function serves to upload files that already exist on your project
export default app;
