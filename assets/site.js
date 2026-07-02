const navItems = [
  ["Home", "index.html"],
  ["About", "about.html"],
  ["Calendars", "calendars.html"],
  ["Training", "training.html"],
  ["News", "news.html"],
  ["Gallery", "gallery.html"],
  ["Join", "join.html"],
  ["Contact", "contact.html"]
];

const events = [
  {
    date: "2026-08-12",
    title: "General Membership Meeting",
    type: "Local Meeting",
    time: "6:00 PM",
    place: "Local 217 Hall",
    summary: "Monthly business meeting, reports, upcoming calls, and committee updates."
  },
  {
    date: "2026-08-15",
    title: "Member Cookout And Family Day",
    type: "Member Event",
    time: "1:00 PM",
    place: "Local 217 Hall",
    summary: "A casual afternoon for members, families, new workers, and retirees to connect."
  },
  {
    date: "2026-08-19",
    title: "Volunteer Call: Community Event Load-In",
    type: "Volunteer",
    time: "9:00 AM",
    place: "Downtown Rockford",
    summary: "Member volunteer opportunity supporting a community event setup."
  },
  {
    date: "2026-08-27",
    title: "BMO Center Crew Check-In",
    type: "Venue",
    time: "5:30 PM",
    place: "BMO Center",
    summary: "Quick informational meetup for members working upcoming arena events."
  },
  {
    date: "2026-09-04",
    title: "Organizing Committee Check-In",
    type: "Committee",
    time: "5:30 PM",
    place: "Virtual / Hall",
    summary: "Planning session for outreach, visiting locals, and member engagement."
  },
  {
    date: "2026-09-12",
    title: "Coronado Theatre History Collection",
    type: "History",
    time: "11:00 AM",
    place: "Coronado Theatre",
    summary: "Members are invited to share photos, stories, and memories from past shows."
  },
  {
    date: "2026-09-18",
    title: "Volunteer Sign-Up Night",
    type: "Volunteer",
    time: "6:00 PM",
    place: "Local 217 Hall",
    summary: "Open sign-up for upcoming community support and local outreach events."
  },
  {
    date: "2026-09-30",
    title: "Visiting Local Welcome Meeting",
    type: "Visiting Locals",
    time: "4:00 PM",
    place: "TBD",
    summary: "A coordination meeting for visiting union members and upcoming event needs."
  }
];

const trainings = [
  {
    date: "2026-08-22",
    title: "Stage Safety Refresher",
    type: "Safety",
    time: "10:00 AM",
    place: "Training Room",
    summary: "Core safety practices for load-ins, load-outs, PPE, communication, and working around moving equipment."
  },
  {
    date: "2026-09-10",
    title: "Intro To Rigging Concepts",
    type: "Training",
    time: "6:00 PM",
    place: "BMO Center",
    summary: "Foundational terminology, hardware awareness, inspection habits, and when to ask for qualified help."
  },
  {
    date: "2026-09-24",
    title: "TTF Class Window",
    type: "TTF",
    time: "TBD",
    place: "Online",
    summary: "Placeholder for IATSE Training Trust Fund class links and registration reminders."
  }
];

const committees = [
  {
    title: "Training Committee",
    summary: "Coordinates skills development, TTF opportunities, safety refreshers, and member education."
  },
  {
    title: "Organizing Committee",
    summary: "Builds relationships, supports outreach, and helps more workers find a path into the union."
  },
  {
    title: "Volunteer Committee",
    summary: "Connects members with community events, service work, and public-facing Local 217 efforts."
  },
  {
    title: "History Committee",
    summary: "Collects photos, stories, venue history, and member memories so the local's work is preserved."
  }
];

const committeeNews = [
  {
    date: "2026-07-09",
    title: "Training Committee Builds Fall Class List",
    tag: "Committee",
    summary: "The training committee is organizing safety refreshers, rigging basics, and TTF reminders for the next schedule."
  },
  {
    date: "2026-07-01",
    title: "History Committee Collecting Venue Photos",
    tag: "Committee",
    summary: "Members can submit photos, show memories, and stories from BMO Center, Coronado Theatre, Hard Rock, and past calls."
  },
  {
    date: "2026-06-22",
    title: "Volunteer Committee Plans Community Outreach",
    tag: "Committee",
    summary: "Volunteer opportunities are being gathered so members can represent Local 217 at more public events."
  }
];

const leadership = [
  {
    title: "Business Agent / President",
    summary: "Placeholder photo and officer bio. Add the official officer name, title, contact rules, and a short description of their role."
  },
  {
    title: "Secretary / Treasurer",
    summary: "Placeholder photo and officer bio. Add responsibilities such as records, dues, meeting minutes, or financial reporting."
  },
  {
    title: "Executive Board",
    summary: "Placeholder photo and board description. Add elected board members, committee liaisons, and member support roles."
  }
];

