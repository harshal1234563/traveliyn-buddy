let holidayPackageList = [
  {
    imgLink: "./assests/package1-.jpg",
    heading: "Peek into Paradise",
    description:
      "Enjoy a delightful short trip to explore Kashmir, the paradise on earth, in under four days.",
    features: [
      { icon: "fa-regular fa-calendar-days", detail: "4 Days 3 Nights" },
      { icon: "fa-solid fa-house", detail: "Shrinagar(2N), Houseboat(1N)" },
      {
        icon: "fa-solid fa-location-dot",
        detail: "srinagar, Pahalgham, Gulmarg",
      },
    ],
  },
  {
    imgLink: "assests/package 1.jpg",
    heading: "Marvellous Kashmir Spring Tour",
    description:
      "Discover Kashmir's Winter Wonderland: Unforgettable Journey through Snowy Landscapes.",
    features: [
      { icon: "fa-regular fa-calendar-days", detail: "5 Days 4 Nights" },
      {
        icon: "fa-solid fa-house",
        detail: "Srinagar(2N), Pahalgham(1N), Houseboat(1N)",
      },
      {
        icon: "fa-solid fa-location-dot",
        detail: "Srinagar, Pahalgham, Gulmarg",
      },
    ],
  },
  {
    imgLink: "assests/package3-.jpg",
    heading: "Romantic Kashmir Tour",
    description:
      "Create Everlasting Memories in the World's Most Romantic Destination.",
    features: [
      { icon: "fa-regular fa-calendar-days", detail: "5 Days 4 Nights" },
      {
        icon: "fa-solid fa-house",
        detail: "Srinagar(1N), Pahalgham(1N), Gulmarg(1N) houseboat(1N)",
      },
      {
        icon: "fa-solid fa-location-dot",
        detail: "Srinagar, Pahalgham, Gulmarg",
      },
    ],
  },
  {
    imgLink: "assests/package 4.jpg",
    heading: "Kashmir Tulips Paradise Tour",
    description:
      "Lock the beautiful moments of your life which you can spend in Kashmir with your dear ones.",
    features: [
      { icon: "fa-regular fa-calendar-days", detail: "6 Days 5 Nights" },
      {
        icon: "fa-solid fa-house",
        detail: "Srinagar(2N), Gulmarg(1N), Pahalgham(1N), Houseboat(1N)",
      },
      {
        icon: "fa-solid fa-location-dot",
        detail: "Srinagar, Pahalgham,Gulmarg,Sonamarg",
      },
    ],
  },
  {
    imgLink: "assests/package5-.jpg",
    heading: "Kashmir Honeymoon Joy",
    description:
      "Enhance the romance in your marriage with the unparalleled options Kashmir provides",
    features: [
      { icon: "fa-regular fa-calendar-days", detail: "7 Days 6 Nights" },
      {
        icon: "fa-solid fa-house",
        detail: "Srinagar(2N), Pahalgham(2N), Gulmarg(1N), Houseboat(1N)",
      },
      {
        icon: "fa-solid fa-location-dot",
        detail: "Srinagar, Pahalgham, Gulmarg, Sonmarg, Doodhpathri",
      },
    ],
  },
  {
    imgLink: "assests/package 6.jpg",
    heading: "Kashmir Family Tour",
    description:
      "Treat your dear ones with serene landscape, rich culture and boundless adventures in Kashmir",
    features: [
      { icon: "fa-regular fa-calendar-days", detail: "8 Days 7 Nights" },
      {
        icon: "fa-solid fa-house",
        detail: "Srinagar(3N), Pahalgham(2N), Gulmarg(1N), Houseboat(1N)",
      },
      {
        icon: "fa-solid fa-location-dot",
        detail: "Srinagar, Pahalgham, Gulmarg, Sonmarg, Doodhpathri",
      },
    ],
  },
];

const holidayPackContainer = document.getElementById("holidayPackageContaier");
console.log(holidayPackageList);

holidayPackageList.forEach(function (package) {
  let featuresList = "";
  package.features.forEach(function (feature) {
    const li = `<li class="detail-item d-flex gap-2">
                  <div class="list-icon-cntainer"><i class="${feature.icon}"></i></div>
                  <div class="logo-det">${feature.detail}</div>
                </li>`;
    featuresList = featuresList + li;
  });
  const obj = `<div class="card">
            <img src="${package.imgLink}" class="card-img-top package-card-img-height img img-fluid" alt="heading-img">
            <div class="card-body">
              <h5 class="card-title">${package.heading}</h5>
              <p class="card-text">${package.description}</p>
              <hr>
              <ul class="detail-list">
                ${featuresList}
              </ul>
              <div class="details">
                <img src="assests/detailsimg.webp" alt="" class="img img-fluid" />

              </div>
              <a href="#" class="btn btn-primary mt-2 float-end">Book Now</a>
            </div>
          </div>`;
  let node = document.createElement("div");
  node.setAttribute("class", "col-4");
  node.innerHTML = obj.trim();
  // node.appendChild(obj);
  holidayPackContainer.append(node);
});
console.log(holidayPackContainer);
