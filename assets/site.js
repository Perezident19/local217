const navItems = [
  ["Home", "index.html"],
  ["About", "about.html"],
  ["Calendars", "calendars.html"],
  ["Training", "training.html"],
  ["News", "news.html"],
  ["Gallery", "gallery.html"],
  ["Join", "join.html"],
  ["Work With Local 217", "contact.html"]
];

const events = [
  {
    date: "2026-08-17",
    title: "Weekly Member Meeting",
    type: "Membership",
    time: "8:00 PM",
    place: "Local 217 Union Hall",
    summary: "Regular meetings give us a place to handle Local business, ask questions, talk through what is going on, and keep people informed."
  },
  {
    date: "2026-08-20",
    title: "TTF: Basic Entertainment Safety",
    type: "Training",
    time: "Registration through TTF",
    place: "IATSE Training Trust Fund",
    summary: "Safety training opportunity for members interested in strengthening jobsite awareness and safe work habits."
  },
  {
    date: "2026-08-24",
    title: "Weekly Member Meeting",
    type: "Membership",
    time: "8:00 PM",
    place: "Local 217 Union Hall",
    summary: "Regular meetings give members a place to handle Local business, ask questions, listen, and learn how the Local works."
  },
  {
    date: "2026-08-30",
    title: "TTF: OSHA 10 General Industry",
    type: "Training",
    time: "August 30-31",
    place: "IATSE Training Trust Fund",
    summary: "Two-day OSHA opportunity. Members should review TTF requirements before registering."
  },
  {
    date: "2026-08-31",
    title: "Weekly Member Meeting",
    type: "Membership",
    time: "8:00 PM",
    place: "Local 217 Union Hall",
    summary: "Members can attend to hear updates, ask questions, and learn more about Local 217."
  },
  {
    date: "2026-09-03",
    title: "TTF: Wardrobe and Costume Department Safety",
    type: "Training",
    time: "Registration through TTF",
    place: "IATSE Training Trust Fund",
    summary: "Training Trust Fund opportunity for members interested in wardrobe and costume department safety."
  },
  {
    date: "2026-09-08",
    title: "TTF: OSHA 10 Construction",
    type: "Training",
    time: "September 8-9",
    place: "IATSE Training Trust Fund",
    summary: "Two-day OSHA construction opportunity. TTF registration is separate and eligibility requirements apply."
  },
  {
    date: "2026-09-13",
    title: "TTF: OSHA 10 General Industry",
    type: "Training",
    time: "September 13-14",
    place: "IATSE Training Trust Fund",
    summary: "Two-day OSHA general industry opportunity. Members should review TTF requirements before registering."
  }
];

const trainings = [
  {
    date: "2026-08-06",
    title: "TTF: Noise Exposure",
    type: "TTF",
    time: "Registration through TTF",
    place: "Online / TTF",
    summary: "IATSE Training Trust Fund opportunity. Eligibility requirements apply."
  },
  {
    date: "2026-08-15",
    title: "TTF: OSHA 10 Construction",
    type: "TTF",
    time: "August 15-16",
    place: "Zoom / TTF",
    summary: "Two-day OSHA class through the IATSE Training Trust Fund. Full participation requirements apply."
  },
  {
    date: "2026-08-20",
    title: "TTF: Basic Entertainment Safety",
    type: "TTF",
    time: "Registration through TTF",
    place: "Online / TTF",
    summary: "Entertainment safety class listed through the IATSE Training Trust Fund."
  },
  {
    date: "2026-08-27",
    title: "Roles, Responsibilities, Paperwork & Ethics",
    type: "Local 217",
    time: "Exact time TBA",
    place: "Local 217",
    summary: "Open to members, apprentices, and extras. Covers Local structure, documentation, ethics, confidentiality, and member involvement."
  },
  {
    date: "2026-08-30",
    title: "TTF: OSHA 10 General Industry",
    type: "TTF",
    time: "August 30-31",
    place: "Zoom / TTF",
    summary: "Two-day OSHA opportunity through the IATSE Training Trust Fund."
  },
  {
    date: "2026-09-03",
    title: "TTF: Wardrobe and Costume Department Safety",
    type: "TTF",
    time: "Registration through TTF",
    place: "Online / TTF",
    summary: "Department safety opportunity through the IATSE Training Trust Fund."
  },
  {
    date: "2026-09-08",
    title: "TTF: OSHA 10 Construction",
    type: "TTF",
    time: "September 8-9",
    place: "Zoom / TTF",
    summary: "Two-day OSHA construction opportunity through the IATSE Training Trust Fund."
  },
  {
    date: "2026-09-13",
    title: "TTF: OSHA 10 General Industry",
    type: "TTF",
    time: "September 13-14",
    place: "Zoom / TTF",
    summary: "Two-day OSHA general industry opportunity through the IATSE Training Trust Fund."
  }
];

