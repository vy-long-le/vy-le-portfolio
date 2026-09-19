# Day 1 Content and Implementation Decisions

This checklist records the decisions that must remain consistent throughout the Vy Le portfolio implementation. Complete this audit before changing page content or layout.

## Reference priority

- [x] Follow the user's stated requirements and four-day limit first.
- [x] Use `C:\Coding Project\learning-webui\prompt\project_prd_technical_brief_vy_le_portfolio.md` as the primary authority for scope, routes, content, accessibility, and technical constraints.
- [x] Use `C:\Coding Project\learning-webui\prompt\reference\stitch_prompt_constraint_analyzer\crafted_terminal\DESIGN.md` for design tokens, typography, spacing, radii, and visual behavior.
- [x] Use the seven screenshots for page composition, section hierarchy, and responsive intent.
- [x] Treat Stitch-generated HTML as a read-only source for copy and measurements.
- [x] Do not reuse the Stitch Tailwind implementation or introduce its CDN dependency.
- [x] Resolve conflicts in favor of the higher-priority source.

## Release scope

- [x] Build seven standalone pages: Home, About, Education, Skills, Projects, Goals, and Contact.
- [x] Use `index.html`, `about.html`, `education.html`, `skills.html`, `projects.html`, `goals.html`, and `contact.html`.
- [x] Make every page link to all six other pages.
- [x] Use one shared stylesheet and one shared script.
- [x] Include a shared semantic header and footer in every HTML document.
- [x] Keep the site usable when JavaScript is unavailable.
- [x] Keep deployment, analytics, backend services, and real form submission outside this release.

## Fixed technical boundaries

- [x] Use semantic HTML, shared vanilla CSS, and minimal vanilla JavaScript.
- [x] Do not use React, Vue, routing frameworks, package builds, Tailwind, or backend services.
- [x] Use a consistent `1200px` maximum content width.
- [x] Use a main responsive breakpoint at `900px` and a refinement breakpoint at `480px`.
- [x] Verify layouts at `1440px`, `1024px`, `768px`, and `390px`.
- [x] Load Space Grotesk for interface and body text.
- [x] Use JetBrains Mono only for terminal output, code-style labels, and technical badges.
- [x] Use Material Symbols as the only icon dependency.
- [x] Preserve readable system-font and text-label fallbacks if external font resources fail.

## Design tokens

- [x] Canvas: `#0B1120`.
- [x] Surface: `#111827`.
- [x] Border: `#1E293B`.
- [x] Accent links and focus: `#3B82F6`.
- [x] Primary button: `#2563EB` with white text.
- [x] Primary text: `#E5E7EB`.
- [x] Secondary text: `#94A3B8`.
- [x] Terminal success: `#10B981`.
- [x] Warning: `#F59E0B`.
- [x] Use restrained `8px` to `12px` card radii.
- [x] Do not use `#2563EB` for normal-sized text on the dark canvas.

## Global navigation and language decisions

- [x] Mark exactly one navigation link with `aria-current="page"` in each document.
- [x] Keep the active page visually clear in both desktop and mobile navigation.
- [x] Give the mobile menu button `aria-controls`, `aria-expanded`, and an accessible label.
- [x] Remove the closed mobile menu from keyboard navigation.
- [x] Make Escape close the mobile menu and return focus to the menu button.
- [x] Keep EN active.
- [x] Display VI as unavailable with `aria-disabled="true"` and the label “Vietnamese version planned.”
- [x] Do not present VI as a working language switch.
- [x] Remove the purposeless circular profile icon from navigation.

## Factual and content corrections

- [x] Present Vy as a software engineering student building backend foundations.
- [x] Avoid claims of completed backend expertise, production systems, or professional engineering experience.
- [x] Replace “Curriculum Progress: Q2 2025” with “Current Study Focus.”
- [x] Omit fixed Node.js version text unless it reflects a verified local version.
- [x] Remove card arrows when there is no real destination.
- [x] Remove unsupported references to plural coding bootcamps.
- [x] Label every project card “Planned Project.”
- [x] Describe project goals and intended learning outcomes instead of completed functionality.
- [x] Remove fabricated Git hashes, branch states, demos, ratings, percentages, and progress metrics.
- [x] Use MySQL consistently across Skills, Projects, and Goals.
- [x] Remove `v2025.focus` and other time-sensitive decorative version claims.
- [x] Describe future Goals stages as aspirations rather than active competencies.
- [x] Remove response-time promises such as “response SLA <24h” and “fastest reply guaranteed.”
- [x] Use a factual preferred-contact note instead.

