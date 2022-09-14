import firebase, { db } from "../../Firebase-global";

export const uploadProductToFirebase = (file: any) => {
  firebase
    .storage()
    .ref("/images")
    .put(file)
    .then((data) => {
      firebase
        .storage()
        .ref("/image")
        .getDownloadURL()
        .then((url) => {
          console.log(url);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
