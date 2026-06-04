---
name: Industrial Authority
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#465f88'
  primary: '#002046'
  on-primary: '#ffffff'
  primary-container: '#1b365d'
  on-primary-container: '#87a0cd'
  inverse-primary: '#aec7f7'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e4e2e2'
  on-secondary-container: '#646464'
  tertiary: '#001f4b'
  on-tertiary: '#ffffff'
  tertiary-container: '#003473'
  on-tertiary-container: '#699eff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f7'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#2e476f'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc7ff'
  on-tertiary-fixed: '#001a41'
  on-tertiary-fixed-variant: '#004493'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
---

## Brand & Style
The design system for this professional consultancy and engineering firm is built on the pillars of precision, structural integrity, and unwavering expertise. The brand personality is authoritative yet accessible, communicating high-level strategic thinking paired with technical engineering proficiency.

The visual style follows a **Corporate / Modern** aesthetic with a heavy emphasis on **Minimalism**. It utilizes a structured grid, generous whitespace to allow complex information to breathe, and a disciplined application of color. The emotional response should be one of total confidence—evoking the feeling of a partner who is both methodically organized and technologically advanced. The interface avoids decorative flourishes in favor of functional clarity and "engineered" layouts.

## Colors
This design system employs a rigorous, high-contrast palette to establish hierarchy and professional tone.

*   **Primary (Deep Navy Blue - #1B365D):** Used for primary navigation, headings, and foundational structural elements. It represents the "Strategy" and stability of the firm.
*   **Secondary (Professional Grey - #4A4A4A):** Used for body text and secondary iconography. This provides an industrial, metallic feel that grounds the UI.
*   **Accent (Vibrant Blue - #007BFF):** Reserved strictly for interactive elements, calls to action (CTAs), and highlighting key data points. 
*   **Backgrounds:** A tiered system of neutrals. `#FFFFFF` (White) for primary content containers and `#F8F9FA` (Light Grey) for page backgrounds to provide subtle contrast and reduce eye strain in data-heavy views.

## Typography
The typography strategy pairs two modern sans-serifs to distinguish between brand presence and functional information.

**Montserrat** is used for headings and display text. Its geometric construction provides a bold, architectural feel that mirrors the firm's engineering background. Use tighter letter spacing for large display text to maintain a high-impact, professional look.

**Inter** is the workhorse for body text, UI labels, and data. Chosen for its exceptional legibility and systematic feel, it ensures that technical specifications and consultancy reports remain easy to digest. Labels should frequently use uppercase with increased tracking (letter spacing) to denote sections or metadata categories.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain precise control over line lengths and technical diagrams. 

A 12-column grid provides the flexibility needed for asymmetrical engineering layouts. Spacing is governed by an 8px base unit. 
- **Desktop:** 64px outer margins and 24px gutters. Use wide gutters to separate distinct service offerings or case study sections.
- **Tablet:** 32px margins. Reflow 3-column layouts into 2-column or single-stack depending on content density.
- **Mobile:** 16px margins. All cards and service blocks stack vertically. 

Vertical rhythm is crucial; use the `xxl` (80px) spacing to separate major sections, signaling a clear transition between services, client testimonials, and contact areas.

## Elevation & Depth
In line with the industrial and professional theme, depth is primarily conveyed through **Tonal Layers** and **Low-contrast outlines** rather than heavy shadows.

*   **Surfaces:** Use a subtle border (`1px solid #E9ECEF`) to define cards and containers. 
*   **Shadows:** When necessary for interactivity (like a hovering card), use a single, highly diffused "Ambient Shadow" (e.g., `0 4px 20px rgba(27, 54, 93, 0.08)`). The shadow should be tinted with the primary Navy Blue to keep the design cohesive.
*   **Separation:** Use the Light Grey background (`#F8F9FA`) to distinguish the main content area from the page background, creating a flat but layered architectural effect.

## Shapes
To reinforce the industrial and structural narrative, this design system uses a **Soft** (Level 1) roundedness. 

A corner radius of 4px (`0.25rem`) is applied to buttons, input fields, and cards. This provides a professional "machined" edge that feels precise and modern without being overly harsh or aggressive. Interactive components like checkboxes remain sharp or have a 2px radius to maintain a technical, engineering-drawing aesthetic. Larger containers (like hero images or section blocks) should maintain 0px sharp corners to emphasize the grid's structural integrity.

## Components

### Buttons
*   **Primary:** Solid Primary Navy (`#1B365D`) with white text. High-contrast, rectangular with 4px radius.
*   **Secondary:** Outline style using Primary Navy or Professional Grey. 
*   **CTA:** Solid Accent Blue (`#007BFF`) for high-conversion actions like "Request a Quote."

### Service Cards
Cards should feature a `1px` border, a 4px radius, and significant internal padding (24px or 32px). Include a small icon in the Accent Blue at the top-left to categorize the engineering discipline. Headings within cards use `headline-md`.

### Client Lists
Display client logos in a grayscale filter at 50% opacity, reverting to full color or the Primary Navy on hover. This maintains a clean, professional aesthetic while giving due credit to partners.

### Input Fields & Contact Forms
Fields use a 1px `Professional Grey` border that thickens to 2px in `Accent Blue` on focus. Labels sit outside the field in `label-md` style for maximum clarity. Validation messages should be placed directly beneath the field in `caption` typography.

### Data Tables
Tables are essential for engineering specs. Use a "Zebra" striping pattern with the Light Grey background and thin horizontal dividers only. Header rows should be Primary Navy with white text to anchor the data.