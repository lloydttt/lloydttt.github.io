widget_library_sticky:
  - class_name: historyToday
    id_name: historyToday
    order: -1
    name: 历史上的今天
    icon: fas fa-calendar-week
    icon_color: '#d63130'
    url: http://baidu.com
    background: '#fff'
    html: '
      <div id="myHistorySwiper" @mouseenter="stopAutoPlay()" @mouseleave="startAutoPlay()">
        <swiper class="myhistoryswiper" ref="myhistoryswiper" style="height:80px;" :options="swiperOption">
          <swiper-slide v-for="(item, index) in content" :key="index">
            
          </swiper-slide>
        </swiper>
      </div>
      <script defer src="/historyToday/index.js"></script>
    '