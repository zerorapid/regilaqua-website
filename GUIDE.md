# RegilAqua - Architecture & Export Guide

This guide details how to separate the **RegilAqua Public Website** from the **Admin Portal** into two distinct applications or portals.

## 1. Current Architecture (Unified)
At present, the application is a **Single Page Application (SPA)** built with React, Vite, and Tailwind CSS.
- **Shared Codebase**: Both public and admin routes live in the same project.
- **State Management**: Data (Products, Blogs, Inquiries) is stored in `localStorage` via services in `src/services/`.
- **Routing**: Managed by `react-router-dom` in `src/App.tsx`.

## 2. The Multi-Portal Strategy
To create separate portals (e.g., `www.regilaqua.com` and `admin.regilaqua.com`), you have two main paths:

### Path A: Separate Vite Projects (Recommended for Scaling)
Create two identical projects and strip out the unnecessary code from each.
1. **Portal 1 (Website)**: Contains all pages except `Admin.tsx` and admin-specific components.
2. **Portal 2 (Admin)**: Contains only the `Admin.tsx` logic and dashboard components.

### Path B: Multi-Page App (MPA) within one Repo
Configure `vite.config.ts` to have two entry points: `index.html` (Website) and `admin.html` (Admin).

---

## 3. CRITICAL: Data Synchronization (Firebase)
**Warning**: `localStorage` is scoped to a single domain. If you separate the website and admin portal onto different domains, they will **not** share data.

### Solution: Migrate to Firebase
To connect the two portals, you must use a centralized database.
1. **Setup Firebase**: Run the `set_up_firebase` tool in Gemini Antigravity.
2. **Update Services**: Rewrite `productService.ts`, `blogService.ts`, etc., to use Firestore instead of `localStorage`.
3. **Authentication**: Use Firebase Auth to protect the Admin Portal.

---

## 4. Manual: How to ask Gemini Antigravity to split portals
If you are moving this code to a new session in Gemini Antigravity, use these prompts:

### Prompt 1: The Migration to Firebase
> "I have exported a RegilAqua React project that uses localStorage. I want to transition to a full-stack Firebase setup. Please use the `set_up_firebase` tool, then rewrite the services in `src/services/` to use Firestore. Ensure both the public website and admin dashboard use this shared database."

### Prompt 2: Creating the Admin Portal Subdomain
> "I want to split my project into two separate builds. One for the public website and one for the admin dashboard.
> 1. Create a new directory structure `src/apps/website` and `src/apps/admin`.
> 2. Move relevant routes and components into their respective apps.
> 3. Update the build configuration so I can deploy them to separate URLs (e.g. www and admin subdomains)."

---

## 5. File Organization for Export
Before exporting, ensure your files are organized for easy separation:
- `src/components/shared/`: Layout, UI, SEO.
- `src/pages/public/`: Home, About, Products, Blog.
- `src/pages/admin/`: Admin Dashboard, Settings.
- `src/services/`: Shared data logic (Firebase recommended).

## 6. Access Control
Once separated, the Admin portal should have its own `login` page. The public website should not have any "Admin" links in the footer or navbar to keep it clean for customers.
