# Marci Metzger Realty — Homepage Redesign

An independent redesign of the Marci Metzger Realty / The Ridge Realty Group homepage, created as a front-end development assignment.

The goal was not to reproduce the existing website, but to reinterpret its content and visual identity into a more modern, editorial, and conversion-focused real estate experience while preserving the information and imagery provided by the original site.

> **Disclaimer**: This is an independent design and development exercise. It is not an official website or repository of Marci Metzger Realty or The Ridge Realty Group.

---

## Design Direction

The redesign takes a more architectural approach to real estate design.

Rather than using the common visual language seen across many modern real estate websites — excessive cards, gradients, glass effects, icon grids, floating badges, and generic SaaS-style layouts — the interface uses:

- **Strong typography**
- **Large photographic backgrounds**
- **Structured grids**
- **Editorial spacing**
- **Restrained color palette**
- **Sharp geometric boundaries**
- **Subtle motion**
- **Clear calls to action**
- **Real estate imagery** as the primary visual element

The intention is to make the website feel established, confident, and property-focused rather than looking like a generic technology landing page.

The visual language is inspired by architecture, property brochures, editorial layouts, and high-end real estate marketing.

---

## Why This Visual Hierarchy?

The homepage is organized around the way a potential real estate client typically evaluates an agent.

The visitor first needs to understand:

1. Who is this?
2. Where do they operate?
3. What do they specialize in?
4. Can they help me buy or sell?
5. What properties and services do they offer?
6. Who is the person behind the business?
7. How do I contact them?
8. Where are they located?

The page therefore follows this hierarchy:

### 1. Entrance / Brand Reveal

A short branded loader introduces the visitor to the business before the homepage appears.

The actual company logo is used rather than creating a separate loading graphic.

The purpose is to create a strong first impression while keeping the animation short enough that it does not become an obstacle to accessing the site.

---

### 2. Hero

The hero establishes the brand immediately.

It communicates:

- Marci Metzger
- The Ridge Realty Group
- Pahrump / Southern Nevada
- Real estate specialization
- Primary calls to action

A large property image is used as the visual foundation.

The hero is intentionally more dramatic than the rest of the page because it needs to establish the identity of the website within the first few seconds.

The headline is large, but the typography is kept more controlled than an extreme "poster" style so that the content remains readable and does not overwhelm the property photography.

---

### 3. Get It Sold

The original website contains an important selling proposition:

> *"Don't Just List it... Get it SOLD!"*

Instead of immediately sending visitors into a property grid, the redesign introduces the real estate team's value first.

This section answers the question: **"Why should I work with this team?"**

The section focuses on:

- Residential sales
- Seller representation
- Buyer guidance
- Local expertise
- Marketing reach
- Experience

The supplied imagery is used to reinforce the message visually.

---

### 4. Photo Story

Real estate is inherently visual.

Instead of treating every image as a conventional card, the image gallery is presented as a visual story.

This creates a transition between the informational sections and the more functional property-search experience.

The goal is to let the photography breathe instead of surrounding every image with excessive UI.

---

### 5. Buy / Sell

The next stage separates the two primary visitor intents:

- Buying property
- Selling property

This creates a clearer path for visitors who arrive with a specific goal.

Rather than presenting a large amount of information at once, the interface lets visitors identify themselves as either a buyer or seller and continue toward the relevant content.

---

### 6. Property Search

Property search is intentionally placed after the brand and value proposition.

A real estate visitor may arrive specifically looking for listings, so the search interface remains prominent and functional.

The search experience provides controls for:

- Location
- Property type
- Minimum price
- Maximum price
- Sorting
- Other relevant listing criteria

Location options are based on the markets represented by the original website.

The search controls use conventional form elements rather than decorative UI so that the interface remains immediately understandable.

---

### 7. Services

The services section explains the broader ways the team can help.

The original site's service messaging was rewritten to improve clarity and scanability while maintaining the original meaning.

The intent was to avoid generic real estate marketing language and instead describe actual client benefits.

---

### 8. About / Meet Marci

After establishing expertise and services, the page introduces the person behind the business.

This placement is intentional.

Visitors first understand what the company does before being asked to connect with the individual.

This creates a more natural progression:

$$\text{Brand} \longrightarrow \text{Expertise} \longrightarrow \text{Services} \longrightarrow \text{Person}$$

The section helps establish trust without interrupting the earlier property-focused experience.

---

### 9. Partners / Sponsors

The sponsor and partner logos are displayed using a horizontal scrolling presentation.

This was chosen instead of a conventional grid because the logos function primarily as supporting credibility rather than primary content.

The continuous movement also creates visual rhythm while keeping the section compact.

