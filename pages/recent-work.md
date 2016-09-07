---
layout: default
title: Recent Work
permalink: /recent-work/
---

<h1 class="post-title">Recent Work</h1>

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <span class="post-meta">{{ post.content-type }}, {{ post.date | date: "%B %d, %Y" }}</span>

      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>

      <p>{{ post.summary }}</p>

    </li>
  {% endfor %}
</ul>