const committees = [
  {
    title: "Education & Training",
    summary: "Supports orientation, safety basics, hands-on learning, steward education, and training opportunities."
  },
  {
    title: "Events & Solidarity",
    summary: "Keeps members connected through union events, community support, member gatherings, and solidarity work."
  },
  {
    title: "Health & Safety",
    summary: "Supports safer work, better questions, hazard awareness, and standards that protect the crew."
  },
  {
    title: "Organizing & Recruitment",
    summary: "Helps new workers understand the Local, supports outreach, and builds the next group of dependable hands."
  }
];

const committeeNews = [
  {
    slug: "you-do-not-have-to-be-an-officer",
    date: "2026-06-10",
    title: "You Do Not Have To Be An Officer To Build The Local",
    tag: "Committee",
    summary: "Committees give members a way to help with training, solidarity, safety, organizing, and member support without holding office.",
    body: [
      "A member does not have to take on everything to make a difference. A one-hour job done well is better than a big promise that never happens.",
      "Local 217 committees can support education and training, events and solidarity, health and safety, political and legislative work, organizing and recruitment, and other member-led efforts.",
      "The goal is simple: give more members a path to step up, learn the Local, help the next person, and strengthen the crew around them."
    ]
  }
];

const leadership = window.leadershipData || [];

const galleryItems = [
  {
    title: "Shows / Work Photos",
    summary: "Photos of Local 217 members doing the work."
  },
  {
    title: "Venue & Event Photos",
    summary: "Photos from venues, productions, and events where Local 217 has permission to share them."
  },
  {
    title: "Training Photos",
    summary: "Photos from Local 217 classes, hands-on learning, steward basics, and other approved training."
  },
  {
    title: "Volunteer / Solidarity Photos",
    summary: "Photos from volunteer work, labor participation, community support, and solidarity events."
  },
  {
    title: "Visiting Locals & Productions",
    summary: "Photos from visiting productions and work with other IATSE locals when approved for public use."
  },
  {
    title: "Members & Local 217",
    summary: "Group photos, member events, and approved use of the Local 217 bug/logo."
  }
];

const memorials = [
  {
    title: "In Remembrance",
    summary: "Memorial posts can be added here when appropriate, using family-approved photos and respectful wording from the Local."
  }
];

const venues = [
  {
    title: "BMO Center",
    summary: "Arena events, concerts, sports, touring productions, and large-scale event work in the Rockford region."
  },
  {
    title: "Coronado Theatre",
    summary: "Historic theater work, touring shows, orchestras, stagecraft, and live performance support."
  },
  {
    title: "Hard Rock Casino Rockford",
    summary: "Casino entertainment, concerts, special events, and live event support."
  },
  {
    title: "Regional Calls",
    summary: "NIU Convocation Center, festivals, outdoor events, touring productions, and special events when appropriate."
  }
];