## Page decisions

### Home

- [x] Use a two-column Hero with copy and CTAs beside the terminal on desktop.
- [x] Place the terminal below the copy on mobile.
- [x] Include “Vy Le” and “Backend Developer Student.”
- [x] Include Projects and Contact calls to action.
- [x] Include REST APIs, Relational Databases, and Clean Code labels.
- [x] Include three foundation cards and an evergreen Current Study Focus callout.
- [x] Build the terminal from semantic HTML and CSS.
- [x] Keep all terminal lines in the initial HTML.
- [x] Use progressive line reveal only as an enhancement.
- [x] Show all terminal lines immediately without JavaScript or when reduced motion is requested.
- [x] Place the dot-grid and mask on a decorative layer behind the content.
- [x] Use matching `mask-image` and `-webkit-mask-image` declarations.
- [x] Keep the faint dot grid readable as the no-mask fallback.

### About

- [x] Explain the transition from hospitality and WordPress/SEO work into backend study.
- [x] Use three grounded working-value cards.
- [x] Include Current Learning, Future Horizons, and a Projects/Contact CTA.
- [x] Do not use the reference stock portrait as an image of Vy.
- [x] Use a profile-summary placeholder with initials, location, primary focus, and “Finish What I Start.”
- [x] Replace the placeholder only after Vy supplies an approved portrait.

### Education and Experience

- [x] Use one continuous timeline with five ordered entries.
- [x] Include VTC Academy, Freelance SEO Webmaster, Hotel Receptionist, Danang University of Technology, and THPT Thái Phiên.
- [x] Preserve the dates specified by the PRD.
- [x] Include Adaptability, Operational Empathy, and Structured Troubleshooting.
- [x] Include a factual technical-profile card without invented credentials.

### Skills

- [x] Include Python, Node.js/Express, MySQL, and Git.
- [x] Mark every skill as “Active Focus.”
- [x] Describe current study topics and the next learning objective.
- [x] Include Learning Approach and a compact discipline checklist.
- [x] Do not add skill percentages, ratings, or unsupported version claims.

### Projects

- [x] Include REST API Task Manager, AI Study Assistant, Authentication Service, and Expense Tracker API.
- [x] Mark all four cards “Planned Project.”
- [x] Present intended learning objectives rather than finished features.
- [x] Include defensive input validation, atomic commits, semantic HTTP behavior, and schema integrity in Development Standards.
- [x] Do not add fake repositories, demos, commit hashes, or branch status.

### Goals

- [x] Include five stages from Backend Fundamentals to AI/ML Engineer.
- [x] Make only the current foundational stage active.
- [x] Include the roadmap manifest, Grounded Growth Pyramid, two philosophy cards, and internship CTA.
- [x] Use MySQL in the roadmap.
- [x] Remove decorative connectors on small screens.
- [x] Mark Goals, rather than Home, as the current page.

### Contact

- [x] Use the exact PRD destinations for email, GitHub, LinkedIn, and telephone.
- [x] Include current student status and GMT+7.
- [x] Include persistent labels and required indicators for name, email, subject, and message.
- [x] Use a `type="button"` form control.
- [x] Call `form.reportValidity()` before displaying the prototype notice.
- [x] Display: “This prototype does not send messages. Please contact Vy by email or LinkedIn.”
- [x] Do not submit, fetch, store, or claim to deliver form data.

## Accessibility and quality gate

- [x] Include one `h1` and a logical heading hierarchy on every page.
- [x] Include semantic landmarks and a skip link on every page.
- [x] Keep persistent labels on all form controls.
- [x] Keep keyboard focus visible and clear of the sticky header.
- [x] Meet at least `4.5:1` contrast for body text and the PRD’s `7:1` target for headings.
- [x] Stack two-column layouts without horizontal overflow.
- [x] Stack footer groups without clipping or forced centering.
- [x] Use `rel="noopener noreferrer"` for external links that open in a new tab.
- [x] Confirm that no internal link points to a missing file or `#` placeholder.
- [x] Confirm that the browser console has no uncaught JavaScript errors.

## Day 1 audit gate

- [x] All seven routes and their required sections are identified.
- [x] The stack and dependency boundaries are fixed.
- [x] Visual tokens and breakpoint behavior are recorded.
- [x] Unsupported claims and screenshot inconsistencies have explicit corrections.
- [x] Image, language, form, and deployment limitations are documented.
- [x] No unresolved content conflict remains before project setup begins.

