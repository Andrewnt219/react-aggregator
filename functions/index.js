const functions = require("firebase-functions");
const axios = require("axios");
const cors = require("cors")({ origin: true });

const admin = require("firebase-admin");
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.fetchNews = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "GET") {
      return res.status(403).json({
        message: "Method Not allowed",
      });
    }

    return axios
      .get(
        "http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-29&sortBy=publishedAt&apiKey=5667d202a17947f793e59c4278f8844a"
      )
      .then((res) => {
        const { data } = res;
        return res.status(200).json(data);
      })
      .catch((err) => res.status(500).json({ error: err }));
  });
});

exports.fetch = functions.https.onRequest((req, res) => {
  return res.status(200).send("hi");
});
