const express = require("express");
const tools = require("./tools.json");
const argocd = require("./argocd.json");
const kube = require("./dashboard.json");
const app = express();


app.set("view engine", "pug");

// serve static files from the `public` folder
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "FinalCAD",
    tools: tools.totos
  });
});

app.get("/profile", (req, res) => {
  res.render("profile", {
    title: "ArgoCD",
    argocd: argocd.envs
  });
});

app.get("/kube", (req, res) => {
  res.render("kube", {
    title: "kubernetes-dashboard",
    kube: kube.envs
  });
});

const server = app.listen(8080, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});