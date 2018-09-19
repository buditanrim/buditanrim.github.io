---
layout: post
title:  "Common icon design problems you should avoid"
date:   2018-09-17 14:49:24 -0400
categories: study
tags: icon
author: "Budi Tanrim"
image:
 path: /img/post/guy.png
 height: 224
 width: 560
---

Nowadays, icon is often a part of the design system. It's not a surprise because icon is effective to quickly communicate the idea at a glance, like in your smartwatch for instance. However, it become unfortunate if the icon is unoptimized or unharmonized within the design system.

I'm fortunate that I had a chance to work on few icon systems for various companies<sup>1</sup>. Along the way, I've encountered some common problems and I want to share it here. So, here it goes in no particular order.

<!-- ![image](/img/post/guy.png) -->
<!-- {% include img.html url="/img/post/guy.png" url-2="/img/post/guy-2.png" description="guy" %} -->

### Too complex and become visual noise
Study by [Byrne (1993)][complex] showed that simple icons are easier for people to find. Participants were given 3 different type of file icons: blank, simple, and complex. Simple icons clearly outperform blank and complex icons. Simplicity is crucial in icon design to improve the visual clarity. Adding too much details won't help people understand the icon better; they slow people down.

{% include img.html url="/img/post/sep-2018/icon-problem-complex.jpg" url-2="/img/post/sep-2018/icon-problem-complex-2x.jpg" alt="Complex icon reduce clarity" %}

**Takeaway:** Less is more. Simplicity is essential in icon design to improve the clarity. However, don't oversimplified the icon because that won't be effective either.


### Too abstract to understand
Study shows that abstract icon has a lower accuracy than the concrete icon [(McDougall & Bruijn, 2001)][mcdougall] and actually trigger a higher cognitive processing load. Concrete icon is friendly to the users since they can reference it based on their real world object or experience.

{% include img.html url="/img/post/sep-2018/icon-problem-concrete.jpg" url-2="/img/post/sep-2018/icon-problem-concrete-2x.jpg" alt="Complex icon reduce clarity" %}
{% include img.html url="/img/post/sep-2018/icon-problem-concrete-cam.jpg" url-2="/img/post/sep-2018/icon-problem-concrete-cam-2x.jpg" alt="Complex icon reduce clarity" %}

**Consideration:** Whenever possible, try to create concrete icon that based on the real world object. However, from my experience, this will never be the absolute solution because not every action has a concrete concept. For example, when we need to create _share_ icon -- the share itself is abstract and in this case we should fallback to what the most common icon used in the industry.

### Trying to convey many things
One of the common problems I encountered when audit the icon is that it's trying to convey the whole idea of the message. While the icon is trying to do that, it actually lost the clarity and become meaningless.

**Takeaway:** Focus on conceptualize one idea and do it right.


### Irrelevant message
Icon works best when paired with the text label [(nngroup, 2014)][nngroup-research] because it helps overcome the ambiguity of the icon.
But, oh boy. While that is true, you should still choose the icon metaphor considerably.

![image](/img/post/icon-problem-complex.jpg){:class="img-example"}

**Takeaway:** The label will help clarify the icon's meaning, but they should work harmoniously. Failing at doing this will decrease the value of the icon.

### Hold local value
Cultural diversity leads to different views and assumptions. That being said, if your product is being used in international scale. You should pay attention on this topic.

# Closing chat to reader
It's important that you take these points with a consideration of your own context and problem you're facing. The points I make here is focusing on the general best practice for system icon (small icon) where the goal is to focus on helping users navigate or do action.

On the side, it's worth to consider to create a set of principles when you see there are common issues with the icon while audit them. If you're interested to chat about this, 

[complex]: https://www.researchgate.net/publication/2466259_Using_Icons_to_Find_Documents_Simplicity_Is_Critical
[nngroup-research]: https://www.nngroup.com/articles/icon-usability/
[mcdougall]: https://www.researchgate.net/publication/12797317_Measuring_symbol_and_icon_characteristics_Norms_for_concreteness_complexity_meaningfulness_familiarity_and_semantic_distance_for_239_symbols
[concrete]: http://www.comm.rwth-aachen.de/files/effects_of_icon_concreteness.pdf

