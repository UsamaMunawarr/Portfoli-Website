**AI Studio Prompt**

Build a premium multi-page course platform for "AI with Surya" \- enterprise AI training.

## **INSPIRATION & STYLE**

* Linear.app: Dark SaaS aesthetic, subtle glows, smooth animations, glassmorphic elements  
* designcode.io: Floating images at different depths, editorial magazine-spread feel  
* Rolls Royce: Luxury restraint, confident not loud, gold accents used sparingly  
* Overall mood: Dark luxury meets modern tech. Sophisticated, premium, trustworthy.

## **PAGES TO CREATE**

1. Home (landing page with hero, courses, testimonials, CTA, footer)  
2. Login (split-screen with portrait image left, form right)  
3. Register (split-screen with portrait image left, form right)  
4. About  
5. Contact

## **COLORS (Use these EXACT values everywhere)**

* Page background: \#050508 (deep black with slight blue tint)  
* Card/Surface background: \#0a0a12  
* Elevated elements: \#10101a  
* Gold primary accent: \#D4AF37 (use for CTAs, highlights, borders, prices)  
* Gold glow: rgba(212,175,55,0.3) (use for hover states, glows)  
* Gold subtle: rgba(212,175,55,0.15) (use for borders, dividers)  
* Blue secondary accent: \#3B82F6 (use sparingly for tech elements)  
* Blue glow: rgba(59,130,246,0.3)  
* Text primary: \#FFFFFF  
* Text secondary: rgba(255,255,255,0.6)  
* Text tertiary: rgba(255,255,255,0.4)  
* Card background: rgba(255,255,255,0.03)  
* Card border: rgba(212,175,55,0.15)

## **TYPOGRAPHY**

* Font family: "Instrument Sans" from Google Fonts (fallback: system-ui, sans-serif)  
* Hero headline: 4.5rem on desktop, 2.5rem on mobile, font-weight 700, letter-spacing \-0.02em, line-height 1.1  
* Section titles: 2.5rem, font-weight 600  
* Card titles: 1.5rem, font-weight 600  
* Body text: 1rem, font-weight 400, line-height 1.6  
* Labels and tags: 0.875rem, font-weight 500, uppercase, letter-spacing 0.05em

## **SPACING SYSTEM**

* Section padding: 120px vertical on desktop, 60px on mobile  
* Container: max-width 1200px, centered with auto margins  
* Card padding: 32px  
* Grid gaps: 24px  
* Component spacing: 16px, 24px, 32px, 48px increments

---

## **PAGE 1: HOME (LANDING PAGE)**

### **SECTION 1: NAVIGATION**

* Position: sticky at top, z-index 50  
* Height: 72px  
* Background: rgba(5,5,8,0.8) with backdrop-blur-xl  
* Border-bottom: 1px solid rgba(212,175,55,0.1)

Layout (three columns):

