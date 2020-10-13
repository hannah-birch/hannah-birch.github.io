---
layout: default
title: Portfolio
permalink: /portfolio/
---

<h1 class="post-title">Portfolio</h1>

<div class="content-block">
  <h2>Featured work</h2>
  <p><strong>Homepage curation and breaking-news production:</strong> I <a href="/2014-03-22/oso-mudslide.html">contributed to the work of The Seattle Times’ digital team</a> during a deadly mudslide, a local TV station’s helicopter crash, elections, the Boston Marathon bombing, big business news from Boeing and Microsoft, and more. <a href="/homepage-breaking-news/">Here’s a detailed rundown</a>.</p>

  <p><strong>Style guides:</strong> I’ve written general and topic-specific style guides for the MTA, ProPublica, and The Seattle Times. These resources include house style rules and guidance for how to talk about homelessness, COVID-19, elections, and immigration issues. <a href="/style-guides/">See the full list.</a></p>
</div>

<h2>Projects</h2>

<h3>Content strategy</h3>

<div class="content-block">
  {% for post in site.categories['Content strategy'] %}
      <p><a href="{{ post.url }}">{{ post.title }} </a>{{ post.outlet }}</p>
  {% endfor %}
</div>


<h3>Project management and production</h3>

<div class="content-block">
  {% for post in site.categories['Project management and production'] %}
    <p><a href="{{ post.url }}">{{ post.title }} </a>{{ post.outlet }}</p>
  {% endfor %}
</div>


<h3>Art direction</h3>

<div class="content-block">
  {% for post in site.categories['Art direction'] %}
    <p><a href="{{ post.url }}">{{ post.title }} </a>{{ post.outlet }}</p>
  {% endfor %}
</div>


<h3>Page layout and digital design</h3>

<div class="content-block">
  {% for post in site.categories['Page layout and digital design'] %}
    <p><a href="{{ post.url }}">{{ post.title }} </a>{{ post.outlet }}</p>
  {% endfor %}
</div>


<h3>Illustration</h3>

<div class="content-block">
  {% for post in site.categories['Illustration'] %}
    <p><a href="{{ post.url }}">{{ post.title }} </a>{{ post.outlet }}</p>
  {% endfor %}
</div>


<h3>Interactive map</h3>

<div class="content-block">
  {% for post in site.categories['Interactive map'] %}
    <p><a href="{{ post.url }}">{{ post.title }} </a>{{ post.outlet }}</p>
  {% endfor %}
</div>
