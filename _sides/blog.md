---

---

## blog

<p style="text-align: center">Permanent writing repository</p>

{% if site.posts.size > 0 %}
<ul id="blog_index">
  {% for post in site.posts %}
  <li>
    <strong>{{ post.date | date: '%Y %b %d' }}</strong> - <a href="{{ post.url | absolute_url }}" title="{{ post.excerpt | strip_html | truncate: 40 }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>
{% endif %}
