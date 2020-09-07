---
layout: default
title: Writing
permalink: /writing/
---

<h1 class="post-title">Things I’ve written</h1>

<section>
  {% for post in site.categories['Writing'] %}
    <p class="post-meta">{{ post.outlet | append:',' }} {{ post.date | date: "%B %d, %Y" }}</p>

    <h2><a href="{{ post.url }}">{{ post.title }} </a></h2>
    <p>{{ post.summary }}
  {% endfor %}
