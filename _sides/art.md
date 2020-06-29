---

---

## art

<p style="text-align: center">Sporadic images<br>
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" title="Creative Commons Attribution-ShareAlike 4.0 International License">CC BY-SA 4.0</a></p>

{% include back.html %}

{% assign art = site.data.art | reverse %}
{% if art.size > 0 %}
<ul id="art">
  {% for thing in art %}
  <li id="{{ thing.file | url_escape }}">
    <a href="/art/{{ thing.file }}"><img src="/art/{{ thing.file }}"></a>
    <p><a href="{{ canonical_url }}#{{ thing.file | url_escape }}"><code>{{ thing.file }}</code></a> • {{ thing.date | date: '%Y %b %d' }}<br><a href="/art/{{ thing.file }}" download><i class="fas w-file-download"></i></a> {{ thing.short }}</p>
    {{ thing.desc | strip | markdownify }}
  </li>
  {% endfor %}
</ul>
{% endif %}