---

### 10. Contact & Social Channels

The contact section provides a direct, accessible conversion point.

It contains:

- **Direct Tap-to-Call Phone Line**: Immediate phone interaction for mobile users.
- **Office Address & Maps Routing**: External map link for office visits.
- **Office Hours**: Clear availability and appointment guidance.
- **Social & Review Profiles**: Direct vector-icon links to Facebook, Instagram, LinkedIn, and Yelp.
- **Interactive Form Mechanics**: Interactive inquiry type selector (Buying, Selling, General) with focus state inputs.

The contact form is intentionally simple and responsive. A potential client does not have to navigate through multiple pages or complex steps to connect.

---

### 11. Location

A map follows the contact information so the physical location is presented after the visitor already has the relevant contact details.

This keeps the map contextual instead of allowing it to dominate the page.

---

### 12. Footer

The footer provides final navigation, social link shortcuts (Facebook, Instagram, LinkedIn, Yelp), and business compliance details (Equal Housing Opportunity statement) while bringing the page back to the visual language established by the header.

---

## Typography

Typography was treated as one of the primary visual elements rather than simply selecting a popular web font.

The project includes several locally available typefaces:

- `Aovel Sans` (Regular, Light, Bold, Black)
- `Angelina Serif`
- `BetterGrade`
- `Exbed`

The main interface uses the **Aovel Sans** family because its heavier weights provide the strong, contemporary appearance needed for headings while its lighter weights remain usable for supporting content.

### Why not use a typical web-font stack?

Many contemporary landing pages use the same small collection of popular fonts and design patterns.

The goal of this redesign was to avoid making the website look like a template.

Using the supplied/local typefaces gives the interface a more distinctive identity while allowing the typography to be controlled locally without depending on an external font provider.

### Typography Hierarchy

The hierarchy is deliberately simple:

- **Display / Black**: Used for major statements and section introductions.
- **Bold**: Used for navigation, labels, calls to action, and important business information.
- **Regular / Light**: Used for descriptions and supporting content.

This creates contrast without requiring multiple decorative typefaces.

---

## Color System

The palette is intentionally restrained.

The primary visual colors are:

- **Warm Off-White** (`#f5f1e8`)
- **Near-Black** (`#171715`)
- **Neutral Gray**
- **White**
- **Subtle Warm Accents**

The warm off-white is used to soften the interface compared with a pure black-and-white system.

The near-black provides strong contrast and allows the property photography to remain the focus.

The redesign deliberately avoids:

- Purple-to-blue gradients
- Gradient typography
- Neon accents
- Excessive color-coded cards
- Glassmorphism
- Low-contrast dark interfaces

The goal is a more timeless visual identity appropriate for a real estate business.

---

## Motion Design

Motion is used to provide hierarchy and continuity rather than decoration.

The project uses **Framer Motion** for animations.

### Entrance Animation

The initial loader introduces the brand before the homepage becomes visible.

After the loader finishes, the Hero mounts and its entrance animation begins.

This prevents the hero animation from playing invisibly underneath the loader.

### Hero Motion

The hero uses several subtle movements:

- Background image scale transition
- Headline entrance
- Supporting content entrance
- CTA entrance
- Scroll indicator movement

The background movement is intentionally slow compared with the foreground content. This creates a subtle sense of depth.

### Scroll / Parallax

Where appropriate, image sections can use small movement offsets while the visitor scrolls.

The effect is intentionally restrained. The goal is not to make the page feel like a motion demo. Movement should support the photography and section transitions.

---

## Layout Architecture

The application is built as a collection of focused React components rather than a single large component.

```text
src/
├── assets/
│   ├── fonts/
│   ├── images/
│   └── logos/
│
├── components/
│   ├── navigation/
│   │   └── Navbar.jsx
│   │
│   ├── loader/
│   │   └── PageLoader.jsx
│   │
│   ├── hero/
│   │   └── Hero.jsx
│   │
│   ├── get-it-sold/
│   │   └── GetItSold.jsx
│   │
│   ├── gallery/
│   │   └── PhotoStory.jsx
│   │
│   ├── real-estate/
│   │   └── BuySell.jsx
│   │
│   ├── properties/
│   │   └── PropertySearch.jsx
│   │
│   ├── services/
│   │   └── Services.jsx
│   │
│   ├── about/
│   │   └── MeetMarci.jsx
│   │
│   ├── partners/
│   │   └── PartnerMarquee.jsx
│   │
│   ├── contact/
│   │   └── Contact.jsx
│   │
│   ├── location/
│   │   └── Location.jsx
│   │
│   └── footer/
│       └── Footer.jsx
│
├── App.jsx
└── main.jsx