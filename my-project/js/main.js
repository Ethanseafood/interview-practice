// let request = new XMLHttpRequest();

// request.open("GET", "https://api.github.com/users/Ethanseafood/repos", true);

// request.onload = function () {
//   let data = JSON.parse(this.response);

//   let statusHTML = "";
//   $.each(data, function (i, status) {
//     statusHTML += "<tr>";
//     statusHTML += "<td>" + status.id + "</td>";
//     statusHTML += "<td>" + status.name + "</td>";
//     statusHTML += "<td>" + status.html_url + "</td>";
//     statusHTML += "<td>" + status.description + "</td>";
//     statusHTML += "</tr>";
//   });

//   $("tbody").html(statusHTML);
// };

// request.send();
import fetch from 'node-fetch';
async function getRepo() {
  const clientIdAndSecret =
    "Ethanseafood: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";
  const base64 = Buffer.from(clientIdAndSecret).toString("base64");

  const targetUrl = "https://api.github.com/users/Ethanseafood/repos"
  //console.log(targetUrl);
  const userDetails = await fetch(targetUrl, {
    method: "GET",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Language": "en_US",
        Accept: "application/vnd.github.v3+json",
        Authorization: `Basic ${base64}`,
      },
  });
//   return userDetails.json();
   return JSON.parse(userDetails);
}

(async () => {
  const result = await getRepo();
  console.log("users =", result.id);
})();
