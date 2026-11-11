# PawCare MVP: founder operations and launch plan

**Status:** Product recommendation for a prototype. The current directory is illustrative and contains no real or verified provider records.

## 1. Launch wedge: one city, useful coverage, verified information

Start with one city (the prototype currently uses Dehradun sample listings) and a deliberately narrow supply target. A smaller directory with trustworthy records is more valuable than a larger directory with stale or unverified entries.

Suggested pilot targets (planning assumptions, not existing results):

- Recruit an initial 25-40 providers across veterinary clinics, hospitals, boarding, diagnostics, animal transport and animal-welfare organisations.
- Prioritise coverage by neighbourhood and service type rather than adding many duplicate listings in one area.
- Do not describe the directory as comprehensive until a coverage review supports that claim.

## 2. Provider acquisition and onboarding

1. Build a prospect list from public business directories, professional referrals, local animal-welfare groups and direct outreach.
2. Contact each provider and explain what information will appear publicly.
3. Ask the provider to submit or confirm its organisation name, service categories, address/service area, supported animal species, services, hours, phone/website and an authorised contact.
4. Request evidence appropriate to the provider type. For veterinary practices, verify the professional and establishment details against applicable official/state records and documents supplied by the provider. For NGOs, confirm registration/identity where relevant. For boarding and transport, verify the operating business and the service claims being published.
5. Review the evidence, record who checked it and when, and publish only fields that have been confirmed.
6. Reconfirm high-impact information periodically and whenever a correction is reported.

A listing is not a recommendation or endorsement. Use an explicit status vocabulary such as **Details submitted**, **Identity checked**, and **Information recently reconfirmed**. Do not use a generic verified badge unless the exact checks behind it are defined and completed.

## 3. Minimum provider record

| Field | Why it matters | Publish rule |
|---|---|---|
| Provider name and service type | Helps users identify the right kind of care | Confirm identity and category |
| Full address and service area | Supports local discovery | Confirm location; mark mobile coverage separately |
| Supported species | Prevents irrelevant referrals | Confirm directly with provider |
| Services offered | Sets expectations before contact | Provider-confirmed; avoid clinical promises |
| Opening hours and emergency hours | Critical for urgent decisions | Time-stamp and reconfirm; never infer availability |
| Phone, website and directions | Converts discovery into contact | Test links and numbers before launch |
| Credentials/registration where relevant | Supports trust and accountability | Check using appropriate records and document date |
| Last checked date and source | Makes freshness visible | Always store internally; show a suitable freshness note |

## 4. Search and filter strategy

The prototype already supports keyword, city/state and six service categories. For the first live release, prioritise filters that reduce a real user's decision effort:

- Service type (clinic, hospital, boarding, diagnostics, ambulance, NGO).
- Animal species supported.
- Location radius or neighbourhood, once reliable geocoding is available.
- Open now / emergency hours, only after hours are provider-confirmed and actively maintained.
- Remote consultation, home visit or transport, only where the provider confirms the service.

Do not launch ratings, availability or distance sorting until data collection and update rules exist. A filter that relies on stale data can be worse than no filter.

## 5. User journey and conversion

**Search or browse -> compare transparent provider cards -> open details -> call/visit provider using verified contact links.** The prototype currently stops at details because no genuine contact details have been supplied. In production, make the next action obvious: Call, Visit website, Get directions or Request a callback (only if a secure callback workflow exists).

For urgent situations, the directory should show a prominent limitation notice and direct users to contact a local veterinary professional or local emergency service. It must not imply live ambulance dispatch or guarantee response times without a staffed, operational dispatch service.

## 6. Correction and moderation process

- Accept correction reports with provider/listing, field to correct, proposed correction and optional evidence.
- Generate a case ID and send a receipt after the backend stores the report.
- Route safety-critical reports (wrong phone, closed clinic, incorrect emergency details) to a priority queue.
- Review the source, contact the provider when appropriate, record the decision and update the public record.
- Keep an audit trail with before/after values, reviewer and timestamp. Rate-limit spam and provide a way to challenge a rejected correction.

The current form is a front-end demonstration only; it does not transmit or store reports.

## 7. Pilot metrics

Track a small set of measurable outcomes: provider records verified, record freshness, searches with at least one relevant result, provider-detail opens, contact-link clicks, successful provider claims, correction resolution time and user-reported inaccuracies. Establish a baseline before setting targets. Do not report conversion or satisfaction figures until measured.

## 8. Decisions needed from the founder

Approve the pilot city and service mix; define what counts as verified; select the source of location/provider data; confirm who reviews listings and corrections; approve privacy/retention rules; and decide whether the first release routes users directly to providers or includes a callback/booking feature.

---

**Implementation boundary:** Everything above is a proposed operating plan. The supplied PawCare website is a local clickable prototype with six fictional demo listings, client-side search and demonstration forms. It is not a live directory or emergency service.
