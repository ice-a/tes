import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as d}from"./app-47834413.js";const s={},a=d(`<h1 id="neo4j" tabindex="-1"><a class="header-anchor" href="#neo4j" aria-hidden="true">#</a> neo4j</h1><h2 id="dockerfile-yaml" tabindex="-1"><a class="header-anchor" href="#dockerfile-yaml" aria-hidden="true">#</a> dockerfile.yaml</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># docker-compose.yaml
version: &quot;3&quot;
services:
  neo4j:
    image: neo4j
    volumes:

      - ./db/neo4j/conf:/var/lib/neo4j/conf:rw
      - ./db/neo4j/mnt:/var/lib/neo4j/import:rw
      - ./db/neo4j/plugins:/plugins:rw
      - ./db/neo4j/data:/data:rw
      - ./db/neo4j/logs:/var/lib/neo4j/logs:rw

    restart: always
    ports:

      - 7474:7474
      - 7687:7687

    environment:

      - NEO4J_dbms_memory_heap_maxSize=4G
      - NEO4J_AUTH=neo4j/123456 #修改默认用户密码

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> docker</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --publish=7474:7474 --publish=7687:7687 --name neo4j -d neo4j
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),l=[a];function r(c,o){return n(),i("div",null,l)}const m=e(s,[["render",r],["__file","docker_neo4j.html.vue"]]);export{m as default};
