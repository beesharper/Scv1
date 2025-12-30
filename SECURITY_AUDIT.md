# Security Audit Report

**Date:** 2025-02-12
**Target:** `sharp-and-crafty` (Frontend React Application)
**Auditor:** Jules (AI Software Engineer)

## 1. Executive Summary

This security audit focused on the client-side security, dependency health, and configuration of the `sharp-and-crafty` React application.

**Overall Security Posture:** **Good**

The application follows general React best practices (no dangerous DOM manipulation, correct link security). The previously missing **Content Security Policy (CSP)** has been implemented, significantly improving the security posture against XSS and data exfiltration. Dependency vulnerabilities remain as accepted risks due to the static nature of the site and stability requirements.

## 2. Dependency Analysis

### 2.1 Deprecated/Unmaintained Packages
*   **Package:** `react-helmet` (^6.1.0)
*   **Status:** **Resolved**
*   **Action Taken:** Migrated to `react-helmet-async` on 2025-02-12.
*   **Context:** `react-helmet` was replaced to ensure compatibility with React 18+ strict mode and prevent future breaking changes.

### 2.2 Outdated Major Versions (Accepted Risks)
*   **Vite:** Currently `^4.4.5`. The latest stable is v6.
    *   **Status:** **Accepted Risk**
    *   **Context:** The known `esbuild` vulnerability in this version is limited to the development server environment and poses no threat to the production build. The complexity/risk of a major version upgrade is not justified for this static site.
*   **Framer Motion:** Currently `^10.16.4`. v11 is available.
    *   **Status:** **Accepted Risk**
    *   **Context:** Version 10 is secure and stable. Upgrading to v11 offers minor performance benefits but carries a risk of visual regressions for complex animations. To maintain usability stability, remaining on v10 is the preferred choice.

## 3. Codebase Security Findings

### 3.1 Secrets & Sensitive Data
*   **Status:** **Pass**
*   **Findings:**
    *   No hardcoded high-risk secrets (AWS keys, database passwords) were found.
    *   **Note:** The Formspree form endpoint (`https://formspree.io/f/mdkpzrwq`) is publicly visible in `Contact.jsx`. This is standard for client-side forms but allows anyone to send submissions to your form.
*   **Recommendation:** Monitor Formspree usage limits. If spam becomes an issue, enable CAPTCHA in the Formspree dashboard.

### 3.2 Cross-Site Scripting (XSS)
*   **Status:** **Pass**
*   **Findings:**
    *   No usage of `dangerouslySetInnerHTML` was found.
    *   User input in `Contact.jsx` is handled via standard React state and submitted as JSON, mitigating injection risks.

### 3.3 Link Security
*   **Status:** **Pass**
*   **Findings:**
    *   External links in `Footer.jsx` (Instagram, Facebook) correctly use `rel="noopener noreferrer"` alongside `target="_blank"`. This prevents `tabnabbing` attacks.

### 3.4 Debugging Artifacts
*   **Status:** **Pass**
*   **Findings:**
    *   No active `console.log` or `debugger` statements were found in the source code.

## 4. Configuration Review

### 4.1 Content Security Policy (CSP)
*   **Status:** **Resolved**
*   **Findings:**
    *   A robust CSP has been added to `index.html`.
*   **Implementation Details:**
    *   **`unsafe-inline` Allowed:** Explicitly permitted for scripts and styles to support `framer-motion` animations and Vite's HMR.
    *   **External Connections:** Restricted to `https://formspree.io` (for forms) and `ws:`/`wss:` (for Vite HMR).
    *   **Assets:** Fonts allowed from Google Fonts; Images allowed from self and `data:`.
    *   **Object Sources:** Strictly set to `'none'`.

### 4.2 Vite Configuration (`vite.config.js`)
*   **Status:** **Info / Accepted Risk**
*   **Findings:**
    *   `server: { allowedHosts: true }`: This disables host header checking.
    *   **Context:** This setting is required for the cloud-based testing environment (Jules VM) to allow access to the development server from external URLs.
    *   **Impact:** While typically a risk (DNS rebinding) on open local networks, it is a known and accepted configuration for this specific environment.
    *   **Recommendation:** If the project is ever moved to a standard local development setup or deployed to production, this setting should be removed or tightened.

## 5. Summary of Recommendations

1.  **Completed:** Add a **Content Security Policy (CSP)** to `index.html` (Done).
2.  **Completed:** Replace `react-helmet` with `react-helmet-async` (Done).
3.  **Medium Priority:** Remove `allowedHosts: true` from `vite.config.js` unless explicitly required for your dev setup (e.g., tunneling).
4.  **Low Priority:** Enable CAPTCHA on your Formspree account if spam submissions increase.

---
*End of Report*
