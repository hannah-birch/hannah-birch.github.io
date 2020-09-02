---
layout: default
title: Portfolio
permalink: /portfolio/
---

<h1 class="post-title">Portfolio</h1>

<ul>
{% for category in site.categories %}
  <h2>{{ category | first }}</h2>
    <ul>
    {% for post in category.last %}
      <li><a href="{{ post.url }}">{{ post.title }}</a>{{ post.outlet }}</li>
    {% endfor %}
    </ul>
{% endfor %}
</ul>




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
