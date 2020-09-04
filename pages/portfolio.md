---
layout: default
title: Portfolio
permalink: /portfolio/
---

<h1 class="post-title">Portfolio</h1>

<h2>Homepage production and breaking news coverage</h2>
<p>I contributed to the work of The Seattle Times’ digital team during a deadly mudslide, a local TV station’s helicopter crash, elections, the Boston Marathon bombing, big business news from Boeing and Microsoft, and more. <a href="/homepage-breaking-news/">Here’s a detailed rundown.</a></p>

<p>More projects are below.</p>

<h3>Content strategy</h3>

<div>
  {% for post in site.categories['Content strategy'] %}
      <p><a href="{{ post.url }}">{{ post.title }} </a>{{ post.outlet }}
  {% endfor %}


<h3>Project management and production</h3>

  {% for post in site.categories['Project management and production'] %}
    <p><a href="{{ post.url }}">{{ post.title }} </a>{{ post.outlet }}
  {% endfor %}


<h3>Writing</h3>

  {% for post in site.categories['Writing'] %}
    <p><a href="{{ post.url }}">{{ post.title }} </a>{{ post.outlet }}
  {% endfor %}


<h3>Page layout and digital design</h3>

  {% for post in site.categories['Page layout and digital design'] %}
    <p><a href="{{ post.url }}">{{ post.title }} </a>{{ post.outlet }}
  {% endfor %}


<h3>Breaking news coverage</h3>

  {% for post in site.categories['Breaking news coverage'] %}
    <p><a href="{{ post.url }}">{{ post.title }} </a>{{ post.outlet }}
  {% endfor %}


<h3>Illustration</h3>

  {% for post in site.categories['Illustration'] %}
    <p><a href="{{ post.url }}">{{ post.title }} </a>{{ post.outlet }}
  {% endfor %}


<h3>Art direction</h3>

  {% for post in site.categories['Art direction'] %}
    <p><a href="{{ post.url }}">{{ post.title }} </a>{{ post.outlet }}
  {% endfor %}


<h3>Interactive map</h3>

  {% for post in site.categories['Interactive map'] %}
    <p><a href="{{ post.url }}">{{ post.title }} </a>{{ post.outlet }}
  {% endfor %}






<!-- {% for category in site.categories %}
  <h3>{{ category | first }}</h3>
  {% for post in category.last %}
  <p><a href="{{ post.url }}">{{ post.title }} </a>{{ post.outlet }}
  {% endfor %}
{% endfor %} -->
