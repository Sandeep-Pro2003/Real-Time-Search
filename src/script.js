let users = [
  {
    username: "Sandeep Sharma",
    description: "A website devloper.",
    image: "https://images.unsplash.com/photo-1754951661102-341dfb58bd26?q=80&w=1035&auto=format&fit=crop"
  },
  {
    username: "Milan",
    description: "Photographer and coffee lover.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=60"
  },
  {
    username: "Manshi",
    description: "Tech enthusiast and avid reader.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=60"
  },
  {
    username: "Kuldeep Singh",
    description: "UI/UX designer with a passion for minimalism.",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=500&q=60"
  },
  {
    username: "Sumita Yadav",
    description: "Writer, poet, and dreamer.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=60"
  },
  {
    username: "Raj Kumari",
    description: "Traveler capturing the beauty of nature.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=60"
  },
  {
    username: "Soni Kumar",
    description: "Chef and food stylist sharing recipes and ideas.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=60"
  },
  {
    username: "Anjali Sharma",
    description: "Digital marketer and social media strategist.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=60"
  }
];


const container = document.querySelector(".card-container");
function showUsers(arr){
  arr.forEach(function(user){

    
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.image;
    img.classList.add("bg-img");

    const blurredLayer = document.createElement("div");
    blurredLayer.classList.add("blurred-layer");
    blurredLayer.style.backgroundImage = `url(${user.image})`;

    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent = user.username;

    const p = document.createElement("p");
    p.textContent = user.description;

    content.appendChild(heading);
    content.appendChild(p);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    container.appendChild(card);
  });
}

showUsers(users);
let inp = document.querySelector(".search-input");
  inp.addEventListener("input",function(){
  let newuser =  users.filter(user =>{
    return user.username.toLowerCase().startsWith(inp.value.toLowerCase());
   });
   container.innerHTML = "";
   showUsers(newuser);
  });
//sarre user show karana
//filter karna harbar input karne par
//show karna filtered users
