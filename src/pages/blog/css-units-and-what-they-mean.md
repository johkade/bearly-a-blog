---
layout: ../../layouts/BlogPageLayout.astro
title: css units and what they actually mean
draft: false
---

# CSS Units and What They Actually Mean

Let's get right to it:

## Pixel units

It's static pixels - as in always the same.

Keep in mind, that a pixel is actually a physical size (~1/96th of an inch). So on high density screens, the physical size is fairly stable.

## Percentages

Based on the parents size, if it has one. For fonts, it behaves the same as `em`.

## View width and height

Always based on the current view-port, not the parent. `1vh` => "1% of the view-ports height"

## rem and em

Both `rem` and `em` are relative sizes based on _font sizes_.

**rem** stands for "root element". So `rem` sizes are based on the root font size.
**em** stands for just "element". `em` units are based on the parent's font size.

```cs
height: 1rem; /*100% of the root font size*/
width: 1em; /*100% of the parent's font size*/
```

`rem` is useful for defining font sizes, while `em` is useful in some cases for defining e.g. the height of a text container.

## Physical sizes

Yes, they exist! If you deal with printed media, you may want to fall back to physical sizes:

`cm`, `mm`, `in`, `pc => 1/6th in` , `pt => 1/72nd in`, `px => 1/96th in`

## When to use which:

**Pixels** for absolute sizes, like borders, shadows and other unresponsive sizes. (Or as breakpoints of course.)

**rems** for font sizes and closely related/dependent containers

**ems** for internal component styles, where it just makes sense (e.g. height of a tag)

**vh**, **vw** and **percentages** are useful for layouts, like headers, side-bars and similar

But **flex** is still a top notch solution.
