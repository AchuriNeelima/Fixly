\# Fixly – Device Decision Support



\## What I built



I built \*\*Fixly\*\*, a one-page interactive concept that helps people understand what they might be dealing with when an electronic device stops working, before they spend money on repairing or replacing it.



When a laptop, phone, washing machine, or other device stops working, people usually have to make a decision quickly:



\- What happened?

\- What could be causing the problem?

\- What should I check first?

\- Is it worth repairing?

\- Should I replace it?



The problem is not always finding a repair shop. The bigger problem is making a decision without enough information.



The main idea behind Fixly is:



\*\*“Before you spend money, understand what you’re dealing with.”\*\*



Fixly does not make the repair-or-replace decision for the user. Instead, it provides initial guidance, possible causes, and useful comparison points so the user can make the final decision themselves.



The core product flow is:



\*\*UNDERSTAND → COMPARE → DECIDE\*\*



I designed the page as a pitch for a decision-maker, so I focused on explaining the problem quickly and showing one clear product workflow instead of trying to build a complete repair marketplace.



\---



\## Key decisions I made



One of my main decisions was to make the website \*\*interactive instead of presenting only static information\*\*.



The interactive demo allows the user to select a device and describe an issue. For example:



\*\*Laptop → Won’t turn on\*\*



Fixly then shows possible causes and an initial next step.



I intentionally describe these as \*\*possible causes rather than a confirmed diagnosis\*\*, because the concept is designed as a decision-support tool and should not pretend to replace a professional technician.



Another important decision was to keep the product flow simple:



\*\*Understand → Compare → Decide\*\*



First, the user understands the possible problem.



Second, they can compare repair and replacement considerations.



Finally, they make their own decision.



I also included a \*\*Repair vs Replace\*\* section to show the type of context Fixly could provide. The example uses an estimated device value, possible repair range, and replacement cost, along with factors such as:



\- Repair cost

\- Device age

\- Warranty

\- Expected useful life

\- Replacement cost



These values are presented as illustrative examples rather than guaranteed prices.



I deliberately avoided telling the user \*\*“repair this”\*\* or \*\*“buy a new one.”\*\* The goal is to reduce uncertainty, not remove the user's decision.



\---



\## Why I kept the MVP focused



For the MVP, I focused on one specific workflow instead of trying to build a complete repair ecosystem.



\### Phase 01 – Device Guidance



Help users understand possible causes and what they can check next.



\### Phase 02 – Repair Comparison



Provide more detailed repair-cost, device-value, warranty, and replacement context.



\### Phase 03 – Verified Repair Ecosystem



Potentially connect users with trusted repair providers and additional services.



For this submission, I focused mainly on \*\*Phase 01\*\*.



I intentionally did not build a full repair marketplace because the goal was to validate one focused problem first:



\*\*What should a person understand before spending money on a broken device?\*\*



\---



\## Purposeful interaction and motion



I used motion to communicate changes in the product state rather than adding animation just for decoration.



For example, the diagnostic flow can move through:



\*\*Problem reported → Reviewing information → Possible causes → What to check next → Repair or replace?\*\*



I also used:



\- Smooth section transitions

\- Interactive device selection

\- Issue selection states

\- Animated product cards

\- Repair vs replacement comparison interaction

\- Progress indicators

\- Hover and focus states

\- Sticky navigation behavior

\- Subtle button and card transitions



The intention was to make the page feel like a real product experience while keeping the animations restrained.



I also considered responsive behavior and reduced-motion accessibility so that the interaction does not depend entirely on animation.



\---



\## Where AI gave me weak or wrong output



I used \*\*Antigravity\*\* as an AI-assisted development tool while building Fixly.



I used AI mainly for brainstorming, structuring the page, generating implementation ideas, and refining parts of the frontend.



However, I did not use the first output directly.



One issue was that the initial implementation could become \*\*too feature-heavy\*\*, with too many sections and interactions. This made the main product idea less clear.



I reviewed the page against the assignment requirement of building a focused pitch and removed or simplified anything that did not directly support the main workflow.



I also noticed that some AI-generated wording could make Fixly sound like it was actually diagnosing a device or deciding whether someone should repair or replace it.



I changed that language to make the product positioning clearer:



\*\*Fixly provides possible causes and decision-support context. It does not provide a confirmed hardware diagnosis or make the final repair-or-replace decision.\*\*



I also tested the interactive flow myself and checked the page after making structural changes instead of assuming the generated implementation was correct.



This helped me treat AI as a development assistant rather than as the final decision-maker.



\---



\## Design decisions



I wanted the page to feel like a modern technology startup pitch rather than a traditional information website.



The design focuses on:



\- Clear visual hierarchy

\- Large, readable typography

\- Generous whitespace

\- Minimal card-based sections

\- Subtle borders and surfaces

\- Restrained use of gradients

\- One consistent accent style

\- Responsive layouts

\- Clear calls to action



I also avoided excessive visual effects, random animations, and unnecessary sections because they could distract from the main idea.



The goal was to make the concept understandable within the first few seconds while still giving the decision-maker enough detail to explore the product.



\---



\## Responsive design



The page was designed to work across:



\- Desktop

\- Tablet

\- Mobile



I paid attention to:



\- Responsive navigation

\- Touch-friendly controls

\- Device and issue selectors

\- Text wrapping

\- Card layouts

\- Spacing

\- Interactive elements

\- Avoiding horizontal overflow



The goal was to keep the main product story understandable regardless of screen size.



\---



\## Tech stack



\- React

\- TypeScript

\- Vite

\- Tailwind CSS

\- Framer Motion

\- Lucide Icons

\- Vercel



I used reusable frontend components to keep the implementation organized and make the different sections easier to maintain.



\---



\## AI-assisted development



I used \*\*Antigravity\*\* as an AI-assisted development tool during the implementation of Fixly.



AI helped with:



\- Initial brainstorming

\- Page structure

\- Component ideas

\- Frontend implementation

\- Interaction ideas

\- Refining some UI details



I reviewed and tested the generated implementation myself and made changes based on the assignment requirements and the actual user experience.



The final product decisions, scope, content, interaction behavior, and refinements were reviewed by me.



\---



\## Deployment



The project is deployed on Vercel.



\### Live Demo



https://fixly-cyan-three.vercel.app



\### GitHub Repository



https://github.com/AchuriNeelima/Fixly



\---



\## Future scope



If the MVP proves useful, Fixly could be expanded with:



\- More device categories

\- More detailed troubleshooting guidance

\- Warranty information

\- Device age and value estimation

\- Repair-cost data

\- Local repair options

\- Verified repair providers

\- User repair history

\- AI-assisted document/manual understanding

\- Better comparison between repair and replacement options



These are future possibilities rather than features required for the current MVP.



\---



\## Important product principle



Fixly is not intended to replace professional technicians or make financial decisions for users.



The product is designed to provide \*\*initial guidance and decision-support context\*\* before a user spends money.



The central idea is:



> \*\*The problem isn't deciding whether to repair or replace.  

> The problem is making that decision without enough information.\*\*



\---



\## Conclusion



Fixly starts with a simple problem:



\*\*A device stops working, and the user has to decide what to do next.\*\*



Instead of immediately pushing users toward a repair or a replacement, Fixly gives them a clearer first step.



\*\*Understand → Compare → Decide\*\*



The MVP focuses on one problem, one workflow, and one useful decision-support experience.



\*\*Before you spend money, understand what you’re dealing with.\*\*



