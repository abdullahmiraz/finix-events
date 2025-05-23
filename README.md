# Finix Events

A modern, responsive event management web application built with Next.js, React, and shadcn/ui. This project provides a beautiful, interactive platform for discovering, joining, and managing sports and social events.

---

## 🚀 Features

- **Event Discovery:** Browse and search for upcoming events with rich details and images.
- **Event Details:** View event info, location, date, player list, and comments.
- **Player Management:** See who is attending, message players, and view host info.
- **Comments & Replies:** Engage in threaded discussions for each event.
- **Join & Payment Modal:** Securely join events and choose your payment method via a modern modal interface.
- **Responsive Design:** Fully mobile-friendly and desktop-optimized.
- **Carousel Suggestions:** Discover similar events in a smooth, swipeable carousel.
- **Modern UI:** Built with shadcn/ui, Tailwind CSS, and Lucide icons for a clean, accessible look.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **UI Library:** [shadcn/ui](https://ui.shadcn.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **TypeScript:** For type safety and maintainability

---

## 📦 Folder Structure

```
src/
  components/
    global/         # Header, navigation, and global UI
    main/           # Event-specific components (EventHeader, EventTabs, EventPlayers, EventComments, EventJoinCard, EventPaymentModal, etc.)
    ui/             # Shared UI primitives (Button, Dialog, Input, etc.)
    layouts/        # Layout containers and wrappers
  pages/            # Next.js pages (if using pages directory)
  app/              # Next.js app directory (if using app router)
public/             # Static assets and images
```

---

## 🧑‍💻 Getting Started

### 1. **Clone the repository**
```bash
git clone https://github.com/your-username/finix-events.git
cd finix-events
```

### 2. **Install dependencies**
```bash
npm install
# or
yarn install
```

### 3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## ✨ Customization

- **Theme Colors:**
  - Primary green: `#357863`
  - Creamy yellow: `#f7e9d0`
  - Adjust these in your Tailwind config or CSS variables for easy theming.
- **Icons:**
  - Uses Lucide icons and custom SVGs in `src/components/ui/icons.tsx`.
- **UI Components:**
  - All UI primitives are in `src/components/ui/` and can be reused or extended.
- **Data:**
  - Demo data is hardcoded in JSON arrays for events, players, and comments. Replace with your API or database as needed.

---

## 📚 Usage

- **Join an Event:** Click the "Join event" button on any event card to open the payment modal.
- **Switch Payment Method:** Select bKash or Cash and click Continue.
- **View Players:** See the list of attendees and message them directly.
- **Comment:** Add comments and replies in the event discussion section.
- **Browse Suggestions:** Swipe through the carousel to find similar events.

---

## 🤝 Credits

- UI inspired by modern event and sports platforms.
- Built with [shadcn/ui](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/), and [Lucide Icons](https://lucide.dev/).
- Special thanks to the open-source community!

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

