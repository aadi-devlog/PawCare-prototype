# PawCare: Practo for Animals MVP Prototype

A responsive, clickable prototype for Task 1 of the Product Development, Design & AI Systems Intern candidate assignment.

## Design direction
- **Palette:** warm yellow `#FFC928`, pale yellow `#FFF4C9`, white, warm off-white and charcoal `#202521`.
- **Typography:** system sans-serif stack with clear heading hierarchy and readable body text.
- **Layout:** responsive desktop and mobile layouts, consistent spacing, clear page hierarchy and large touch-friendly controls.
- **Accessibility:** semantic landmarks, labelled search fields, visible keyboard focus, contrast-conscious secondary text, keyboard-operable dialogs, focus trapping and restoration, Escape-to-close, live result counts and reduced-motion support.

## Included experience
1. Homepage with prominent keyword search and a separate optional location field.
2. Six lightweight animal-care category shortcuts: veterinary clinics, animal hospitals, pet boarding, diagnostics, animal ambulance and NGOs/shelters.
3. A dedicated companion-animal photo strip featuring cats, rabbits, birds and small pets, so the visual identity does not read as dog-only.
4. Search results that understand common terms such as `vet`, `vets` and `veterinary`, search provider names/services/animal types, and separate location terms such as `near Dehradun`.
4. Compact provider cards with service area, supported animal species, offered services, a clear illustrative-data label and an information-status note. Cards use one honest View Provider Details action because the demo has no verified contact details.
5. Provider detail dialog with services, supported animals and transparent disclosure of information that is not supplied or verified in this demo.
6. List Your Business form preview with validation and confirmation state.
7. Submit a Correction form preview with validation and confirmation state.
8. Responsive mobile navigation with an accurate expanded state.
9. Animal imagery for the hero, companion-animal gallery, provider cards and provider detail dialog. HTML, CSS and JavaScript are kept in separate files (`index.html`, `styles.css` and `script.js`). Animal images are stored as local `.jpg` files in `assets/` and referenced with relative paths.

## Run it
Open `index.html` in a modern browser. Keep `styles.css`, `script.js` and the `assets/` folder alongside it so the styling, interactions and local animal images load correctly. No image host, external image URL, build step or dependency is required.

## Prototype limitations
All provider names, service areas, descriptions and imagery are illustrative demo content. The animal photographs are AI-generated visual assets, not photographs of the sample providers or real patients. They are not real or verified providers. No ratings, phone numbers, opening hours or live availability are fabricated. The prototype does not connect to real clinics, verify providers, submit forms to a server, make calls, provide emergency dispatch or store personal information. Provider cards show supported animal species so owners can quickly assess relevance. The hero image shows a mix of companion animals; the companion-animal gallery highlights cats, rabbits, birds and small pets; and provider-card photos are embedded in the HTML. There are no remote image URLs or image-host requests; all animal images load from the local `assets/` folder. A production MVP would need a verified provider database, permissioned real provider photography, backend form handling, privacy controls, moderation and accurate location/availability data.

## UI/UX decisions
- Search is the dominant first action; service categories are a secondary browse path. The hero search uses a balanced two-column desktop layout for the keyword, State, City and Find Care controls, then stacks cleanly on mobile.
- The interface deliberately avoids a dense filter sidebar and an unnecessary sort control for a small demo directory.
- Hero search keeps service/provider keywords and location separate. The results search also understands phrases such as `vets near Dehradun`.
- Provider cards expose service area, supported animal species and offered services before asking users to open details. They use one clear details action because this demo has no verified contact data.
- Animal representation is intentionally balanced: the hero includes a dog, cat, rabbit, guinea pig and budgerigar; a separate four-card image strip spotlights cats, rabbits, birds and small pets; provider cards use a mix of species-specific imagery. Dogs remain represented but do not dominate the page.
- The prototype does not invent provider ratings, verification badges, hours or contact details. Missing information is disclosed clearly.
- Dialogs move focus inside on open, keep keyboard focus within the dialog, close with Escape and return focus to the opener.
- Yellow is used as an accent and action colour, while dark text on white/pale surfaces preserves readability.
- All bundled animal images are AI-generated illustrative JPG assets stored in the local `assets/` folder and loaded through relative file paths. They are not presented as real clinic photos or evidence that a sample provider treats a particular species; supported-species text remains illustrative demo data.

### Location selector
The homepage location control has exactly two parts: **State** and **City**. State is a native dropdown. City is a searchable dropdown/combobox with a visible option menu. The city dropdown arrow opens the full available list for the selected state (or the full catalog before a state is selected); typing in the city field filters suggestions live. Selecting a state narrows the city options; selecting a city fills the corresponding state. Typing a recognized city directly (for example, Dehradun, Gorakhpur, Bengaluru, Mumbai or Chennai) automatically selects its state. Common former/alternate city names such as Bangalore, Bombay, Calcutta, Madras and Gurgaon are normalized to the current city name. The dropdown preserves focus during pointer selection so it does not close immediately after opening, and option selection works with mouse or keyboard.

