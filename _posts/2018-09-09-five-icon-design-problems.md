---
layout: post
title: "Common icon design problems you should avoid"
description: "Important consideration for your icon design to improve your design system"
punchline: false
date: 2018-09-17 +0700
categories: craft
tags: icon
author: "Budi Tanrim"

image:
 path: /img/seo/icon-problem.jpg
 height: 630
 width: 1200
gif: false
twitter-seo: 
 - "seo/icon-problem.jpg"
---

Nowadays, icons are often a part of the design system. It's not a surprise because icons are effective to quickly communicate the idea at a glance, like the one in your smartwatch.

I'm fortunate because I had a chance to work on a few icon systems for various companies<sup id="a1">[1](#fn1)</sup>. In this opportunity, I want to share some common problems I've encountered. 

So, here it goes in no particular order.

### Visually complex
Study by [Byrne (1993)][complex]{:target="_blank"} showed that simple icons are more accessible for people to find. Participants were given 3 different type of file icons: blank, simple, and complex. Simple icons clearly outperform blank and complex icons. Simplicity is crucial in icon design to improve the visual clarity. Adding too many details won't help people understand the icon better; they slow people down.

{% include img-caption.html url="/img/post/sep-2018/icon-problem-complex.jpg" url-2="/img/post/sep-2018/icon-problem-complex-2x.jpg" alt="Complex icon reduce clarity" caption="Simplicity is crucial for clarity." class="dashed medium" %}

**Takeaway:** Less is more. The icon can be visual noise and not helpful when it's too complex. Simplicity is essential in icon design to improve the clarity. However, don't oversimplify the icon because that won't be effective either.


### Conceptually abstract
Study shows that abstract icon has a lower accuracy than the concrete icon [(McDougall & Bruijn, 2001)][mcdougall]{:target="_blank"} and actually trigger a higher cognitive processing load. A concrete icon is friendly to the users since they can reference it based on their real-world object or experience.

{% include img.html url="/img/post/sep-2018/icon-problem-concrete.jpg" url-2="/img/post/sep-2018/icon-problem-concrete-2x.jpg" alt="Complex icon reduce clarity" class="dashed medium" %}
{% include img.html url="/img/post/sep-2018/icon-problem-concrete-cam.jpg" url-2="/img/post/sep-2018/icon-problem-concrete-cam-2x.jpg" alt="Complex icon reduce clarity" caption="if the icon become too abstract, it's harder to grasp the idea." class="dashed medium" %}

Now, abstract in the design, like the battery example may not seem obvious here, but when you put it in the context - study shows the concrete icon [perform 43% better][icon-concreteness]{:target="_blank"}.

**Consideration:** Whenever possible, try to create a concrete icon that based on the real-world object. However, from my experience, this will never be the absolute solution because not every action has a concrete concept. For example, when we need to create _share_ icon -- the share itself is abstract and in this case, we should fall back to what the most common icon used in the industry.

### Imbalance proportion
The designer often either forgets, neglect or underestimate the importance of the negative space around the icon. Failing at respecting the negative space can make icons looks funky when they're sitting side by side.
{% include img-caption.html url="/img/post/sep-2018/icon-problem-negative-space.jpg" url-2="/img/post/sep-2018/icon-problem-negative-space-2x.jpg" alt="Complex icon reduce clarity" class="dashed medium" %}
{% include img-caption.html url="/img/post/sep-2018/icon-problem-negative-space-b.gif" url-2="/img/post/sep-2018/icon-problem-negative-space-b-2x.gif" alt="negative space" caption="Even though they're in the same dimension, the negative space cost a visual illusion." class="dashed medium" %}

**Takeaway:** Respect the positive and negative form altogether. Also, use _icon-grid_ as a tool to help you see them through.


### Irrelevant message
Icon works best when paired with the text label [(NNgroup, 2014)][nngroup-research]{:target="_blank"} because it helps overcome the ambiguity of the icon.
But, oh boy. While that is true, you should still choose the icon metaphor considerably.

{% include img-caption.html url="/img/post/sep-2018/icon-problem-relevant.jpg" url-2="/img/post/sep-2018/icon-problem-relevant-2x.jpg" alt="Complex icon reduce clarity" caption="Taken from the real project. For real, this happens." class="dashed medium" %}

**Takeaway:** The label will help clarify the icon's meaning, but they should work harmoniously. Failing at doing this will decrease the value of the icon.

### Insensitive to different cultures
Even though there are few researches around this topic, it is still early to judge. However, coming from Indonesia and live in Canada makes me realize that cultural diversity leads to different views and assumptions. Which also true for the symbol, too.

{% include img-caption.html url="/img/post/sep-2018/icon-problem-international.jpg" url-2="/img/post/sep-2018/icon-problem-international-2x.jpg" alt="internationzalitation is important" caption="Dollar sign here works for most countries with $ concept, but not necessarily work for all countries. The paper bill concept is more abstract but still get to the point." class="dashed medium" %}

**Consideration:** If people from around the world use your product, consider to generalize your icon design. In some cases though, localizing is better than internationalizing. I think the further study will still be needed on this.

# A closing chat with the reader
Thanks for reading! To summarize, you have to be careful of these:
- **The complexity** of the icon
- **The proportion** of the icon
- **The concreteness** of the icon
- **Relevancy** of the icon
- **Cultural sensitivity**

It's essential that you take these points with considerations of your own context and problem you're facing. The points I make here is focusing on the general best practice for system icon (small icon) where the goal is to focus on helping users navigate or do action.

On the side, it's worth to consider to create a set of principles when you see there are common issues with the icon while auditing them. [Reach me out][buditwitter]{:target="_blank"} if you're interested to chat about this.

{: .footnote-header}
Footnotes:
1. {: #fn1} I've fortunate to work with Yahoo on their icon set, Marvel app, and Shopify. [↩](#a1)

[complex]: https://www.researchgate.net/publication/2466259_Using_Icons_to_Find_Documents_Simplicity_Is_Critical
[nngroup-research]: https://www.nngroup.com/articles/icon-usability/
[mcdougall]: https://www.researchgate.net/publication/12797317_Measuring_symbol_and_icon_characteristics_Norms_for_concreteness_complexity_meaningfulness_familiarity_and_semantic_distance_for_239_symbols
[concrete]: http://www.comm.rwth-aachen.de/files/effects_of_icon_concreteness.pdf
[icon-concreteness]: https://link.springer.com/chapter/10.1007/978-3-540-70540-6_12
[other-concreteness]: https://www.researchgate.net/publication/221009688_Effects_of_Icon_Concreteness_and_Complexity_on_Semantic_Transparency_Younger_vs_Older_Users
[buditwitter]: https://twitter.com/buditanrim

