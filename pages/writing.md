---
layout: page
title: Writing
permalink: /writing/
---

<section>
  {% for post in site.categories['Writing'] %}
  <div class="content-block"><p class="meta">{{ post.outlet | append:',' }} {{ post.date | date: "%B %d, %Y" }}</p>

  <h2><a href="{{ post.url }}">{{ post.title }} </a></h2>
  <p>{{ post.summary }}</p>
  </div>
  {% endfor %}
