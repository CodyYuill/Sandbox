var clientId = `fbfb6a35515341738383500c846de6b3`;
var redirectURI = "https://codyyuill.github.io/Sandbox/"
var queryURL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectURI}`;

var accessToken;

$.ajax({
    url: queryURL,
    method: "GET",
     headers:{
         "Access-Control-Allow-Origin": "https://codyyuill.github.io/Sandbox/"
     }
});

// var secret = `1d7c2749ef7f404f9d5b398a5b1ad410`;
// var authURL = `https://accounts.spotify.com/api/token?grant_type=client_credentials`
// $.ajax({
//     url: authURL,
//     method: "POST",
//     headers: {
//         "Content-Type": `application/x-www-form-urlencoded`,
//         Authorization: 'Basic' + btoa(clientId +':'+secret)
//     },
//     //body: `grant_type=client_credentials`
// }).done(function(data){

//     console.log("success?" + data);
//     $.ajax({
//         url: `https://api.spotify.com/v1/search?query=rush`,
//         method: "GET",
//         headers: {
//             Authorization:  `Bearer ${clientId}:${secret}`
//         }
//     }).done(function(data) {
//         console.log(data);
//     });
// }).fail(function(data){
//     console.log(data);
//     console.log(data.responseText);
// });

// // fetch(authURL, {
// //     method: "POST",
// //     headers: {
// //         "Content-Type": `application/x-www-form-urlencoded`,
// //         Authorization: 'Basic' + btoa(clientId +':'+secret)
// //     },
// //     body: `grant_type=client_credentials`
// // }).then(response =>{
// //     console.log(response);
// // });

// // const APIController = (function(){
// //     const _getToken = async() => {
// //     const result = await fetch(authURL, {
// //         method: "POST",
// //         headers: {
// //             "Content-Type": `application/x-www-form-urlencoded`,
// //             Authorization: 'Basic' + btoa(clientId +':'+secret)
// //         },
// //         body: `grant_type=client_credentials`
// //     })

// //     const data = await result.json();
// //     return data.access_token;
// // }

// // const _getGenres = async(token) => {
// //     const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
// //         method: 'GET',
// //         headers: { 'Authorization' : 'Bearer' + token}
// //     });

// //     const data = await result.json();
// //     return data.categories.items;
// // }

// // return {
// //     getToken(){
// //         return _getToken();
// //     },
// //     getGenres(token) {
// //         return _getGenres(token);
// //     }
// // }
// // })();

// // const APPController = (function(APIctrl){
// //     const loadGenres = async() => {
// //         const token = await APIctrl.getToken();

// //         const genres = await APIctrl.getGenres(token);

// //         console.log(genres);
// //     }
// //     loadGenres();

// // })(APIController);




// //curl -X "POST" -H "Authorization: Basic ZjM4ZjAw...WY0MzE=" -d grant_type=client_credentials https://accounts.spotify.com/api/token
