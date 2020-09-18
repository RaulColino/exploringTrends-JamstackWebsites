<template>
  <div id="page-container">
    <div id="content-wrap">
      <!-- all other page content -->
    </div>
    <footer id="footer">
      <div class="container bottom-0 mx-auto flex items-center justify-between py-8 px-8">
        <div>
          Copyright © {{ new Date().getFullYear() }}. Made by
          <a href="//#">Raul CS</a>
        </div>
        <ul class="flex items-center">
          <li class="ml-8">
            <a href="#">A</a>
          </li>
          <li class="ml-8">
            <a href="#">A</a>
          </li>
          <li class="ml-8">
            <a href="#">A</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
  <!--
  <footer class="absolute bottom-0 h-8 bg-white text-gray-500">
    <div class="container bottom-0 mx-auto flex items-center justify-between py-8 px-8">
      <div>
        Copyright © {{ new Date().getFullYear() }}. Made by
        <a href="//#">Raul CS</a>
      </div>
      <ul class="flex items-center">
          <li class="ml-8">
              <a href="#">A</a>
          </li>
          <li class="ml-8">
              <a href="#">A</a>
          </li>
          <li class="ml-8">
              <a href="#">A</a>
          </li>
      </ul>
    </div>
  </footer>-->
</template>


<style>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;
}

#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 2.5rem; /* Footer height */
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem; /* Footer height */
}
</style>
