---
title: 2021 Committee
layout: base
---

<div class="prose-std">
	<h1>{{ title }}</h1>
	<p>Meet the 2022 executive committee.</p>
</div>

<div class="flex flex-wrap justify-center left-0 w-screen">
{%- for item in exec %}
  <div class="md:w-1/4 lg:w-1/6 mx-2 mb-5 overflow-hidden bg-white rounded-lg shadow-lg">
    <img class="object-cover w-full h-96 md:h-56 lg:h-96 mt-0 mb-6" src="/assets/{{ item.photo }}" alt="avatar">
    <div class="py-5 text-center">
      <span class="block text-2xl font-bold text-gray-800">{{ item.name }}</span>
      <span class="block text-l font-bold text-gray-400">{{ item.title }}</span>
      <span class="text-sm text-gray-700">{{ item.bio }}</span>
    </div>
  </div>
{% endfor -%}
</div>



