# Project Instructions: RegilAqua

## Architectural Goals
- **Separation of Concerns**: The goal is to eventually split the **Public Website** and the **Admin Portal** into two distinct deployed sites.
- **Data Integrity**: All data (Products, Inquiries, Blogs) must be shared between both portals.
- **Backend Preference**: Use **Firebase** (Firestore + Auth) for any data persistence to allow cross-portal synchronization.

## Coding Standards
- **UI Architecture**: Use Tailwind CSS with a "High-End Manufacturing" aesthetic (Brutalist headings, ample whitespace, technical precision).
- **SEO First**: Every public page must use the `<SEO />` component.
- **Accessibility**: Ensure all interactive elements have proper `aria-labels`.

## Future Tasks for Gemini Antigravity
1. **Firebase Migration**: When the user is ready, migrate from `localStorage` to Firestore.
2. **User Authentication**: Implement a secure login flow for the Admin portal using Firebase Auth.
3. **Portal Split**: Create separate build entry points for `www` and `admin` portals as described in `GUIDE.md`.
