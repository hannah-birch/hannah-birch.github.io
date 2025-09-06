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

  <p><strong>Illustration commissions:</strong> I love the abstract thinking and collaboration that goes into art directing editorial illustrations. I worked with established and up-and-coming artists during my time at ProPublica, deliberately adding to the organization’s roster of BIPOC illustrators. <a href="/illustration-commissions">See the commissions.</a></p>
</div>

<h2>Projects</h2>

<h3>Content strategy, information architecture, and UX writing</h3>

<div class="content-block">
  <ul>
    {% for post in site.categories['Content strategy'] %}
        <li><a href="{{ post.url }}">{{ post.title }} </a> ({{ post.outlet }})</li>
    {% endfor %}
  </ul>
</div>


<h3>Project management and production</h3>

<div class="content-block">
  <ul>
    {% for post in site.categories['Project management and production'] %}
        <li><a href="{{ post.url }}">{{ post.title }} </a> ({{ post.outlet }})</li>
    {% endfor %}
  </ul>
</div>


<h3>Art direction</h3>

<div class="content-block">
  <ul>
    {% for post in site.categories['Art direction'] %}
        <li><a href="{{ post.url }}">{{ post.title }} </a> ({{ post.outlet }})</li>
    {% endfor %}
  </ul>
</div>


<h3>Page layout and digital design</h3>

<div class="content-block">
  <ul>
    {% for post in site.categories['Page layout and digital design'] %}
        <li><a href="{{ post.url }}">{{ post.title }} </a> ({{ post.outlet }})</li>
    {% endfor %}
  </ul>
</div>


<h3>Illustration</h3>

<div class="content-block">
  <ul>
    {% for post in site.categories['Illustration'] %}
        <li><a href="{{ post.url }}">{{ post.title }} </a> ({{ post.outlet }})</li>
    {% endfor %}
  </ul>
</div>


<h3>Interactive map</h3>

<div class="content-block">
  <ul>
    {% for post in site.categories['Interactive map'] %}
        <li><a href="{{ post.url }}">{{ post.title }} </a>({{ post.outlet }})</li>
    {% endfor %}
  </ul>
</div>
