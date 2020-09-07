---
layout: default
title: Writing
permalink: /writing/
---

<h1 class="post-title">Things I’ve written</h1>

<section>
  {% for post in site.categories['Writing'] %}
      <p><a href="{{ post.url }}">{{ post.title }} </a>{{ post.outlet }}
  {% endfor %}
