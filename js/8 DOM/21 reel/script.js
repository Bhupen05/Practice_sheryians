const posts = [
  {
    userprofile: "./image/1.jpeg",
    username: "user_01",
    caption: "Morning grind 💪",
    isFollowed: false,
    isLiked: false,
    likecount: 120,
    commentcount: 15,
    shearcount: 3,
    video: "./video/1.mp4"
  },
  {
    userprofile: "./image/2.jpeg",
    username: "user_02",
    caption: "Code. Sleep. Repeat.",
    isFollowed: true,
    isLiked: true,
    likecount: 540,
    commentcount: 42,
    shearcount: 18,
    video: "./video/2.mp4"
  },
  {
    userprofile: "./image/3.jpeg",
    username: "user_03",
    caption: "No excuses today.",
    isFollowed: false,
    isLiked: true,
    likecount: 89,
    commentcount: 6,
    shearcount: 1,
    video: "./video/3.mp4"
  },
  {
    userprofile: "./image/4.jpeg",
    username: "user_04",
    caption: "Building in silence.",
    isFollowed: true,
    isLiked: false,
    likecount: 230,
    commentcount: 19,
    shearcount: 7,
    video: "./video/4.mp4"
  },
  {
    userprofile: "./image/5.jpeg",
    username: "user_05",
    caption: "Discipline > Motivation",
    isFollowed: false,
    isLiked: false,
    likecount: 64,
    commentcount: 4,
    shearcount: 0,
    video: "./video/5.mp4"
  },
  {
    userprofile: "./image/6.jpeg",
    username: "user_06",
    caption: "Another day, another rep.",
    isFollowed: true,
    isLiked: true,
    likecount: 410,
    commentcount: 33,
    shearcount: 12,
    video: "./video/6.mp4"
  },
  {
    userprofile: "./image/7.jpeg",
    username: "user_07",
    caption: "Learning never stops.",
    isFollowed: false,
    isLiked: true,
    likecount: 150,
    commentcount: 11,
    shearcount: 5,
    video: "./video/7.mp4"
  },
  {
    userprofile: "./image/8.jpeg",
    username: "user_08",
    caption: "Stay consistent.",
    isFollowed: true,
    isLiked: false,
    likecount: 98,
    commentcount: 9,
    shearcount: 2,
    video: "./video/8.mp4"
  },
  {
    userprofile: "./image/9.jpeg",
    username: "user_09",
    caption: "Progress over perfection.",
    isFollowed: false,
    isLiked: true,
    likecount: 275,
    commentcount: 21,
    shearcount: 8,
    video: "./video/9.mp4"
  },
  {
    userprofile: "./image/10.jpeg",
    username: "user_10",
    caption: "Hard work shows.",
    isFollowed: true,
    isLiked: true,
    likecount: 620,
    commentcount: 55,
    shearcount: 25,
    video: "./video/10.mp4"
  }
];
let allreels = document.querySelector(".all-reels")

function adddata(){
  sum = ""
  posts.forEach(function(em, ind){
      sum = sum + `<div class="reels">
                      <video src="${em.video}" autoplay loop muted alt=""></video>
                      <div class="side">
                          <div id=${ind} class="like">
                              <h4>${em.isLiked?'<i class="ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}</h4>
                              <h6>${em.likecount}</h6>
                          </div>
                          <div id=${ind} class="comment">
                              <h4><i class="ri-chat-3-line"></i></h4>
                              <h6>${em.commentcount}</h6>
                          </div>
                          <div class="shear">
                              <h4><i class="ri-send-ins-line"></i></h4>
                              <h6>${em.shearcount}</h6>
                          </div>
                          <div class="menu">
                              <h4><i class="ri-more-2-line"></i></h4>
                          </div>
                      </div>
                      <div class="bottom">
                          <div class="user">
                              <img src="${em.userprofile}" alt="">
                              <h3>${em.username}</h3>
                              <button id=${ind}>${em.isFollowed?'Unfollow':'Follow'}</button>
                          </div>
                          <h5>Lorem ipsum dolor sit amet.</h5>
                      </div>
                  </div>`
  })
  
  
  allreels.innerHTML=sum
  
} 
adddata();

allreels.addEventListener('click',function(det){
  posts[det.target.id].likecount++
  adddata()
})
