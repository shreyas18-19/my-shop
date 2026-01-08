document.querySelectorAll('.product-card').forEach(card => {
  const images = card.querySelectorAll('.product-image img');
  const prevBtn = card.querySelector('.prev');
  const nextBtn = card.querySelector('.next');
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('hidden', i !== index);
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    showImage(current);
  });

  showImage(current);
});
document.querySelectorAll(".page-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // direct page open थांबवतो
    const url = this.href;

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = url;
    }, 600); // CSS animation time
  });
});

// Modal functionality
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".modal .close");

// Open modal on image click
document.querySelectorAll(".product-image img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal on clicking outside the image
modal.addEventListener("click", (e) => {
  if(e.target === modal) {
    modal.style.display = "none";
  }
});
function openModal(img, title, oldPrice, newPrice) {
  document.getElementById("shirtModal").style.display = "flex";
  document.getElementById("modalImg").src = img;
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalOldPrice").innerText = oldPrice;
  document.getElementById("modalNewPrice").innerText = newPrice;
}

function closeModal() {
  document.getElementById("shirtModal").style.display = "none";
}
var lastScroll = 0;
var navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  var currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // scroll down
    navbar.style.transform = "translateY(-120px)";
  } else {
    // scroll up
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});
