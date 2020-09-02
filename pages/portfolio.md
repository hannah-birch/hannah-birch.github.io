---
layout: default
title: Portfolio
permalink: /portfolio/
---

<h1 class="post-title">Portfolio</h1>

<h2>Homepage production and breaking news coverage</h2>
<p>I contributed to the work of The Seattle Times’ digital team during a deadly mudslide, a local TV station’s helicopter crash, elections, the Boston Marathon bombing, big business news from Boeing and Microsoft, and more. <a href="/portfolio/homepage-and-breaking-news/">Here’s a detailed rundown.</a></p>

<p>More projects are below.</p>

<ul class="post-list">
  {% for post in site.posts %}
  {% if post.layout == 'link' %}  
    <li>
    <p class="post-meta">{{ post.date | date: "%b %d, %Y" }}</p>
    <p class="post-meta">{{ post.content-type }}</p>
    <h2>
      <a class="post-link" href="{{ post.source-url }}">{{ post.title }}</a>
    </h2>
    <p>{{ post.summary }}</p>
    </li>

  {% else %}
    <li>
      <p class="post-meta">{{ post.date | date: "%b %d, %Y" }}</p>
      <p class="post-meta">{{ post.content-type }}</p>
      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>
      <p>{{ post.summary }}</p>
    </li>
      {% endif %}
  {% endfor %}
</ul>
