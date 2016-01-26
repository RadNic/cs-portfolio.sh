var Splash = document.getElementById("item1"); //each item is an id for the image, (item 1 is id for splash bros pic)
var Iggy = document.getElementById("item2");
var Green = document.getElementById("item3");
var Bogut = document.getElementById("item4");
var Barnes = document.getElementById("item5");
var Livingston = document.getElementById("item6");
var Splashinfo = document.getElementById("info1");//each info matches with the div under the item so that when clicked, the information will be displayed after the image
var Iggyinfo = document.getElementById("info3");
var Greeninfo = document.getElementById("info5");
var Bogutinfo = document.getElementById("info7");
var Barnesinfo = document.getElementById("info9");
var Livingstoninfo = document.getElementById("info11");

Splash.addEventListener("click", function(){ //each item matches with its info
    Splashinfo.innerHTML = "The Golden State Warriors Splash Brothers consist of their backcourt, starting point guard/MVP <br> Stephen Curry, and starting shooting guard Klay Thompson. Their name comes from <br> their ability to splash the net whenever they shoot a jumpshot or 3-pointer. <br> They do not only hold the record for the most 3-pointers made in a season <br> by an NBA duo, they each hold records of their own that make them a splash brother. <br> Stephen Curry has the record for the most 3-pointers made in a single season (286) <br> while Klay Thompson hold the record for most points made in a quarter (37). <br> They are an unstoppable duo that can score on any team and carry their <br> team to the NBA Finals whenever they want.";
});
                       
Iggy.addEventListener("click", function(){
    Iggyinfo.innerHTML = "Andre Iguodala is the Golden State Warriors Small Forward who has started for a majority of his career. <br> However, during the 2014-2015 season, he had to sacrifice his minutes and come off of the <br> bench and had to adapt to his new role on the team. But this sacrifice paid off and was evident <br> through the postseason when the Warriors went to the playoffs and won their first NBA Finals in 40 years. <br> Iguodala won the Finals MVP because of the sacrifice that he made throughout the season and how much <br> he impacted the team in winning the Finals.";
});

Green.addEventListener("click", function(){
    Greeninfo.innerHTML = "Draymond Green is the Golden State Warriors starting Power Forward despite his height. At 6 foot 7, <br> Draymond Green continues to get rebounds and score over the big men of the game. <br> He plays with a lot of energy and is the energizer bunny of the Warriors. <br> Many players play off of his energy because of the vibe that they get from <br> him. Although he is meant to play big, he can also be a good shooter from the outside. <br> He can perform many post moves, but also take a 3-pointer every now and then. <br> He is also another big reason to why the Warriors are currently leading in the <br> Western Conference and have won the 2014-2015 NBA Finals.";
});

Bogut.addEventListener("click", function(){
    Bogutinfo.innerHTML = "Andrew Bogut is the Golden State Warriors starting Center. They acquired him in 2012 from the Milwaukee <br> Bucks when they traded their star player, Monta Ellis. When he first came to the <br> Warriors, many fans were not too excited about it as he was still coming back <br> from a previous injury and would be able to play yet. However, when he <br> was finally cleared to play, the organization and fans realize that he was the big man <br> that they needed. He was rebounding and dominating the post for them many games <br> which is the piece they were missing. Although he still had injuries while on <br> the Warriors, he was able to maintain his body and finish out the 2014-2015 <br> season to lead the Warriors to a championship.";
});

Barnes.addEventListener("click", function(){
    Barnesinfo.innerHTML = "Harrison Barnes is one of the Golden State Warriors Small Forwards. His nickname is the Black Falcon <br> because of how he posterizes people with his dunks, mostly the big names of the league. <br> But, besides dunking he also contributes to the team in many other ways. His <br> knowledge of the game and his decision making is what keeps him in the <br> starting lineup. He currently is not in the starting lineup because of the fact that he is <br> recovering from a sprained ankle. But he usually is due to how he makes the right <br> decisions at the right times, whether it is to pass, drive, or shoot. His decision <br> making is another factor that led the team to both the post season and to a NBA championship.";
});

Livingston.addEventListener("click", function(){
    Livingstoninfo.innerHTML = "Shaun Livingston is the Golden State Warriors backup 6 foot 7 Point Guard. He knows how to play big <br> against smaller guards in the league, but can also control the ball and the pace of the game <br> when needed to. He has been in the league longer than almost everybody on the <br> team, but the NBA Finals ring that he got from the 2014-2015 season <br> with the Warriors was his first ever. He plays a big role on the team as he is one of the <br> veterans on the team and is able to tell the younger players what to do each game <br> and how to improve as a player and for the team.";
});