const news = [
  {
    slug: "local-217-training-program-produces-results",
    date: "2026-07-30",
    title: "A Strong Start for Local 217 Training",
    tag: "Training",
    summary: "The first three classes brought 37 total attendances and 140 participant training hours. That's a good start, but the bigger reason we're doing this is simple. More people need to know the work.",
    preview: [
      "We kicked off the current training effort on March 19, and the first three classes have already put more members, apprentices, and extras in the room learning together.",
      "Those first three classes brought 37 total attendances and 140 participant training hours. That included 15 hands at the March 19 rigging orientation, eight at the follow-up class, and 14 at the July 1 Leadership and Steward Basics class.",
      "The numbers are good to see, but they're not the whole story. The bigger goal is getting more people involved in training, giving experienced hands a chance to pass along what they know, and making sure the Local isn't depending on the same few people knowing everything.",
      "There's more to learn and more training ahead. That's exactly the point."
    ],
    body: [
      "Local 217 kicked off the current training program on March 19 with a rigging orientation attended by 15 hands. Eight hands attended the follow-up class, and another 14 took part in the July 1 Leadership and Steward Basics class.",
      "That's 37 total attendances and 140 participant training hours across the first three classes.",
      "Those numbers are worth keeping track of, but collecting hours and certificates isn't the point. Training gives people a chance to work safer, understand the Local better, build confidence, and be better prepared as they gain experience.",
      "Some of that means learning the physical work. Some of it means understanding safety, communication, documentation, and how the Local works.",
      "Experienced hands have knowledge worth passing down, and newer hands need the chance to learn it.",
      "There's more training ahead, and there's plenty more to learn."
    ],
    actions: [
      ["Training & Apprenticeship", "training.html"],
      ["Training Calendar", "https://docs.google.com/spreadsheets/d/e/2PACX-1vSgWk1X333gDo2dvcBciMo3OTgMLM6fgJv1yi-7cMwJxrK_52cKK95eQAReoSsb4A/pubhtml"]
    ]
  },
  {
    slug: "upcoming-training-opportunities",
    date: "2026-07-30",
    title: "Upcoming Training Opportunities",
    tag: "Training",
    summary: "There are more opportunities coming up through both Local 217 and the IATSE Training Trust Fund.",
    articleSummary: "We've got more training coming up through Local 217, along with several opportunities through the IATSE Training Trust Fund.",
    preview: [
      "Local training includes Roles, Responsibilities, Paperwork & Ethics. TTF opportunities include Noise Exposure, OSHA 10 Construction, Basic Entertainment Safety, OSHA 10 General Industry, and Wardrobe and Costume Department Safety.",
      "Local 217 and TTF classes use different registration processes, so check the class information before signing up. If you're not sure where to start with Local 217 training, reach out and ask."
    ],
    body: [
      "Local 217 is planning Roles, Responsibilities, Paperwork & Ethics around August 27. The class is open to members, apprentices, and extras.",
      "It will cover Local structure, concerns, documentation, ethics, confidentiality, and ways to get involved.",
      "There are also several opportunities through the IATSE Training Trust Fund:",
      "Noise Exposure",
      "OSHA 10 Construction",
      "Basic Entertainment Safety",
      "OSHA 10 General Industry",
      "Wardrobe and Costume Department Safety",
      "Local 217 and TTF classes don't use the same registration process. TTF registration is separate, and eligibility requirements may apply. Check the class information before registering so you know what's required."
    ],
    contact: [
      "Training Contact",
      "letstrain217@gmail.com",
      "Not sure where to start with Local 217 training? Reach out and ask."
    ],
    actions: [
      ["Training & Apprenticeship", "training.html"],
      ["Local 217 Training Calendar", "https://docs.google.com/spreadsheets/d/e/2PACX-1vSgWk1X333gDo2dvcBciMo3OTgMLM6fgJv1yi-7cMwJxrK_52cKK95eQAReoSsb4A/pubhtml"],
      ["TTF Training", "https://www.iatsetrainingtrust.org/webinars"]
    ]
  },
  {
    slug: "you-do-not-have-to-be-an-officer",
    date: "2026-06-10",
    title: "You Don't Have to Be an Officer to Build the Local",
    tag: "Committee",
    summary: "There is plenty to do around a Local that does not require holding office.",
    articleSummary: "There's plenty of work around a Local that doesn't require holding office.",
    preview: [
      "Members can help with education and training, events and solidarity, health and safety, political and legislative work, organizing and recruitment, and other member-led efforts.",
      "Sometimes that means taking on a larger responsibility. Other times it's one job that needs somebody willing to take care of it.",
      "There's a line from our leadership training that puts it pretty well: \"A one-hour job done well is better than a big promise that never happens.\"",
      "You don't have to do everything. Find somewhere you can help, do your part well, and go from there."
    ],
    body: [
      "A member does not have to take on everything to make a difference.",
      "There's a line from our leadership training that gets right to it:",
      "\"A one-hour job done well is better than a big promise that never happens.\"",
      "That's a good way to think about getting involved.",
      "Local 217 committees can support education and training, events and solidarity, health and safety, political and legislative work, organizing and recruitment, and other member-led efforts.",
      "You don't have to start by taking on a huge responsibility. Find something you can help with. Learn how that part of the Local works. Do what you said you were going to do. Then go from there.",
      "That's how more people learn the Local, help the next person, and get comfortable stepping up when they're ready."
    ],
    actions: [
      ["Back to News", "news.html"]
    ]
  }
];

