# Next Steps — Sprint 2 Roadmap

## Priority 1: Money vs Goods Simulator (Core Tool)

This is the flagship interactive feature and should be built first.

**Tasks:**
- Install Recharts (or evaluate D3 for more control)
- Build the simulator data model (M, V, P, Y relationship)
- Create adjustable slider inputs for money supply growth and real output growth
- Build a real-time line chart showing price level over time
- Add historical presets (1970s, 2008, 2020)
- Add explanatory annotations to the chart
- Write an accompanying explainer

## Priority 2: Real Data Integration

**Tasks:**
- Set up FRED API integration (or download static datasets)
- Create data loader utilities in `src/lib/`
- Build a reusable chart component that accepts time-series data
- Create the first real data visualization: M2 money supply vs CPI over 50+ years
- Add to the Thesis page as supporting evidence

## Priority 3: Content — The Thesis Page

**Tasks:**
- Write the full thesis in structured sections
- Embed data visualizations inline
- Add sourced footnotes
- Include a "counterarguments" section
- Review for tone compliance

## Priority 4: Purchasing Power Calculator

**Tasks:**
- Source historical CPI data (and alternative measures)
- Build a year-selector + amount input UI
- Show purchasing power comparison with category breakdowns
- Add wage-adjusted view

## Priority 5: Case Study Template & First Case

**Tasks:**
- Build a reusable case study page template
- Structure case study data format (JSON or MDX)
- Write the first complete case study (Weimar recommended — most documented)
- Include timeline visualization within the case study

## Priority 6: Polish & UX

**Tasks:**
- Add page transitions
- Improve mobile navigation experience
- Add Open Graph / social sharing metadata per page
- Add a favicon and basic brand mark
- Consider adding a dark mode toggle

## Priority 7: Deployment

**Tasks:**
- Set up Vercel (or alternative) deployment
- Configure custom domain (monetaryreality.com)
- Set up basic analytics (privacy-respecting, e.g., Plausible)
- Test performance and accessibility

## Future Sprints (Lower Priority)

- Monetary Expansion Timeline (full historical visualization)
- Case Study Viewer with interactive navigation
- Deep Dives content library
- MDX or headless CMS integration for easier content authoring
- Search functionality
- Newsletter / update subscription
- Contributor guidelines and correction process
