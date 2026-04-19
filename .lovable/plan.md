# Innov Möbel — Low-Fidelity Wireframe Clone

A grayscale, boxes-and-placeholders wireframe of the full Innov Möbel site, structured after venetacucine.com's layout patterns. No real imagery, no brand styling — just gray boxes, placeholder text, dashed borders, and labels indicating what each region represents. This is the earliest-stage skeleton, suitable for layout review before any visual design.

## Visual Language

- Pure grayscale (whites, light grays, dark gray text)
- Dashed/solid thin borders for content blocks
- "IMAGE", "VIDEO", "LOGO" labels inside placeholder rectangles (include the "type" of image that will go there")
- Simple sans-serif system font
- No animations, no real photos, no brand colors (make white and black)
- Generic Lorem-style placeholder copy with section labels (can do real content based on the plan)

## Pages & Routes (15 total)

**Core (10):**

1. `/` — Homepage (hero video block, philosophy statement, collections grid, craftsmanship details, testimonials, partner logos, stats, editorial grid, social grid, footer)
2. `/kitchens` — Kitchens Collection (intro, filter bar, model grid, compare tool block)
3. `/kitchens/:slug` — Kitchen Model Detail (hero, gallery thumbs, materials, features, CTA)
4. `/living` — Living Room Collection (intro, model grid, integration story, materials, CTA)
5. `/accessories` — Accessories (category nav, product grid with compatibility tags)
6. `/about` — About (story, mission, craftsmanship, factory, artisan portraits, certifications, leadership)
7. `/contact` — Contact (form, departments, map + dealer list, support links)
8. `/catalogs` — Catalogs (current grid, archive, language flags)
9. `/magazine` — Magazine (featured hero, category tabs, article grid)
10. `/certifications` — Certifications (categorized logo blocks + explainers)
11. `/warranty` — Warranty & After-Sales (terms, activation steps, claim flow, form)
12. `/links` — All Links hub (website, social, map) 

**Optional (3): (not needed)**  
13. `/faq` — FAQ (categories, accordion, search)
14. `/projects` — Real Projects (grid, filters)
15. `/news` — News & Updates (featured, filters, grid)

## Shared Components

- **Wireframe Navbar**: logo box (left), menu links (center), language/search icons (right)
- **Wireframe Footer**: 4 link columns, brand mark box, social icon boxes, language selector
- **PlaceholderImage**: gray box with diagonal lines + "IMAGE [ratio]" label
- **PlaceholderVideo**: gray box with play triangle + "VIDEO" label
- **SectionLabel**: small uppercase tag identifying what each block represents

## Routing

React Router with all 15 routes wired up. Page-level navigation via the navbar so reviewers can click through every screen.

## Out of Scope

No real content, photography, animations, working forms, working map, or backend. Pure structural wireframe.