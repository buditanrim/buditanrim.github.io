---
layout: post
title: "Inspecting interface design — Conducting HE"
punchline: true
description: "Conducting heuristic evaluation together with the team"
date: 2021-04-04 07:18:00 +0700
categories: interface
tags: interface
author: "Budi Tanrim"

image:
 path: /img/seo/inspecting-03.jpg
 height: 630
 width: 1200
gif: false
twitter-seo: 
 - "seo/inspecting-03.jpg"
---

You sit in the room.

Together with me, product manager, and engineer.

Our team is working on the mobile game application.

We're about to inspect our work in progress interface. You see a phone and a piece of paper in front of you. The phone is installed with a Figma mirror for you to access the prototype and play with it. Also, there are three tasks written on the paper for you to complete.

There will be two rounds of inspection.

---


## First round

Okay, here's what you will do. First, you read the task: _As a newbie player, I want to play with my friend._

Then try it on the prototype. On each screen, you'll ask: Will the user know what to do? If your answer is no (or not sure), then write down why do you think so.

Here's an example:

{% include image.html 
src="/img/post/2021/04/he-screen-example-01-2021.jpg" 
alt="home screen" 
caption=" "
class="medium photo" %}

<br/>

**One the first page:** Will the user know what to do? <br/>
_Not sure. "Team" is not intuitively suggest it's a place to play with my friend._

**One the second page:** Will the user know what to do? <br/>
_Yes, I will need to play to get 300 stars. But I'm still not sure if this "Team" feature actually the one I need to play with my friend._

The idea of this first round is to simply assess the learnability of each page. By asking, “Will the user know what to do?” You are trying to identify potential issues on the page. This trick allows you to immerse yourself in the task. In some cases, you will have limitations because you are not doing the real environment task. For example, if you’re making a product for people who drive, the environment and the distraction when driving would not be captured when you perform this in the meeting room with your team.

To be clear, this first round is actually called a cognitive walkthrough. The next round is the heuristic evaluation. The difference is in this first round, you immerse into the task because you only ask the simple question. While, on the second round, you will scrutinize screen by screen by checking the heuristic principles.

---

## Second round

In this second round, we'll do an inspection with the selected heuristics principles:

- **Error prevention:** Does the interface prevent me from making errors?
- **Error recovery:** If I make a mistake, does it help me to recover?
- **Minimize memory load:** Does the interface minimize the user's cognitive load?
- **Provide feedback:** Does the interface provide feedback when we take action?
- **Speak natural and simple language:** Will the users understand the language? 

<br>

{% include image.html 
src="/img/post/2021/04/he-screen-example-04-2021.jpg" 
alt="home screen" 
caption=" "
class="medium photo" %}

<br/>

Then, one of the problem could be:

**Minimize memory load:** It tells me to reach 300 stars to unlock this team feature. I wonder, how much is my current star?


---


Hopefully, this gives you an idea of how it feels to perform the heuristic evaluation. At the end of this session, you'll get a lot of notes like that. Not all of them are important and critical. Which, that's why you will try to prioritize them next. Here's how I like to prioritize the issue.



---

#### Footnotes
1. Tan et al., Web evaluation: Heuristic evaluation vs. user testing (2009)
2. Doubleday, A., Ryan, M., Springett, M,. Sutcliffe, A.: A comparison of usability techniques for evaluating design (1997).
3. Kock E.D. et al., Usability evaluation methods: mind the gaps (2009)
4. Jeffries et al., User interface evaluation in the real world: a comparison of four techniques (1991)
5. Sears, A., Heuristics Walkthroughs: Finding the problems without the noise. International Journal of Human-Computer Interaction, 9, 213-234. (1997)
{:.footnotes-list}