const galleryItems = [
  {
    title: "Placeholder: Arena Load-In",
    summary: "Use this spot for a BMO Center concert, sports event, or touring production photo with show details."
  },
  {
    title: "Placeholder: Coronado Theatre Show",
    summary: "Use this spot for a theater performance photo, show title, date, and crew notes."
  },
  {
    title: "Placeholder: Hard Rock Event",
    summary: "Use this spot for a casino or entertainment venue event with a short description."
  },
  {
    title: "Placeholder: Training Class",
    summary: "Use this spot for safety training, TTF classes, apprenticeship work, or member education."
  },
  {
    title: "Placeholder: Volunteer Event",
    summary: "Use this spot for community work, member engagement, or Local 217 public outreach."
  },
  {
    title: "Placeholder: Visiting Local",
    summary: "Use this spot for photos and notes from visiting union members or collaborative calls."
  }
];

const memorials = [
  {
    title: "In Memory Of A Local 217 Member",
    summary: "Placeholder photo and tribute. Add their name, years of service, favorite memories, and a respectful note from the local."
  },
  {
    title: "Honoring A Retired Member",
    summary: "Placeholder photo and tribute. Use this space to preserve the member's contribution to the craft and the union."
  },
  {
    title: "Remembering A Brother Or Sister",
    summary: "Placeholder photo and tribute. Add a warm message, show memories, and family-approved wording."
  }
];

const memberHighlight = {
  title: "Member Of The Month",
  name: "Placeholder Member Name",
  summary: "Use this home page feature to recognize a Local 217 member for strong work, mentorship, safety, volunteer service, or commitment to the local."
};

const venues = [
  {
    title: "BMO Center",
    summary: "Arena and event work, touring productions, sports, concerts, and large-scale crew calls."
  },
  {
    title: "Coronado Theatre",
    summary: "Historic theater work, stagecraft, touring shows, orchestras, and live performance support."
  },
  {
    title: "Hard Rock",
    summary: "Entertainment, hospitality, concerts, special events, and evolving venue partnerships."
  }
];

const news = [
  {
    date: "2026-07-02",
    title: "Local 217 Website Foundation Continues",
    tag: "Update",
    summary: "The local is building a modern public website with calendars, training information, news, member highlights, and clear contact paths."
  },
  {
    date: "2026-06-18",
    title: "Training Opportunities Expanded",
    tag: "Training",
    summary: "The local is building a clearer training rhythm so members can track classes, safety refreshers, and TTF opportunities."
  },
  {
    date: "2026-06-01",
    title: "Committee Work Continues",
    tag: "Members",
    summary: "Member-led committees are helping grow outreach, volunteer work, event recaps, and local history efforts."
  }
];

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
        <p>Representing skilled entertainment workers and building a stronger future for live events in the Rockford region.</p>
      </div>
      <div>
        <h3>Explore</h3>
        <a href="calendars.html">Calendars</a>
        <a href="training.html">Training</a>
        <a href="news.html">News & Committees</a>
        <a href="gallery.html">Gallery</a>
        <a href="join.html">Join / Interest Form</a>
      </div>
      <div>
        <h3>Contact</h3>
        <p>Email: info@iatse217.org<br>Phone: (000) 000-0000<br>Rockford, Illinois</p>
        <p class="small">Replace with official contact details before launch.</p>
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
      <div class="placeholder-image">Photo Placeholder</div>
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
      <article class="news-item">
        <div><span class="tag">${item.tag}</span></div>
        <div>
          <div class="meta">${date}</div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
        </div>
      </article>
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
      <article class="news-item">
        <div><span class="tag">${item.tag}</span></div>
        <div>
          <div class="meta">${date}</div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
        </div>
      </article>
    `;
  }).join("");
}

function renderMemberHighlight() {
  const target = document.querySelector("[data-member-highlight]");
  if (!target) return;
  target.innerHTML = `
    <div class="feature-card">
      <div class="placeholder-image tall">Member Photo Placeholder</div>
      <div>
        <p class="eyebrow">${memberHighlight.title}</p>
        <h2>${memberHighlight.name}</h2>
        <p>${memberHighlight.summary}</p>
        <a class="button light" href="news.html">See Member Highlights</a>
      </div>
    </div>
  `;
}

function handleStaticForms() {
  document.querySelectorAll("form[data-static-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const notice = form.querySelector("[data-form-status]");
      if (notice) {
        notice.textContent = "Thanks. This demo form is ready to connect to email, Google Sheets, Airtable, or a Vercel function.";
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
renderPhotoCards("[data-leadership]", leadership);
renderPhotoCards("[data-gallery]", galleryItems);
renderPhotoCards("[data-memorials]", memorials);
renderNews("[data-news]", 3);
renderNews("[data-all-news]");
renderNewsCollection("[data-committee-news]", committeeNews);
renderMemberHighlight();
handleStaticForms();