The local city catalog covers many commonly searched Indian cities and towns across the States and Union Territories. For a city not yet in the catalog, the user can select its state and keep typing the city manually. A production deployment can replace this curated list with a full geocoding or places dataset. The default results heading is “Explore care” until the visitor chooses a location, so the interface does not imply it has detected where the visitor is. The current sample provider listings remain illustrative Dehradun records, so searching other locations will correctly show no sample matches.

## Latest refinement: location picker and hero captions
- Fixed the city-dropdown focus/blur race that could cause the menu to close immediately after opening.
- The city arrow now opens the full city list for the selected state, rather than filtering the list to the currently entered city. Typing still filters suggestions live.
- Pointer selection keeps focus stable, and keyboard arrow/Enter/Escape interaction remains available.
- Hero floating notes now sit above the photograph with a fully opaque white background and dark text, so the message remains readable over any image.


## Final assignment scope
PawCare is intentionally a discovery prototype. It includes the assignment-required six service categories, keyword and location search, State/City selection, provider cards/details, List Your Business and Submit a Correction journeys. It intentionally excludes appointment booking, payment, accounts, clinic dashboards, live ambulance tracking, live availability, user reviews, AI recommendations and a full Google Maps integration. This keeps the work aligned with the 4–5 hour total assignment estimate and leaves enough time for the AI Education landing page and AI carousel deliverables.

### Image packaging and offline behaviour
The page contains no externally hosted image URLs. Hero, gallery, provider-card and provider-detail images load from the JPG files in `assets/`. Keep that folder beside `index.html` when opening or moving the project.


## Final UI/UX refinement pass
- Reworked the primary navigation into four distinct destinations: **Find care** scrolls to the hero search and focuses the keyword field; **Explore services** scrolls to the six categories; **Directory** scrolls to provider results; **For providers** scrolls to the provider onboarding section. The header actions are **Submit a correction** (opens the correction form) and **List your business** (opens the listing form directly).
- Renamed the emergency CTA to **View animal ambulance options**. It opens the ambulance category and does not imply live dispatch or emergency availability.
- Removed the inactive contact-information button from the provider detail dialog. Missing contact information is communicated as a non-interactive note instead.
- Added a clear directory-coverage disclosure: the sample provider records currently represent Dehradun only. The empty state repeats this limitation and explains why searches for other cities may have no sample results.
- Added a visible caption on provider-card imagery explaining that the animal photograph is illustrative and is not a photograph of the listed provider. The provider detail dialog repeats the image disclosure.
- Added a keyboard-accessible **Skip to main content** link as the first keyboard stop.
- Improved narrow-screen navigation spacing and hid the redundant header CTA at mobile widths; the Find Care route remains available in the mobile navigation.
- Tested in Chromium at 1440px desktop, 390px mobile, 640px (a 200% zoom reflow equivalent) and 320px (a 400% zoom reflow equivalent). No horizontal overflow was detected at 640px or 320px.
- Browser regression checks confirmed all 11 image references loaded, the emergency action selects the animal ambulance category, the details modal contains no inactive contact button, the mobile menu updates its expanded state, the city field correctly maps Gorakhpur to Uttar Pradesh, and the no-results state displays the Dehradun-only disclosure. No JavaScript page errors were observed.

These checks are browser-based prototype tests, not a formal accessibility certification or assistive-technology audit.
## Navigation map

- **Find care** scrolls to the homepage search form (`#heroSearch`).
- **Explore services** scrolls to the six service-category shortcuts (`#services`).
- **Directory** scrolls to provider results and the directory search (`#find-care`).
- **For providers** scrolls to the provider onboarding call-to-action (`#providers`).
- **Submit a correction** opens the correction form.
- **List your business** opens the business-listing form directly; **For providers** remains the route to the provider onboarding section.

In-page destinations account for the sticky header. The Find care link focuses the search input after scrolling. The two form actions open their respective dialogs. The mobile/tablet menu closes after a navigation link is selected and collapses before the four links can crowd the header.


## Founder operations and first-city launch plan
See [`PawCare_MVP_Operations_Plan.md`](PawCare_MVP_Operations_Plan.md) for a practical provider acquisition, verification, minimum data, search-filter, correction/moderation and pilot-metrics plan. These are recommendations for a future live MVP, not implemented services.

## Preview refresh and verification
The desktop and mobile preview images in this package were regenerated after the page JavaScript completed. The refreshed desktop preview shows all six illustrative provider cards. A local browser smoke test confirmed six cards render without JavaScript errors. The cards remain explicitly labelled as unverified sample data.
