---
layout: side
---

## art

<p style="text-align: center">Sporadic images</p>

{% include back.html %}

{% assign art = site.data.art | reverse %}
{% if art.size > 0 %}
<ul id="art">
  {% for thing in art %}
  <li>
    <a href="/art/{{ thing.file }}"><img src="/art/{{ thing.file }}"></a>
    <p><code>{{ thing.file }}</code> • {{ thing.date | date: '%Y %b %d' }}<br><a href="/art/{{ thing.file }}" download><i class="fas w-file-download"></i></a> {{ thing.short }}</p>
    {{ thing.desc | strip | markdownify }}
  </li>
  {% endfor %}
</ul>
{% endif %}
