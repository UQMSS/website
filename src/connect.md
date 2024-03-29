---
title: Connect
layout: main
socials: 
  - name: Discord
    link: https://l.uqmss.org/discord
    description: Join to socialise with other math students!
    icon: discord
  - name: Facebook
    link: https://facebook.com/uqmss
    description: Follow us to keep up to date!
    icon: facebook-square
  - name: Instagram
    link: https://www.instagram.com/uq.mss
    description: Follow us for updates and photos!
    icon: instagram
---

MSS exists for its members. We hold a range of events for anyone studying or interested in maths. You can connect with us on our socials below.

<div class="flex flex-wrap justify-center left-0 w-full">
{%- for item in socials %}
  <a href="{{ item.link }}" class="w-48 m-2 overflow-hidden bg-white rounded-lg shadow-lg !no-underline">
  	<div class="text-8xl text-center p-5 text-mss-blue">
      <i class="fab fa-{{ item.icon }} text-[80px]"></i>
    </div>
    <div class="py-5 px-2 text-center leading-tight">
      <span class="block text-2xl font-bold text-gray-800">{{ item.name }}</span>
      <span class="text-sm text-gray-700">{{ item.description }}</span>
    </div>
  </a>
{% endfor -%}
</div>

## Committee

You can contact our [committee](/exec) at [contact@uqmss.org](mailto:contact@uqmss.org). 


