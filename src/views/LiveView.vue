<template>
    <div class="live">
        <Header :left="true" :center="true" :centerText="'Live'" />
        <div class="live-wrapper">
          <div class="container">
            
          </div>
        </div>
    </div>
  </template>
  
  <script>
    import Header from '@/components/Header'
    export default {
        name: "LiveView",
        components: {
            Header,
        }
    };
  </script>
  
  <style>
    .live-iframe{
      max-height: 100%;
      max-width: 100%;
    }
    .videowrap {
      max-width: 720px;
      margin: 0 auto;
    }
    .videoblock {
      position: relative;
      padding-bottom: 56.25%; /*для видео из соотношением экрана 16:9*/
      height: 0;
      overflow: hidden;
      margin-bottom: 20px;
    }
    .videoblock iframe, object, embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  </style>