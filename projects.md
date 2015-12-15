---
layout: page
title: Projects
permalink: /projects/
---

<div class="container">
  {% for project in site.projects %}
    <h2>{{project.name}}</h2>
    <small>{{project.status}}</small>
    {{project.content}}
  {% endfor %}
</div>

<div class="container">
  <h2>Do you also want to be a part of this community?</h2>
  <p>We welcome volonteers from all backgrounds to get involved with Refugee Tech. If you have a skill or relevant experience that can help us reach our goal of affecting positive change in the lives of refugees, we want to hear from you.</p>
</div>
