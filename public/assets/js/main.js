(() => {
  // src/assets/js/main.js
  document.addEventListener("alpine:init", () => {
    Alpine.data("globalState", () => {
      const getTheme = () => {
        if (window.localStorage.getItem("dark")) {
          return JSON.parse(window.localStorage.getItem("dark"));
        }
        return !!window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      };
      const setTheme = (value) => {
        window.localStorage.setItem("dark", value);
      };
      let lastScrollTop = 0;
      const init = function() {
        window.addEventListener("scroll", () => {
          let st = window.pageYOffset || document.documentElement.scrollTop;
          if (st > lastScrollTop) {
            this.scrollingDown = true;
            this.scrollingUp = false;
          } else {
            this.scrollingDown = false;
            this.scrollingUp = true;
            if (st == 0) {
              this.scrollingDown = false;
              this.scrollingUp = false;
            }
          }
          lastScrollTop = st <= 0 ? 0 : st;
        });
      };
      return {
        init,
        isDarkMode: getTheme(),
        toggleDarkMode() {
          this.isDarkMode = !this.isDarkMode;
          setTheme(this.isDarkMode);
        },
        isSidebarOpen: window.innerWidth > 1024,
        isSidebarHovered: false,
        handleSidebarHover(value) {
          if (window.innerWidth < 1024) {
            return;
          }
          this.isSidebarHovered = value;
        },
        handleWindowResize() {
          if (window.innerWidth <= 1024) {
            this.isSidebarOpen = false;
          } else {
            this.isSidebarOpen = true;
          }
        },
        scrollingDown: false,
        scrollingUp: false
      };
    });
    Alpine.data("perfectScroll", () => {
      let ps;
      const update = () => {
        if (ps) {
          ps.update();
        }
      };
      return {
        init() {
          ps = new PerfectScrollbar(this.$el, {
            wheelSpeed: 2,
            wheelPropagation: false,
            minScrollbarLength: 20
          });
        },
        update
      };
    });
  });
})();
