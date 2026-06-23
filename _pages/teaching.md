---
layout: page
title: teaching
permalink: /teaching/
description: Hands-on activities and instructional materials, shared for reuse.
nav: true
nav_order: 4
horizontal: false
---

<!-- pages/teaching.md -->
<div class="projects">
{% raw %}{% assign sorted_teaching = site.teaching | sort: "importance" %}

{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for item in sorted_teaching %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
{% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for item in sorted_teaching %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endif %}{% endraw %}
</div>