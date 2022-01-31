import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cors from 'cors';


const corsHandler = cors({ origin: true });

admin.initializeApp(functions.config().firebase);


const sendNotification = (trainer: string) => {

    return new Promise((resolve, reject) => {
        return admin.firestore().collection("userTokens").doc(trainer).get().then((doc: any) => {
            if (doc.exists && doc.data().token) {

                admin.messaging().sendToDevice(doc.data().token, {
                    data: {
                        title: "Client updated weight",
                        sound: "default",
                        body: "Tap to Check"
                    }
                }).then((sent) => {
                    resolve(sent)
                }).catch((err) => {
                    reject(err)
                });


            }
        })
    })

}


exports.updateWeight = functions.https.onRequest((req, res) => {
    corsHandler(req, res, () => {
        console.log(req.body);
        res.set('Access-Control-Allow-Origin', "*")
        res.set('Access-Control-Allow-Methods', 'GET, POST')
        res.status(200).send("Trainer Notified");

        // const postId = JSON.parse(request.body).postId;
        const trainer = JSON.parse(req.body).trainer;

        return sendNotification(trainer);

    })
});


const newClientNot = (trainer: string) => {

    return new Promise((resolve, reject) => {
        return admin.firestore().collection("userTokens").doc(trainer).get().then((doc: any) => {
            if (doc.exists && doc.data().token) {

                admin.messaging().sendToDevice(doc.data().token, {
                    data: {
                        title: "You have a new Client",
                        sound: "default",
                        body: "Tap to Check"
                    }
                }).then((sent) => {
                    resolve(sent)
                }).catch((err) => {
                    reject(err)
                });


            }
        })
    })

}


exports.new_client = functions.https.onRequest((request, response) => {

        console.log(request.body);

        response.status(200).send("Trainer Notified");

        // const postId = JSON.parse(request.body).postId;
        const trainer = JSON.parse(request.body).trainer;

        return newClientNot(trainer);

  
});





const func = require('firebase-functions');

exports.daily_job = func.pubsub
    .topic('daily-tick')
    .onPublish((message: any) => {
        console.log("This job is run every day!");
        if (message.data) {
            const dataString = Buffer.from(message.data, 'base64').toString();
            console.log(`Message Data: ${dataString}`);
        }

        admin.firestore().collection("users").get()

            .then((docs: any) => {



                docs.forEach((doc: any) => {

                    const today = new Date().toDateString()
                    const split = today.split(' ').slice(1, 4).join(' ');

                    if (doc.data().role === 1 && doc.data().expiryDate === split) {

                        // Get trainer related to client
                        admin.firestore().collection("users").where("UID", "==", doc.data().trainerID).get()
                            .then((docs2) => {

                                docs2.forEach((doc2: any) => {
                                    const isAvailable: any = doc2.data().isAvailable;
                                    const spacesLeft = doc2.data().spacesLeft + 1;
                                    const clientCount = doc2.data().clientCount - 1;
                                    if (isAvailable === false) {
                                        isAvailable === true;
                                    }
                                    else {
                                        isAvailable === isAvailable;
                                    }




                                    admin.firestore().collection("users").doc(doc2.id).update({
                                        isAvailable: isAvailable,
                                        spacesLeft: spacesLeft,
                                        clientCount: clientCount


                                    }).then(() => {

                                        // Delete client from clientList
                                        admin.firestore().collection("users").doc(doc2.id).collection("clientList").doc(doc.data().UID).delete()
                                            .then(() => {
                                                // Delete Trainer details from client table
                                                admin.firestore().collection("users").doc(doc.id).update({
                                                    hasPaid: false,
                                                    trainerName: "",
                                                    trainerID: "",
                                                    expiryDate: ""

                                                }).then(() => {

                                                    // Delete Previous Messages 

                                                    admin.firestore().collection("chat").doc(doc.data().UID).collection("messages").get()
                                                        .then((docs3: any) => {

                                                            docs3.forEach((doc3: any) => {

                                                                admin.firestore().collection("chat").doc(doc.data().UID).collection('messages').doc(doc3.id).delete()
                                                                    .then(() => {
                                                                        admin.firestore().collection("chat").doc(doc.data().UID).delete()
                                                                            .then(() => {
                                                                                admin.firestore().collection("appointments").where("clientID", "==", doc.data().UID).get()
                                                                                    .then((docs5) => {

                                                                                        docs5.forEach((doc5) => {
                                                                                            admin.firestore().collection("appointments").doc(doc5.id).delete()
                                                                                                .catch((err) => {
                                                                                                    console.log(err)
                                                                                                })
                                                                                        })
                                                                                    }).catch((err) => {
                                                                                        console.log(err)
                                                                                    })



                                                                            }).catch((err) => {
                                                                                console.log(err)
                                                                            })

                                                                    }).catch((err) => {
                                                                        console.log(err)
                                                                    })


                                                            })
                                                        }).catch((err) => {
                                                            console.log(err)
                                                        })



                                                }).catch((err) => {

                                                    console.log(err)

                                                })

                                            }).catch((err) => {
                                                console.log(err)
                                            })

                                    }).catch((err) => {

                                        console.log(err)

                                    })





                                })



                            }).catch((err) => {
                                console.log(err)
                            })






                    }

                })

            }).catch((err) => {

                console.log(err)

            })




        return true;
    });

const nodemailer = require('nodemailer')
const mailTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'PocketCoach96@gmail.com',
        pass: 'PocketCoach96'

    }
})

