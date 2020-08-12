---
layout: default
title: Portfolio
permalink: /portfolio/
---

<h1 class="post-title">Portfolio</h1>

<ul class="post-list">
  {% for post in site.posts %}
  {% if post.layout == 'link' %}  
    <li>
    <span class="post-meta">{{ post.date | date: "%b %d, %Y" }}</span>
    <h2>
      <a class="post-link" href="{{ post.source-url }}">{{ post.title }}</a>
    </h2>
    <p>{{ post.summary }}</p>
    <span class="post-meta">{{ post.content-type }}</span>
    </li>

  {% else %}
    <li>
      <p><span class="post-meta">{{ post.date | date: "%b %d, %Y" }}</span></p>
      <p><span class="post-meta">{{ post.content-type }}</span></p>
      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>
      <p>{{ post.summary }}</p>
    </li>
      {% endif %}
  {% endfor %}
</ul>
