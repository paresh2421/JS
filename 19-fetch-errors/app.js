//  Javascript Nuggets

// Fetch API -  Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

const url = "https://www.course-api.com/react-tours-project";

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const getTours = async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      const msg = `There was an error ${res.status} ${res.statusText}`;
      throw new Error(msg);
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// getTours();

const btn = document.querySelector(".btn");
btn.addEventListener("click", getTours);