* LEFT: Logo  
  * "AI" in gold (\#D4AF37), bold  
  * "with Surya" in white (\#FFFFFF), regular weight  
  * No space between, reads as "AIwith Surya"  
*   
* CENTER: Navigation links  
  * Links: "Courses", "About", "Testimonials", "Login"  
  * Color: white, opacity 0.8  
  * Hover: gold (\#D4AF37)  
  * Font-size: 0.875rem  
  * Gap between links: 32px  
*   
* RIGHT: CTA Button  
  * Text: "Get Started"  
  * Background: \#D4AF37 (gold)  
  * Text color: \#050508 (black)  
  * Padding: 12px 24px  
  * Border-radius: 8px  
  * Hover: brightness 1.1, subtle glow  
* 

### **SECTION 2: HERO**

* Minimum height: 100vh (full viewport)  
* Padding-top: 120px (to account for nav)  
* Background: \#050508  
* Layout: Two columns using CSS Grid or Flexbox  
  * Left column: 55% width (content)  
  * Right column: 45% width (floating images)  
  * Gap: 48px  
  * Align items: center vertically  
* 

#### **LEFT COLUMN (Content):**

ELEMENT 1 \- Badge:

* Text: "ENTERPRISE AI TRAINING"  
* Font-size: 0.75rem  
* Font-weight: 500  
* Letter-spacing: 0.1em  
* Text transform: uppercase  
* Color: \#D4AF37 (gold)  
* Border: 1px solid rgba(212,175,55,0.5)  
* Background: rgba(212,175,55,0.1)  
* Padding: 8px 16px  
* Border-radius: 9999px (pill shape)  
* Margin-bottom: 24px

ELEMENT 2 \- Headline:

* Text: "Master AI That Actually Ships"  
* The word "AI" should be gold (\#D4AF37), rest is white (\#FFFFFF)  
* Font-size: 4.5rem (desktop), 2.5rem (mobile)  
* Font-weight: 700  
* Letter-spacing: \-0.02em  
* Line-height: 1.1  
* Margin-bottom: 24px

ELEMENT 3 \- Subheadline:

* Text: "20 years in enterprise tech. 6 years at FAANG. I don't teach theory — I teach what gets deployed to production."  
* Color: rgba(255,255,255,0.6)  
* Font-size: 1.25rem (desktop), 1rem (mobile)  
* Line-height: 1.6  
* Max-width: 540px  
* Margin-bottom: 24px

ELEMENT 4 \- Stats Row:

* Text: "6,700+ YouTube Subscribers • 20+ Years Experience • Fortune 500 Trained"  
* Color: rgba(255,255,255,0.5)  
* Font-size: 0.875rem  
* The bullet separators (•) should be gold (\#D4AF37)  
* Margin-bottom: 32px

ELEMENT 5 \- Button Group:

* Two buttons side by side  
* Gap: 16px

Button 1 (Primary):

* Text: "Explore Courses"  
* Background: \#D4AF37 (gold)  
* Text color: \#050508 (black)  
* Font-weight: 600  
* Padding: 16px 32px  
* Border-radius: 8px  
* Hover: Add box-shadow 0 0 30px rgba(212,175,55,0.4)

Button 2 (Secondary):

* Text: "Watch Free on YouTube"  
* Background: transparent  
* Border: 1px solid \#D4AF37  
* Text color: \#D4AF37  
* Font-weight: 600  
* Padding: 16px 32px  
* Border-radius: 8px  
* Hover: Background rgba(212,175,55,0.1)

#### **RIGHT COLUMN (Floating Image Gallery):**

Create exactly 8 placeholder boxes arranged in a scattered, floating layout that feels like a magazine spread:

PLACEHOLDER 1:

* Size: 280px x 350px  
* Position: top-right area  
* Rotation: 3deg  
* Z-index: 3  
* Label inside: "PHOTO 1"

PLACEHOLDER 2:

* Size: 200px x 250px  
* Position: middle-right, slightly below Photo 1  
* Rotation: \-2deg  
* Z-index: 4  
* Label: "PHOTO 2"

PLACEHOLDER 3:

* Size: 240px x 300px  
* Position: center-left of the image area  
* Rotation: \-4deg  
* Z-index: 2  
* Label: "PHOTO 3"

PLACEHOLDER 4:

* Size: 180px x 225px  
* Position: bottom-center  
* Rotation: 5deg  
* Z-index: 5  
* Label: "PHOTO 4"

PLACEHOLDER 5:

* Size: 160px x 200px  
* Position: top-left of image area  
* Rotation: \-3deg  
* Z-index: 1  
* Label: "PHOTO 5"

PLACEHOLDER 6:

* Size: 200px x 250px  
* Position: bottom-right  
* Rotation: 2deg  
* Z-index: 4  
* Label: "PHOTO 6"

PLACEHOLDER 7:

* Size: 150px x 190px  
* Position: top-center  
* Rotation: 6deg  
* Z-index: 2  
* Label: "PHOTO 7"

PLACEHOLDER 8:

* Size: 170px x 210px  
* Position: bottom-left  
* Rotation: \-5deg  
* Z-index: 3  
* Label: "PHOTO 8"

Each placeholder styling:

* Background: rgba(255,255,255,0.02)  
* Border: 2px dashed rgba(212,175,55,0.3)  
* Border-radius: 12px  
* Display: flex, align-items: center, justify-content: center  
* Label color: rgba(255,255,255,0.3)  
* Label font-size: 0.875rem  
* Box-shadow: 0 20px 40px rgba(0,0,0,0.3)  
* Add subtle gold glow: box-shadow 0 0 60px rgba(212,175,55,0.1)

### **SECTION 3: COURSES**

* Background: \#050508  
* Padding: 120px vertical

Header:

* Title: "Premium Courses"  
* Font-size: 2.5rem  
* Font-weight: 600  
* Color: white  
* Text-align: center  
* Below title: Gold underline  
  * Width: 60px  
  * Height: 3px  
  * Background: \#D4AF37  
  * Margin: 16px auto 48px auto  
* 

Grid:

* Display: grid  
* Grid-template-columns: repeat(2, 1fr) on desktop, 1fr on mobile  
* Gap: 24px  
* Max-width: 900px  
* Margin: 0 auto

#### **COURSE CARD STYLING (Apply to all 4):**

* Background: rgba(255,255,255,0.03)  
* Border: 1px solid rgba(212,175,55,0.15)  
* Border-radius: 16px  
* Padding: 32px  
* Transition: all 0.3s ease  
* Hover effects:  
  * Border-color: rgba(212,175,55,0.4)  
  * Box-shadow: 0 0 40px rgba(212,175,55,0.15)  
  * Transform: translateY(-4px)  
* 

Card internal layout:

* Tag (top): uppercase, small, gold color, letter-spacing 0.05em  
* Title: 1.5rem, font-weight 600, white, margin-top 12px  
* Description: 1rem, rgba(255,255,255,0.6), line-height 1.6, margin-top 12px  
* Meta info: 0.875rem, rgba(255,255,255,0.4), margin-top 16px  
* Price: 1.75rem, font-weight 700, gold (\#D4AF37), margin-top 16px  
* Link: "Enroll Now →", gold color, font-weight 500, margin-top 16px, hover underline

#### **CARD 1:**

* Tag: "AGENTIC AI • LLMS"  
* Title: "Build Production AI Agents"  
* Description: "From zero to deployed. Learn to build AI agents that actually work in enterprise environments with patterns that scale."  
* Meta: "12 modules • 8 hours of content"  
* Price: "$297"

#### **CARD 2:**

* Tag: "CLOUD • DEVOPS"  
* Title: "Deploy AI to Production"  
* Description: "Ship AI to production in minutes, not weeks. Learn the infrastructure patterns that actually work at scale."  
* Meta: "8 modules • 5 hours of content"  
* Price: "$197"

#### **CARD 3:**

* Tag: "STRATEGY • GTM"  
* Title: "Enterprise AI Strategy"  
* Description: "Turn your AI prototype into a product that sells. Learn positioning, pricing, and go-to-market for AI products."  
* Meta: "6 modules • 4 hours of content"  
* Price: "$497"

#### **CARD 4:**

* Tag: "1:1 MENTORSHIP"  
* Title: "Private Coaching"  
* Description: "Direct access to 20 years of enterprise experience. Personalized guidance for your specific AI challenges."  
* Meta: "4 sessions per month"  
* Price: "$1,500/mo"

### **SECTION 4: TESTIMONIALS**

* Background: \#0a0a0a  
* Padding: 120px vertical  
* Overflow: hidden

Header:

* Title: "What Students Say"  
* Same styling as Courses section title  
* Gold underline below

Testimonial Container:

* Display: flex  
* Gap: 24px  
* Overflow-x: auto (horizontal scroll)  
* Padding-bottom: 20px (for scrollbar)  
* Scroll-snap-type: x mandatory  
* Hide scrollbar on webkit

#### **TESTIMONIAL CARD STYLING (Apply to all 5):**

* Width: 350px (fixed, don't shrink)  
* Flex-shrink: 0  
* Background: rgba(255,255,255,0.03)  
* Border: 1px solid rgba(255,255,255,0.1)  
* Border-radius: 12px  
* Padding: 28px  
* Scroll-snap-align: start

Card internal layout:

* Quote icon: " (large, gold, opacity 0.3, font-size 3rem, top-left)  
* Quote text: 1rem, rgba(255,255,255,0.8), font-style italic, line-height 1.7  
* Author section (bottom):  
  * Name: white, font-weight 600  
  * Title: gold (\#D4AF37), font-size 0.875rem  
* 

#### **TESTIMONIAL 1:**

* Quote: "Surya's course helped me deploy my first AI agent to production in a week. His enterprise perspective is exactly what was missing from other tutorials."  
* Name: "Priya S."  
* Title: "Tech Lead, Fortune 500"

#### **TESTIMONIAL 2:**

* Quote: "Finally, someone who understands that enterprise AI isn't about flashy demos — it's about shipping reliable systems that work at scale."  
* Name: "Marcus C."  
* Title: "AI Lead, Consulting"

#### **TESTIMONIAL 3:**

* Quote: "The 1:1 coaching was worth every penny. Surya helped us avoid 3 months of architectural mistakes and saved our project."  
* Name: "David M."  
* Title: "CTO, AI Startup"

#### **TESTIMONIAL 4:**

* Quote: "I've watched every YouTube video twice. The paid courses go even deeper into the production patterns I needed."  
* Name: "Aisha J."  
* Title: "ML Engineer"

#### **TESTIMONIAL 5:**

* Quote: "Clear, practical, no-BS teaching. Surya breaks down complex enterprise patterns into steps I can actually follow."  
* Name: "Robert K."  
* Title: "Solutions Architect"

### **SECTION 5: CTA**

* Background: \#050505  
* Position: relative  
* Padding: 160px vertical  
* Text-align: center

Background effect:

* Add a subtle radial gradient glow in the center  
* Background: radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)

Content (centered, max-width 600px):

* Headline: "Ready to Build AI That Ships?"  
* Font-size: 2.5rem  
* Font-weight: 600  
* Color: white  
* Margin-bottom: 16px  
* Subtext: "Join 6,700+ practitioners learning enterprise AI patterns that actually work in production."  
* Font-size: 1.125rem  
* Color: rgba(255,255,255,0.6)  
* Margin-bottom: 32px  
* Button: "Get Started Today"  
* Background: \#D4AF37  
* Color: \#050508  
* Font-size: 1.125rem  
* Font-weight: 600  
* Padding: 18px 48px  
* Border-radius: 8px  
* Hover: box-shadow 0 0 40px rgba(212,175,55,0.5)  
* Guarantee text: "30-day money back guarantee"  
* Font-size: 0.875rem  
* Color: rgba(255,255,255,0.4)  
* Margin-top: 16px

### **SECTION 6: FOOTER**

* Background: \#050505  
* Border-top: 1px solid rgba(255,255,255,0.1)  
* Padding: 48px vertical

Layout (three columns):

* LEFT: Logo "AI with Surya" (same style as nav)  
* CENTER: Links in a row  
  * "Courses", "About", "YouTube", "Contact", "Privacy", "Terms"  
  * Color: rgba(255,255,255,0.6)  
  * Font-size: 0.875rem  
  * Gap: 24px  
  * Hover: white  
*   
* RIGHT: Copyright  
  * "© 2025 AI with Surya. All rights reserved."  
  * Color: rgba(255,255,255,0.4)  
  * Font-size: 0.875rem  
* 

---

## **PAGE 2: LOGIN**

Full viewport height, split into two equal columns (50/50):

### **LEFT COLUMN (50%):**

* Background: linear-gradient(135deg, \#0a0a12 0%, \#050508 100%)  
* Position: relative  
* Display: flex  
* Flex-direction: column  
* Align-items: center  
* Justify-content: center  
* Padding: 48px

Background pattern overlay:

* Add a subtle dot grid pattern  
* Background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)  
* Background-size: 24px 24px

Center content:  
PORTRAIT PLACEHOLDER:

* Width: 350px  
* Height: 450px  
* Background: rgba(255,255,255,0.02)  
* Border: 2px dashed rgba(212,175,55,0.3)  
* Border-radius: 16px  
* Display: flex  
* Align-items: center  
* Justify-content: center  
* Text inside: "Portrait Photo" (rgba(255,255,255,0.3))  
* Box-shadow: 0 0 80px rgba(212,175,55,0.15)

Below placeholder (24px gap):

* Logo: "AI with Surya" (same style as nav, centered)  
* Tagline: "Enterprise AI Training"  
  * Font-size: 0.875rem  
  * Color: rgba(255,255,255,0.5)  
  * Margin-top: 8px  
* 

### **RIGHT COLUMN (50%):**

* Background: \#050508  
* Display: flex  
* Align-items: center  
* Justify-content: center  
* Padding: 48px

Form container:

* Max-width: 400px  
* Width: 100%

ELEMENT 1 \- Title:

* Text: "Welcome Back"  
* Font-size: 2rem  
* Font-weight: 700  
* Color: white  
* Margin-bottom: 8px

ELEMENT 2 \- Subtitle:

* Text: "Sign in to continue your learning journey"  
* Font-size: 1rem  
* Color: rgba(255,255,255,0.6)  
* Margin-bottom: 32px

ELEMENT 3 \- Form:

Email Input:

* Label: "Email" (font-size 0.875rem, color rgba(255,255,255,0.8), margin-bottom 8px)  
* Input styling:  
  * Width: 100%  
  * Background: rgba(255,255,255,0.03)  
  * Border: 1px solid rgba(255,255,255,0.1)  
  * Border-radius: 8px  
  * Padding: 14px 16px  
  * Color: white  
  * Font-size: 1rem  
  * Focus: border-color \#D4AF37, box-shadow 0 0 0 3px rgba(212,175,55,0.2)  
*   
* Margin-bottom: 20px

Password Input:

* Same styling as email  
* Label: "Password"

Forgot Password Link:

* Text: "Forgot password?"  
* Color: \#D4AF37  
* Font-size: 0.875rem  
* Text-align: right  
* Margin-top: 8px  
* Margin-bottom: 24px  
* Hover: underline

Sign In Button:

* Text: "Sign In"  
* Width: 100%  
* Background: \#D4AF37  
* Color: \#050508  
* Font-weight: 600  
* Padding: 14px  
* Border-radius: 8px  
* Font-size: 1rem  
* Hover: box-shadow 0 0 30px rgba(212,175,55,0.4)  
* Margin-bottom: 24px

ELEMENT 4 \- Divider:

* Horizontal line with "or" text in center  
* Line color: rgba(255,255,255,0.1)  
* "or" text: rgba(255,255,255,0.4), font-size 0.875rem  
* Margin-bottom: 24px

ELEMENT 5 \- Google Button:

* Text: "Continue with Google"  
* Width: 100%  
* Background: transparent  
* Border: 1px solid rgba(255,255,255,0.2)  
* Color: white  
* Padding: 14px  
* Border-radius: 8px  
* Hover: background rgba(255,255,255,0.05)  
* Margin-bottom: 32px

ELEMENT 6 \- Register Link:

* Text: "Don't have an account? Register"  
* "Don't have an account?" in rgba(255,255,255,0.6)  
* "Register" in \#D4AF37, hover underline  
* Font-size: 0.875rem  
* Text-align: center

---

## **PAGE 3: REGISTER**

Same split-screen layout as Login page.

### **LEFT COLUMN:**

Identical to Login page (portrait placeholder, logo, tagline)

### **RIGHT COLUMN:**

ELEMENT 1 \- Title:

* Text: "Create Account"  
* Same styling as Login title

ELEMENT 2 \- Subtitle:

* Text: "Start your enterprise AI journey today"

ELEMENT 3 \- Form:

Full Name Input:

* Label: "Full Name"  
* Same input styling as Login

Email Input:

* Label: "Email"  
* Same styling

Password Input:

* Label: "Password"  
* Same styling

Confirm Password Input:

* Label: "Confirm Password"  
* Same styling

Terms Checkbox:

* Checkbox with gold accent when checked (\#D4AF37)  
* Label: "I agree to the Terms of Service and Privacy Policy"  
* "Terms of Service" and "Privacy Policy" are gold links  
* Font-size: 0.875rem  
* Color: rgba(255,255,255,0.6)  
* Margin: 20px 0

Create Account Button:

* Text: "Create Account"  
* Same styling as Sign In button

Divider: Same as Login

Google Button:

* Text: "Continue with Google"  
* Same styling as Login

Sign In Link:

* Text: "Already have an account? Sign In"  
* Same styling pattern as Register link on Login page

---

## **PAGE 4: ABOUT**

### **NAVIGATION**

Same as all other pages

### **HERO AREA**

* Padding-top: 140px  
* Padding-bottom: 80px  
* Text-align: center  
* Title: "About Surya"  
* Font-size: 3rem  
* Font-weight: 700  
* Color: white  
* Subtitle: "20 years building enterprise technology"  
* Font-size: 1.25rem  
* Color: rgba(255,255,255,0.6)  
* Margin-top: 16px

### **CONTENT SECTION**

* Padding: 80px vertical  
* Max-width: 1000px  
* Margin: 0 auto  
* Display: grid  
* Grid-template-columns: 40% 60%  
* Gap: 64px  
* Align-items: start

#### **LEFT (Image):**

PLACEHOLDER:

* Width: 100%  
* Aspect-ratio: 3/4  
* Background: rgba(255,255,255,0.02)  
* Border: 2px dashed rgba(212,175,55,0.3)  
* Border-radius: 16px  
* Text inside: "About Photo"  
* Box-shadow: 0 0 60px rgba(212,175,55,0.1)

#### **RIGHT (Bio):**

Headline:

* Text: "I Build AI That Ships"  
* Font-size: 2rem  
* Font-weight: 600  
* Color: white  
* Margin-bottom: 24px

Paragraph 1:

* Text: "After 20 years in enterprise tech — including 6 years at FAANG and leadership roles at top consulting and enterprise software companies — I've seen what separates AI projects that make it to production from those that don't."  
* Font-size: 1.125rem  
* Color: rgba(255,255,255,0.7)  
* Line-height: 1.8  
* Margin-bottom: 20px

Paragraph 2:

* Text: "I created AI with Surya to share the patterns that actually work. No fluff. No toy demos. Just battle-tested approaches that get deployed to real enterprise environments."  
* Same styling as paragraph 1  
* Margin-bottom: 32px

Credibility Badges:

* Display: flex  
* Gap: 16px  
* Three small badges:  
  * "FAANG Experience"  
  * "Big 4 Consulting"  
  * "Enterprise Software"  
*   
* Each badge:  
  * Background: rgba(212,175,55,0.1)  
  * Border: 1px solid rgba(212,175,55,0.3)  
  * Color: \#D4AF37  
  * Font-size: 0.75rem  
  * Font-weight: 500  
  * Padding: 8px 16px  
  * Border-radius: 6px  
  * Text-transform: uppercase  
  * Letter-spacing: 0.05em  
* 

### **FOOTER**

Same as all other pages

---

## **PAGE 5: CONTACT**

### **NAVIGATION**

Same as all other pages

### **CONTENT**

* Padding-top: 160px  
* Padding-bottom: 160px  
* Max-width: 500px  
* Margin: 0 auto  
* Text-align: center

Title:

* Text: "Get in Touch"  
* Font-size: 2.5rem  
* Font-weight: 600  
* Color: white  
* Margin-bottom: 16px

Subtitle:

* Text: "Have a question? Want to collaborate? Drop me a message."  
* Font-size: 1rem  
* Color: rgba(255,255,255,0.6)  
* Margin-bottom: 40px

Form:

* Text-align: left

Name Input:

* Label: "Name"  
* Same styling as Login inputs  
* Margin-bottom: 20px

Email Input:

* Label: "Email"  
* Same styling  
* Margin-bottom: 20px

Message Textarea:

* Label: "Message"  
* Same styling as inputs but:  
  * Min-height: 150px  
  * Resize: vertical  
*   
* Margin-bottom: 24px

Submit Button:

* Text: "Send Message"  
* Width: 100%  
* Same styling as Sign In button

Alternative Contact:

* Text: "Or email directly: [hello@aiwithsurya.com](mailto:hello@aiwithsurya.com)"  
* Font-size: 0.875rem  
* Color: rgba(255,255,255,0.5)  
* Margin-top: 24px  
* Text-align: center  
* "[hello@aiwithsurya.com](mailto:hello@aiwithsurya.com)" should be a gold link

### **FOOTER**

Same as all other pages

---

## **ANIMATIONS (Basic \- AI Studio level)**

* Page load: Fade up animation on hero content (opacity 0→1, translateY 20px→0, duration 0.6s)  
* Scroll: Sections fade in as they enter viewport  
* Hover: All buttons get subtle glow effect  
* Hover: All cards lift slightly (translateY \-4px) and border brightens  
* Transitions: All interactive elements have transition: all 0.3s ease

Note: Advanced animations (parallax, text generate, glare effects) will be added in Antigravity using Aceternity UI.

## **TECHNICAL REQUIREMENTS**

* Framework: React 18+ with TypeScript  
* Styling: Tailwind CSS  
* Routing: React Router v6 for multi-page navigation  
* Animations: Framer Motion for basic animations  
* Fonts: Import "Instrument Sans" from Google Fonts  
* Responsive breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)  
* Mobile-first approach

## **IMPORTANT NOTES**

* All images are PLACEHOLDERS with dashed gold borders  
* Label each placeholder clearly (Photo 1, Photo 2, Portrait Photo, About Photo)  
* Real images will be generated separately using Nano Banana Pro  
* Maintain consistent spacing and color usage across ALL pages  
* Ensure all interactive elements have visible focus states for accessibility