const allArticles = news;

function monthDay(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  return {
    month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: date.toLocaleDateString("en-US", { day: "2-digit" })
  };
}

function renderHeader() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const header = document.querySelector("[data-header]");
  if (!header) return;

  header.innerHTML = `
    <div class="nav-wrap">
      <a class="brand" href="index.html" aria-label="IATSE Local 217 home">
        <span class="brand-mark">217</span>
        <span><strong>IATSE Local 217</strong><span>Stagehands. Technicians. Union labor.</span></span>
      </a>
      <button class="menu-button" type="button" aria-label="Open navigation" aria-expanded="false"><span></span></button>
      <nav class="nav-links" aria-label="Primary navigation">
        ${navItems.map(([label, href]) => `<a href="${href}" class="${path === href ? "active" : ""}">${label}</a>`).join("")}
        <a class="nav-cta" href="join.html">Join / Get Involved</a>
      </nav>
    </div>
  `;

  const button = header.querySelector(".menu-button");
  const nav = header.querySelector(".nav-links");
  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
}

function renderFooter() {
  const footer = document.querySelector("[data-footer]");
  if (!footer) return;

  footer.innerHTML = `
    <div class="container footer-grid">
      <div>
        <h3>IATSE Local 217</h3>
        <p>Stagehands. Technicians. Union labor.<br>Rockford, Illinois</p>
      </div>
      <div>
        <h3>Pages</h3>
        <a href="index.html">Home</a>
        <a href="about.html">About Local 217</a>
        <a href="calendars.html">Calendars</a>
        <a href="training.html">Training & Apprenticeship</a>
        <a href="news.html">News & Updates</a>
        <a href="gallery.html">Gallery</a>
        <a href="join.html">Join Local 217</a>
        <a href="contact.html">Work With Local 217</a>
        <a href="contact.html">Contact</a>
      </div>
      <div>
        <h3>Local 217 Office</h3>
        <p><a href="tel:8157082802">815-708-2802</a></p>
        <h3>Education & Training</h3>
        <p><a href="mailto:letstrain217@gmail.com">letstrain217@gmail.com</a></p>
        <h3>Office Hours</h3>
        <p>Monday through Friday<br>8:00 AM to 5:00 PM<br>Saturday<br>8:00 AM to 12:00 PM</p>
        <p class="small">&copy; 2026 IATSE Local 217 | Rockford, Illinois</p>
      </div>
    </div>
  `;
}

function renderEvents(selector, collection) {
  const target = document.querySelector(selector);
  if (!target) return;
  target.innerHTML = collection.map((item) => {
    const date = monthDay(item.date);
    return `
      <article class="event-item">
        <div class="date-box">${date.month}<span>${date.day}</span></div>
        <div>
          <div class="meta">${item.type} | ${item.time} | ${item.place}</div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
        </div>
      </article>
    `;
  }).join("");
}

