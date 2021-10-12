---
title: Events Calendar
layout: main
---

Below are our upcoming events.

<div class="flex flex-wrap justify-center left-0">
{%- for event in events.data %}
  <div class="mx-2 mb-5 bg-white rounded-lg shadow-lg flex">
	{% Image event.cover.source, "event banner", "w-1/3 mx-5 my-0 flex-shrink-0" %}
    <div class="mt-5 mr-2">
      <span class="block text-2xl font-bold text-gray-800">{{ event.name }}</span>
      <span class="text-sm text-gray-700">{{ event.description }}</span>
    </div>
  </div>
{% endfor -%}
</div>

