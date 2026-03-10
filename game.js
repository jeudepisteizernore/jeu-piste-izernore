document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const introModal = document.getElementById("introModal");
  const openIntroBtn = document.getElementById("openIntroBtn");
  const closeIntroBtn = document.getElementById("closeIntroBtn");
  const closeIntroOverlay = document.getElementById("closeIntroOverlay");
  const modalStartBtn = document.getElementById("modalStartBtn");

  function openModal() {
    if (!introModal) return;
    introModal.classList.add("active");
    introModal.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");
  }

  function closeModal() {
    if (!introModal) return;
    introModal.classList.remove("active");
    introModal.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");
  }

  if (openIntroBtn) {
    openIntroBtn.addEventListener("click", openModal);
  }

  if (closeIntroBtn) {
    closeIntroBtn.addEventListener("click", closeModal);
  }

  if (closeIntroOverlay) {
    closeIntroOverlay.addEventListener("click", closeModal);
  }

  if (modalStartBtn) {
    modalStartBtn.addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && introModal && introModal.classList.contains("active")) {
      closeModal();
    }
  });

  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        closeModal();

        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  const animatedCards = document.querySelectorAll(
    ".feature-card, .loop-card, .step-card, .stat-card, .game-pill, .final-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  animatedCards.forEach((card) => {
    card.classList.add("reveal");
    observer.observe(card);
  });
});