// Renew Reminder email
exports.renew_reminder = func.pubsub
    .topic('daily-tick')
    .onPublish((message: any) => {
        console.log("This job is run every hour!");
        if (message.data) {
            const dataString = Buffer.from(message.data, 'base64').toString();
            console.log(`Message Data: ${dataString}`);
        }


        const today = new Date();
        const added = today.setDate(today.getDate() + 2);
        const newDate = new Date(added).toDateString();
        const split = newDate.split(' ').slice(1, 4).join(' ');
        const emails: any[] = [];


        admin.firestore().collection("users")
            .where("expiryDate", "==", split)
            .get()
            .then((docs) => {

                docs.forEach((doc) => {
                    emails.push(doc.data().email)
                })

                const mailOptions = mailTransport.sendMail({
                    from: '"PocketCoach" <pocketcoach96@gmail.com>',
                    bcc: emails.join(),
                    subject: 'Subscription Expiry',
                    text: 'Subscription is expired in 2 days, sign in and renew'


                });

                console.log(mailOptions);

            }).catch((err) => {

                console.log(err)

            })


        return true;
    });


const notifyWatchers = (userId: string, docId: string) => {

    return new Promise((resolve, reject) => {
        return admin.firestore().collection("userTokens").doc(userId).get().then((doc: any) => {
            if (doc.exists && doc.data().token) {


                admin.messaging().sendToDevice(doc.data().token, {
                    data: {
                        title: "Trainer has become available.",
                        sound: "default",
                        body: "Tap to Check"
                    }
                }).then((sent) => {
                    resolve(sent)
                    admin.firestore().collection("users").doc(docId).update({
                        watchersCount: 0,
                        watchers: []


                    }).then((doc2) => {
                        console.log(doc2)

                    }).catch((err) => {
                        console.log(err)
                    })
                }).catch((err) => {
                    reject(err)
                })


            }
        })
    })




}


// Notify watchers on watch list that trainer is available 
exports.watchlist = func.pubsub
    .topic('hourly-tick')
    .onPublish((message: any) => {
        console.log("This job is run every hour!");
        if (message.data) {
            const dataString = Buffer.from(message.data, 'base64').toString();
            console.log(`Message Data: ${dataString}`);
        }


        admin.firestore().collection("users").where("role", "==", 2)
            .get()
            .then((docs) => {

                docs.forEach((doc) => {
                    const watchersList: any[] = [];
                    if (doc.data().isAvailable == true) {

                        watchersList.push(doc.data().watchers)

                        for (let t of watchersList) {
                            var userID = Object.keys(t).toString()

                            return notifyWatchers(userID, doc.id);

                        }

                    }
                    else {
                        return false;
                    }

                    return false;

                })

            }).catch((err) => {

                console.log(err)

            })



        return true;
    });




const postNotification = (userId: string, type: string) => {

    return new Promise((resolve, reject) => {
        return admin.firestore().collection("userTokens").doc(userId).get().then((doc: any) => {
            if (doc.exists && doc.data().token) {

                if (type === "new_comment") {
                    admin.messaging().sendToDevice(doc.data().token, {
                        data: {
                            title: "A new comment has been made on your post.",
                            sound: "default",
                            body: "Tap to Check"
                        }
                    }).then((sent) => {
                        resolve(sent)
                    }).catch((err) => {
                        reject(err)
                    })
                } else if (type === "new_like") {
                    admin.messaging().sendToDevice(doc.data().token, {
                        data: {
                            title: "Someone liked your post",
                            sound: "default",
                            body: "Tap to Check"
                        }
                    }).then((sent) => {
                        resolve(sent)
                    }).catch((err) => {
                        reject(err)
                    });
                }

            }
        })
    })




}


exports.updatePost = functions.https.onRequest((request, response) => {

        console.log(request.body);
        response.status(200).send("Post Updated");

        // const postId = JSON.parse(request.body).postId;
        const action = JSON.parse(request.body).action;
        const userId = JSON.parse(request.body).userId;

        return postNotification(action, userId);

})


// export const updateLikesCount = functions.https.onRequest((req, res) => {

//     corsHandler(req, res, () => {

//         console.log(req.body);
//         res.set('Access-Control-Allow-Origin', "*")
//         res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
//         res.set('Content-Type', 'application/json')
//         res.set('Accept', 'application/json');
//         res.status(200).send("Post updated");
//         // responseType: 

//         const postId = JSON.parse(req.body).postId;
//         const userId = JSON.parse(req.body).userId;
//         const action = JSON.parse(req.body).action; // 'like' or 'unlike'

//         admin.firestore().collection("posts").doc(postId).get().then((data: any) => {

//             let likesCount = data.data().likesCount || 0;
//             let likes = data.data().likes || [];
//             console.log(likes);

//             let updateData = {} as any;

//             if (action == "like") {
//                 updateData["likesCount"] = ++likesCount;
//                 updateData[`likes.${userId}`] = true;
//             } else {
//                 updateData["likesCount"] = --likesCount;
//                 updateData[`likes.${userId}`] = false;
//             }

//             admin.firestore().collection("posts").doc(postId).update(updateData).then(async () => {

//                 if (action == "like") {
//                     await postNotification(data.data().ownerUID, "new_like");
//                 }

//                 res.status(200).send("Done")
//             }).catch((err) => {
//                 res.status(err.code).send(err.message);
//             })

//         }).catch((err) => {
//             res.status(err.code).send(err.message);
//         })

//     })

// })

export const updateCommentsCount = functions.firestore.document('comments/{commentId}').onCreate(async (event: any) => {
    let data = event.data();

    let postId = data.postID;

    let doc: any = await admin.firestore().collection("posts").doc(postId).get();

    if (doc.exists) {
        let commentsCount = doc.data().commentsCount || 0;
        commentsCount++;

        await admin.firestore().collection("posts").doc(postId).update({
            "commentsCount": commentsCount
        })

        return postNotification(doc.data().ownerUID, "new_comment");

    } else {
        return false;
    }
})


