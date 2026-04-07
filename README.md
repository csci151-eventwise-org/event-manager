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
- **`feature/create-event`** - [Description of feature]
- **`feature/event-list`** - [Description of feature]
- **`feature/event-filter`** - [Description of feature]
- **`feature/mark-attended`** - [Description of feature]
- **`feature/edit-delete`** - [Description of feature]

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

[Document conflicts here]

**Example:**

- **Conflict:** Merge conflict in `App.tsx` when merging `feature/event-list` into `develop`
- **Files Affected:** `src/App.tsx`
- **Cause:** Multiple members edited event state management
- **Resolution:** [Describe how resolved]
- **Resolved By:** [Team Member Name]

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

[Add screenshots of your application here]

---

## Challenges & Learnings

**Challenges:**

- [Describe challenges faced]

**Key Learnings:**

- [What did the team learn about Git workflow?]
- [What did the team learn about collaboration?]

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
