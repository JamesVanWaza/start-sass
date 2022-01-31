/*! For license information please see signin.js.LICENSE.txt */
(()=>{var __webpack_modules__={"./src/js/signin.js":()=>{eval('// // Firebase App (the core Firebase SDK) is always required and must be listed first\n// import firebase from "firebase/app";\n\n// // Add the Firebase products that you want to use\n// import "firebase/auth";\n// import "firebase/analytics";\n// import "firebase/firestore";\n// import "firebase/functions";\n// import "firebase/messaging";\n// import "firebase/performance";\n// import "firebase/storage";\n// import "firebase/database";\n// import "firebase/remote-config";\n\n// // Firebase Project Config \n// // For Firebase JS SDK v7.20.0 and later, measurementId is optional\n// const firebaseConfig = {\n//     apiKey: "AIzaSyC2fSgvBKn_kfTA-YA_oNSnuv2T9IFJ1LY",\n//     authDomain: "startbootstrap-dostesting.firebaseapp.com",\n//     databaseURL: "https://startbootstrap-dostesting.firebaseio.com",\n//     projectId: "startbootstrap-dostesting",\n//     storageBucket: "startbootstrap-dostesting.appspot.com",\n//     messagingSenderId: "1027318006182",\n//     appId: "1:1027318006182:web:d2d3c1f78038119f170f67",\n//     measurementId: "G-8MTSJ26GN6"\n// };\n\n// // Initialize Firebase\n// firebase.initializeApp(firebaseConfig);\n\n// // let signupbtn = document.querySelector("#signInBtn").addEventListener(\'click\', signInWithEmailPassword);\n// document.querySelector("#signInBtn").addEventListener(\'click\', signInWithEmailPassword);\n\n// function signInWithEmailPassword() {\n//     // signupbtn.addEventListener("click", e => {\n//     //     e.preventDefault();\n//     // });\n\n//     let email = document.querySelector(\'#mail\').value;\n//     let password = document.querySelector(\'#pword\').value;\n\n//     firebase.auth().signInWithEmailAndPassword(email, password)\n//         .then((userCredential) => {\n//             // Signed in \n//             // var user = userCredential.user;\n//             console.log(\'Welcome back user\');\n//         })\n//         .catch(e => {\n//             console.log(e);\n//             // var errorCode = error.code;\n//             // var errorMessage = error.message;\n//         });\n// }\n\n// // Initialize Cloud Firestore\n// let db = firebase.firestore();\n\n// // Adding a new document - cities\n// let citiesRef = db.collection("cities");\n\n// citiesRef\n//     .doc("SF")\n//     .set({\n//         name: "San Fransicso",\n//         state: "CA",\n//         country: "USA",\n//         capital: false,\n//         population: 86000,\n//         regions: [\n//             "west_coast",\n//             "noracal"\n//         ],\n//         lastUpdatedOn: firebase.firestore.FieldValue.serverTimestamp()\n//     });\n\n// citiesRef\n//     .doc("LA")\n//     .set({\n//         name: "Los Angeles",\n//         state: "CA",\n//         country: "USA",\n//         capital: false,\n//         population: 3900000,\n//         regions: [\n//             "west_coast",\n//             "socal"\n//         ],\n//         lastUpdatedOn: firebase.firestore.FieldValue.serverTimestamp()\n//     });\n\n// citiesRef\n//     .doc("DC")\n//     .set({\n//         name: "Washington DC",\n//         state: null,\n//         country: "USA",\n//         capital: true,\n//         population: 680000,\n//         regions: ["east_coast"]\n//     });\n\n// citiesRef\n//     .doc("TOK")\n//     .set({\n//         name: "Tokyo",\n//         state: null,\n//         country: "Japan",\n//         capital: true,\n//         population: 900000,\n//         regions: [\n//             "kanto",\n//             "honshu"\n//         ]\n//     });\n\n// citiesRef\n//     .doc("BJ")\n//     .set({\n//         name: "Beijing",\n//         state: null,\n//         country: "China",\n//         capital: true,\n//         population: 215000000,\n//         regions: [\n//             "jingijinji",\n//             "hebei"\n//         ]\n//     });\n\n// // Inside the cities add the landmarks\n// citiesRef.doc(\'SF\').collection(\'landmarks\').doc().set({\n//     name: \'Golden Gate Bridge\',\n//     type: \'bridge\'\n// });\n\n// citiesRef.doc(\'SF\').collection(\'landmarks\').doc().set({\n//     name: \'Legion of Honor\',\n//     type: \'museum\'\n// });\n\n// citiesRef.doc(\'LA\').collection(\'landmarks\').set({\n//     name: \'Griffith Park\',\n//     type: \'park\'\n// });\n\n// citiesRef.doc(\'LA\').collection(\'landmarks\').set({\n//     name: \'The Getty\',\n//     type: \'museum\'\n// });\n\n// citiesRef.doc(\'DC\').collection(\'landmarks\').set({\n//     name: \'Lincoln Memorial\',\n//     type: \'memorial\'\n// });\n\n// citiesRef.doc(\'DC\').collection(\'landmarks\').set({\n//     name: \'National Air and Space Museum\',\n//     type: \'museum\'\n// });\n\n// citiesRef.doc(\'TOK\').collection(\'landmarks\').set({\n//     name: \'Ueno Park\',\n//     type: \'park\'\n// });\n\n// citiesRef.doc(\'TOK\').collection(\'landmarks\').set({\n//     name: \'National Museum of Nature and Science\',\n//     type: \'museum\'\n// });\n\n// citiesRef.doc(\'BJ\').collection(\'landmarks\').set({\n//     name: \'Jingshan Park\',\n//     type: \'park\'\n// });\n\n// citiesRef.doc(\'BJ\').collection(\'landmarks\').set({\n//     name: \'Beijing Ancient Observatory\',\n//     type: \'museum\'\n// });\n\n// // Query the landmarks which are a museum\n// let museums = db.collectionGroup(\'landmarks\').where(\'type\', \'==\', \'museum\');\n// museums.get().then((querySnapshot) => {\n//     querySnapshot.forEach((doc) => {\n//         console.log(doc.id, \' => \', doc.data());\n//     });\n// });\n\n// // Order and limit data\n// let docData = {\n//     stringExample: "Hello world!",\n//     booleanExample: true,\n//     numberExample: 3.14159265,\n//     dateExample: firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),\n//     arrayExample: [5, true, "hello"],\n//     nullExample: null,\n//     objectExample: {\n//         a: 5,\n//         b: {\n//             nested: "foo"\n//         }\n//     }\n// };\n\n// db.collection("data").doc("one").set(docData).then(() => {\n//     console.log("Document successfully written!");\n// });\n\n// // Create an initial document to update\n// let frankDocRef = db.collection("users").doc("names");\n// frankDocRef.set({\n//     name: "Frank",\n//     favorites: {\n//         food: "Pizza",\n//         color: "Blue",\n//         subject: "recess",\n//     },\n//     age: 12\n// });\n\n// // To update age and favorite color\n// db.collection("users").doc("names").update({\n//     age: 13,\n//     "favorites.color": "Red"\n// }).then(() => {\n//     console.log("Document successfully updated");\n// });\n\n// // Update elements in an array\n// let washingtonRef = db.collection("cities").doc("DC");\n\n// // Atomically add a new region to the "regions" array field\n// washingtonRef.update({\n//     regions: firebase.firestore.FieldValue.arrayUnion("greater_virginia")\n// });\n\n// // Atomically remove a region from the "regions" array field\n// washingtonRef.update({\n//     regions: firebase.firestore.FieldValue.arrayRemove("east_coast")\n// });\n\n// // Increment a numeric value\n// washingtonRef.update({\n//     population: firebase.firestore.FieldValue.increment(75)\n// });\n\n// // Get multiple documents from a collection\n// db.collection("cities").where("capital", "==", true)\n//     .get()\n//     .then((querySnapshot) => {\n//         querySnapshot.forEach((doc) => {\n//             console.log(doc.id, " => ", doc.data());\n//         });\n//     })\n//     .catch((error) => {\n//         console.log("Error getting documents: ", error);\n//     });\n\n\n// // Get realtime updates with Firestore\n// db.collection("cities")\n//     .doc("SF")\n//     .onSnapshot((doc) => {\n//         console.log("Current data: ", doc.data());\n//     });\n\n// // Listen to multiple documents in a collection\n// db.collection("cities").where("state", "==", "CA")\n//     .onSnapshot((querySnapshot) => {\n//         let cities = [];\n//         querySnapshot.forEach((doc) => {\n//             cities.push(doc.data().name);\n//         });\n//         console.log("Current cities in CA: ", cities.join(", "));\n//     });\n\n// // Using the in, not-in and array-contains-any\n// // Listen to multiple documents in a collection - query returns every city document where the country field is set to USA or Japan\n// db.collection("cities").where(\'country\', \'in\', [\'USA\', \'Japan\'])\n//     .onSnapshot((querySnapshot) => {\n//         let cities = [];\n//         querySnapshot.forEach((doc) => {\n//             cities.push(doc.data().name);\n//         });\n//         console.log("Current cities in USA and Japan");\n//     });\n\n// // cities not in USA or Japan\n// db.collection("cities").where(\'country\', \'not-in\', [\'USA\', \'Japan\'])\n//     .onSnapshot((querySnapshot) => {\n//         let cities = [];\n//         querySnapshot.forEach((doc) => {\n//             cities.push(doc.data().name);\n//         });\n//         console.log("Current cities not in USA and Japan");\n//     });\n\n// // Order By Query the first 3 cities alphabetically - Todo its still not working \n// // citiesRef.orderBy("name").limit(3);\n\n// // Order By Query the first 3 cities descending - Todo its still not working\n// // citiesRef.orderBy("name", "desc").limit(3);\n\n\n// // View changes between snapshots\n// db.collection("cities").where("state", "==", "CA")\n//     .onSnapshot((snapshot) => {\n//         snapshot.docChanges().forEach((change) => {\n//             if (change.type === "added") {\n//                 console.log("New city: ", change.doc.data());\n//             }\n//             if (change.type === "modified") {\n//                 console.log("Modified city: ", change.doc.data());\n//             }\n//             if (change.type === "removed") {\n//                 console.log("Removed city: ", change.doc.data());\n//             }\n//         });\n//     });\n\n// /** Creating and running a transaction - they fo not modify application state */\n// // Create a reference to the SF doc.\n// let keDocRef = db.collection("cities").doc("KE");\n\n// // Uncomment to initialize the doc.\n// keDocRef.set({ population: 50 });\n\n// function createTranscaction() {\n//     return db.runTransaction((transaction) => {\n//         // This code may get re-run multiple times if there are conflicts.\n//         return transaction.get(keDocRef).then((keDoc) => {\n//             if (!keDoc.exists) {\n//                 throw "Document does not exist!";\n//             }\n\n//             // Add one person to the city population.\n//             /** Note: this could be done without a transaction\n//                    by updating the population using FieldValue.increment() */\n//             let newPopulation = keDoc.data().population + 110;\n//             transaction.update(keDocRef, { population: newPopulation });\n//         });\n//     }).then(() => {\n//         console.log("Transaction successfully committed!");\n//     }).catch((error) => {\n//         console.log("Transaction failed: ", error);\n//     });\n// }\n\n// createTranscaction();\n\n// let sfDocRef = db.collection("cities").doc("SF");\n\n// function checkPopulation() {\n//     db.runTransaction((transaction) => {\n//         return transaction.get(sfDocRef).then((sfDoc) => {\n//             if (!sfDoc.exists) {\n//                 throw "Document does not exist!";\n//             }\n\n//             var newPopulation = sfDoc.data().population + 1;\n//             if (newPopulation <= 1000000) {\n//                 transaction.update(sfDocRef, { population: newPopulation });\n//                 return newPopulation;\n//             } else {\n//                 return Promise.reject("Sorry! Population is too big.");\n//             }\n//         });\n//     }).then((newPopulation) => {\n//         console.log("Population increased to ", newPopulation);\n//     }).catch((err) => {\n//         // This will be an "population is too big" error.\n//         //console.error(err);\n//     });\n// }\n\n// checkPopulation();\n\n// /** \n//  * Batched Writes \n//  * */\n// // Get a new write batch\n// let batch = db.batch();\n\n// // Set the value of \'NYC\'\n// let nycRef = db.collection("cities").doc("NYC");\n// batch.set(nycRef, { name: "New York City" });\n\n// // Update the population of \'SF\'\n// let sfRef = db.collection("cities").doc("SF");\n// batch.update(sfRef, { "population": 1000000 });\n\n// // Add the city \'LA\'\n// let laRef = db.collection("cities").doc("LA");\n// batch.set(laRef, { name: "Los Cabos" });\n\n// // Delete the city \'LA\'\n// let laRef2 = db.collection("cities").doc("LA");\n// batch.delete(laRef2);\n\n// // Commit the batch\n// batch.commit().then(() => {\n//     console.log(\'Succesful batch\');\n// });\n\n//# sourceURL=webpack://start-sass/./src/js/signin.js?')}},__webpack_exports__={};__webpack_modules__["./src/js/signin.js"]()})();