function renderCards(selector, collection, extraClass = "") {
  const target = document.querySelector(selector);
  if (!target) return;
  target.innerHTML = collection.map((item) => `
    <article class="card ${extraClass}">
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
    </article>
  `).join("");
}

function renderPhotoCards(selector, collection) {
  const target = document.querySelector(selector);
  if (!target) return;
  target.innerHTML = collection.map((item) => `
    <article class="photo-card">
      <div class="placeholder-image" aria-hidden="true"></div>
      <div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
      </div>
    </article>
  `).join("");
}

function renderNews(selector, limit) {
  const target = document.querySelector(selector);
  if (!target) return;
  target.innerHTML = news.slice(0, limit || news.length).map((item) => {
    const date = new Date(`${item.date}T12:00:00`).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
    return `
      <a class="news-item clickable" href="article.html?slug=${item.slug}">
        <div><span class="tag">${item.tag}</span></div>
        <div>
          <div class="meta">${date}</div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          ${(item.preview || []).map((paragraph) => `<p>${paragraph}</p>`).join("")}
          <span class="read-more">Read full update</span>
        </div>
      </a>
    `;
  }).join("");
}

function renderNewsCollection(selector, collection) {
  const target = document.querySelector(selector);
  if (!target) return;
  target.innerHTML = collection.map((item) => {
    const date = new Date(`${item.date}T12:00:00`).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
    return `
      <a class="news-item clickable" href="article.html?slug=${item.slug}">
        <div><span class="tag">${item.tag}</span></div>
        <div>
          <div class="meta">${date}</div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <span class="read-more">Read full update</span>
        </div>
      </a>
    `;
  }).join("");
}

function renderArticle() {
  const target = document.querySelector("[data-article]");
  if (!target) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const article = allArticles.find((item) => item.slug === slug) || allArticles[0];
  const date = new Date(`${article.date}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  document.title = `${article.title} | IATSE Local 217`;
  target.innerHTML = `
    <article class="article-detail">
      <p class="eyebrow">Local 217 News</p>
      <a class="back-link" href="news.html">Back to News</a>
      <div class="article-meta">
        <span class="tag">${article.tag}</span>
        <span>${date}</span>
      </div>
      <h1>${article.title}</h1>
      <p class="article-summary">${article.articleSummary || article.summary}</p>
      <div class="article-body">
        ${article.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
      ${article.contact ? `
        <div class="article-contact notice">
          <strong>${article.contact[0]}</strong>
          <a class="text-link" href="mailto:${article.contact[1]}">${article.contact[1]}</a>
          <p>${article.contact[2]}</p>
        </div>
      ` : ""}
      ${article.actions ? `
        <div class="button-row article-actions">
          ${article.actions.map(([label, href]) => `<a class="button ${label === "Back to News" ? "light" : ""}" href="${href}">${label}</a>`).join("")}
        </div>
      ` : ""}
    </article>
  `;
}

function handleStaticForms() {
  document.querySelectorAll("form[data-static-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const notice = form.querySelector("[data-form-status]");
      if (notice) {
        notice.textContent = "Thanks. Online form delivery still needs to be connected before launch. For now, please contact Local 217 directly using the phone or email listed on this page.";
      }
    });
  });
}

renderHeader();
renderFooter();
renderEvents("[data-events]", events);
renderEvents("[data-trainings]", trainings);
renderCards("[data-committees]", committees);
renderCards("[data-venues]", venues, "venue-card");
renderCards("[data-leadership]", leadership);
renderPhotoCards("[data-gallery]", galleryItems);
renderPhotoCards("[data-memorials]", memorials);
renderNews("[data-news]", 3);
renderNews("[data-all-news]");
renderNewsCollection("[data-committee-news]", committeeNews);
renderArticle();
handleStaticForms();
