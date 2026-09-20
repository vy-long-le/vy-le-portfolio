document.documentElement.classList.add("js");

const menuButton = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("#primary-navigation");
const menuIcon = document.querySelector("[data-menu-icon]");

const mobileViewport = window.matchMedia("(max-width: 899px)");

const terminal = document.querySelector("[data-terminal]");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);

const contactForm = document.querySelector("#contact-form");
const contactCheckButton = document.querySelector("[data-contact-check]");
const contactFeedback = document.querySelector("[data-contact-feedback]");

function openMenu() {
  navigation.hidden = false;

  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "Close navigation menu");

  menuIcon.textContent = "close";
}

function closeMenu({ returnFocus = false } = {}) {
  navigation.hidden = true;

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");

  menuIcon.textContent = "menu";

  if (returnFocus) {
    menuButton.focus();
  }
}

function synchronizeMenu(event) {
  if (event.matches) {
    closeMenu();
  } else {
    navigation.hidden = false;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuIcon.textContent = "menu";
  }
}

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    closeMenu();
  } else {
    openMenu();
  }
});

document.addEventListener("keydown", (event) => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

  if (event.key === "Escape" && isExpanded) {
    closeMenu({ returnFocus: true });
  }
});

if (terminal && !prefersReducedMotion.matches) {
  const terminalLines = [...terminal.querySelectorAll("[data-terminal-line]")];

  terminal.classList.add("is-animating");

  terminalLines.forEach((line, index) => {
    const delay = 250 + index * 350;

    window.setTimeout(() => {
      line.classList.add("is-visible");

      const isFinalLine = index === terminalLines.length - 1;

      if (isFinalLine) {
        window.setTimeout(() => {
          terminal.classList.remove("is-animating");
        }, 200);
      }
    }, delay);
  });
}

if (contactForm && contactCheckButton && contactFeedback) {
  contactCheckButton.addEventListener("click", () => {
    const isValid = contactForm.reportValidity();

    if (!isValid) {
      contactFeedback.hidden = true;
      return;
    }

    contactFeedback.textContent =
      "This prototype does not send messages. " +
      "Please contact Vy by email or LinkedIn.";

    contactFeedback.hidden = false;
  });
}

mobileViewport.addEventListener("change", synchronizeMenu);
synchronizeMenu(mobileViewport);
