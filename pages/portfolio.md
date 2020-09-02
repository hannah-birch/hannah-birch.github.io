---
layout: default
title: Portfolio
permalink: /portfolio/
---

<h1 class="post-title">Portfolio</h1>

<h3>Homepage production and breaking news coverage</h3>
  <p>I handled a deadly mudslide, a local TV station’s helicopter crash, elections, the Boston Marathon bombing, and big news from Boeing and Microsoft while I was a news producer at The Seattle Times. <a href="/homepage-breaking-news/the-seattle-times">Here’s a detailed rundown.</a></p>

{% for category in site.categories %}
  <h3>{{ category | first }}</h3>
  {% for post in category.last %}
  <p><a href="{{ post.url }}">{{ post.title }} </a>{{ post.outlet }}
  {% endfor %}
{% endfor %}






<!-- <ul class="post-list">
  {% for post in site.posts %}
  {% if post.layout == 'link' %}  
    <li>
    <p class="post-meta">{{ post.date | date: "%b %d, %Y" }}</p>
    <p class="post-meta">{{ post.category }}</p>
    <h2>
      <a class="post-link" href="{{ post.source-url }}">{{ post.title }}</a>
    </h2>
    <p>{{ post.summary }}</p>
    </li>

  {% else %}
    <li>
      <p class="post-meta">{{ post.date | date: "%b %d, %Y" }}</p>
      <p class="post-meta">{{ post.category }}</p>
      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>
      <p>{{ post.summary }}</p>
    </li>
      {% endif %}
  {% endfor %}
</ul> -->
