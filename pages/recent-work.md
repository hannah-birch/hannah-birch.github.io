---
layout: default
title: Recent Work
permalink: /recent-work/
---

<h1 class="post-title">Recent Work</h1>

<ul class="post-list">
  {% for post in site.posts %}
  {% if post.layout == 'link' %}  
    <li>
    <span class="post-meta">{{ post.content-type }}, {{ post.date | date: "%b %d, %Y" }}</span>
    <h2>
      <a class="post-link" href="{{ post.source-url }}">{{ post.title }}</a>
    </h2>
    <p>{{ post.summary }}</p>
    </li>

  {% else %}
    <li>
      <span class="post-meta">{{ post.content-type }}, {{ post.date | date: "%b %d, %Y" }}</span>

      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>

      <p>{{ post.summary }}</p>

    </li>
      {% endif %}
  {% endfor %}
</ul>
