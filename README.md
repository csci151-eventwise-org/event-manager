# Event Manager

An event tracking application that helps users organize and manage their upcoming events with dates, times, and locations.

---

## Team Members

| Full Name               | Role      | GitHub Username | Assigned Atomic Task                                 |
| ----------------------- | --------- | --------------- | ---------------------------------------------------- |
| Catigan, Andrei William | Developer | @AndreiCatigan  | [Event Status Management], QA, PR Reviewer           |
| Concoles, Cyril Jade    | Developer | @con-cyse       | [Edit Event Details & Delete Events], Lead Developer |
| Moreno, Radz Ponce      | Developer | @donot4tmee     | [Event List Display], Bug fixer                      |
| Mosquera, Gabriel       | Developer | @gabiXDpapi     | [Event Creation], Team Lead, PR Reviewer             |
| Oreiro, Genesis Ar      | Developer | @nyx-garso      | [Event Details and Filtering], Bug fixer             |

---

## Features Implemented

- [x] Create Event - Add events with title, date, time, location
- [x] Event List - Display all events chronologically
- [x] Event Details - Show full event information
- [x] Mark as Attended - Toggle event attendance status
- [x] Filter Events - Filter by upcoming/past/all
- [x] Edit Event - Modify event details
- [x] Delete Event - Remove events with confirmation
- [x] Modern UI with Tailwind CSS - Gradient backgrounds, glassmorphism effects, and smooth animations

---

## Technology Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **State Management:** React Hooks (useState, useEffect)
- **Version Control:** Git & GitHub

---

## Setup & Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/csci151-eventwise-org/event-manager.git
   cd event-manager
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` (or the port shown in your terminal)

---

## Git Workflow & Branching Strategy

### Branches Used

- **`main`** - Production-ready code
- **`develop`** - Integration branch for features
- **`feature/create-event`** - Event creation form with title, date, time, and location inputs
- **`feature/event-list`** - Display all events chronologically with event details
- **`feature/event-filter`** - Filter events by status (upcoming/past/all)
- **`feature/mark-attended`** - Toggle event attendance status and update UI
- **`feature/edit-delete`** - Edit event details and delete events with confirmation

### Commit Convention

We followed the **Conventional Commits** specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation updates
- `style:` - Code formatting, UI styling
- `refactor:` - Code refactoring

### Pull Request Workflow

1. Create feature branch from `develop`
2. Implement feature with atomic commits
3. Push branch to GitHub
4. Create Pull Request to `develop`
5. Team reviews and provides feedback
6. Merge after approval
7. Delete feature branch

### Merge Conflicts Resolved

**Conflict PT1:**

- **Conflict:** Merge conflict in `App.tsx` when merging `feature/event-list` into `develop`
- **Files Affected:** `src/App.tsx`
- **Cause:** Multiple members edited event state management and props structure simultaneously
- **Resolution:** Kept both the event list display logic and the form submission handler, merged the state updates carefully
- **Resolved By:** Concoles, Cyril Jade

**Conflict PT2:**

- **Conflict:** Merge conflict in `EventForm.tsx` when merging `feature/edit-delete` into `develop`
- **Files Affected:** `src/components/EventForm.tsx`
- **Cause:** Form validation logic was updated in both branches with different approaches
- **Resolution:** Integrated the more comprehensive validation from `feature/edit-delete` while maintaining the form structure from the main branch
- **Resolved By:** Mosquera, Gabriel

---

## Project Structure

```
event-manager/
├── public/
├── src/
│   ├── components/
│   │   ├── EventForm.tsx
│   │   ├── EventList.tsx
│   │   ├── EventCard.tsx
│   │   └── FilterButtons.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── App.css
├── package.json
└── README.md
```

---

## Screenshots

### Conflict PT1

![Conflict PT1](conflict%20pt1.png)

### Conflict PT2

![Conflict PT2](conflictpt2.png)

---

## Challenges & Learnings

**Challenges:**

- Managing concurrent development across multiple team members working on different features
- Handling merge conflicts when multiple developers modified shared component state
- Coordinating styling changes across components to maintain consistency
- Implementing TypeScript types across a collaborative React project

**Key Learnings:**

- **Git Workflow:** Working with feature branches and pull requests helps prevent conflicts and improves code quality
- **Collaboration:** Clear communication and atomic commits make merging and conflict resolution much smoother
- **Component Design:** Proper prop passing and state lifting reduces conflicts and makes code more maintainable
- **TypeScript Benefits:** Strong typing caught errors early and made code reviews more effective

---

## Repository Links

- **Organization:** https://github.com/csci151-eventwise-org
- **Repository:** https://github.com/csci151-eventwise-org/event-manager

---

## Contributors

**Group 2 - CSci 151 Event Driven Programming**

- Boyles, Christian Earl James - @username
- Catigan, Andrei William - @username
- Concoles, Cyril Jade - @username
- Moreno, Radz Ponce - @username
- Mosquera, Gabriel - @username
- Oreiro, Genesis Ar - @username

**Course Professors:**

- Mr. Jomari Joseph A. Barrera
- Mr. Kyle Anthony F. Nierras

**Institution:** Visayas State University - Department of Computer Science and Technology

---

**Last Updated:** [07/04/2026]
