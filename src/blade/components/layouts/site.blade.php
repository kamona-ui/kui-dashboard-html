@props([
    'title' => '',
])

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="favicon.ico">
    <title>{{ $title }}</title>

    <!-- Fonts -->
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />

    <!-- Styles -->
    <link rel="stylesheet" href="assets/css/main.css" />
    <link rel="stylesheet" href="assets/css/vendor/toasty.min.css" />

    <!-- Alpinejs -->
    <script src="assets/js/vendor/alpinejs.min.js" defer></script>

    <!-- Loading screen styles -->
    <style>
        #loading {
          position: fixed;
          perspective: 50vw;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          display: flex;
          z-index: 9000000000000;
          overflow: hidden;
        }
        #loading .left {
          background-color: black;
          width: 100%;
          height: 100%;
        }
        #loading .right {
          background-color: black;
          width: 100%;
          height: 100%;
        }
        #loading .logo {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        #loading .logo svg {
          height: 50vh;
        }
    </style>
</head>
<body class="font-sans antialiased">
    <!--  Loading  -->
    <div id="loading">
        <div class="left"></div>
        <div class="right"></div>
        <div class="logo">
          <x-logo />
        </div>
    </div>

    <div :class="{ dark: isDarkMode }" x-data="globalState">
        <div class="min-h-screen text-gray-900 bg-white dark:bg-dark-eval-0 dark:text-gray-100">
            <!--  Navbar  -->
            <nav
                class="fixed inset-x-0 bottom-0 z-20 transition-all duration-500 md:top-0 md:bottom-auto"
                :class="{
                    'shadow-t-lg md:shadow-lg bg-white dark:bg-gray-700 translate-y-full md:-translate-y-full': scrollingDown,
                    'shadow-t-lg md:shadow-lg bg-white dark:bg-gray-700': scrollingUp,
                }"
            >
                <div
                    class="relative flex items-center justify-between p-4 mx-auto max-w-7xl md:h-24"
                >
                    <!--  Logo  -->
                    <a href="/" class="inline-block p-2 bg-white rounded-md dark:bg-dark-eval-1">
                        <span class="sr-only">Home</span>
                        <x-logo aria-hidden="true" class="w-10 h-auto md:w-12" />
                    </a>

                    <!--  Toggle dark mode button  -->
                    <x-button 
                      @click="toggleDarkMode()"
                      icon-only
                      sr-text="Toggle dark mode"
                      variant="secondary"
                    >
                      <iconify-icon 
                        x-show="!isDarkMode" 
                        icon="heroicons:sun"
                        width="24"
                      ></iconify-icon>
                      <iconify-icon 
                        x-show="isDarkMode" 
                        icon="heroicons:moon"
                        width="24"
                      ></iconify-icon>
                    </x-button>
                </div>
            </nav>
    
            <main>
                {{ $slot }}
            </main>
        </div>
    </div>

    <script src="assets/js/vendor/iconify-icon.min.js"></script>
    <script src="assets/js/vendor/toasty.min.js"></script>
    <script src="assets/js/vendor/gsap.min.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/landing-page.js"></script>
</body>
</html>
