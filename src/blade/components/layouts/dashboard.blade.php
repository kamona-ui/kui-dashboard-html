@props([
    'title' => null,
])

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    @if (isset($metaTags))
        {{ $metaTags }}
    @endif

    <link rel="icon" href="favicon.ico">

    <title>{{ $title ?? 'K UI Dashboard' }}</title>

    <!-- Fonts -->
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
    />

    @if (isset($beforeCss))
        {{ $beforeCss }}
    @endif

    <link rel="stylesheet" href="assets/css/vendor/perfect-scrollbar.css" />
    <link rel="stylesheet" href="assets/css/main.css" />

    @if (isset($afterCss))
        {{ $afterCss }}
    @endif

    <style>
        [x-cloak] { display: none !important; }
    </style>

    <!-- Alpine -->
    <script src="assets/js/vendor/alpinejs-collapse.min.js" defer></script>
    <script src="assets/js/vendor/alpinejs.min.js" defer></script>

    @if (isset($headerScripts))
        {{ $headerScripts }}
    @endif
</head>
<body class="font-sans antialiased">
    <div 
        x-data="globalState" 
        :class="{ dark: isDarkMode }" 
        @resize.window="handleWindowResize"
    >
        <div class="min-h-screen text-gray-900 bg-gray-100 dark:bg-dark-eval-0 dark:text-gray-100">
            <x-sidebar>
                @if (isset($sidebarContent))
                    {{ $sidebarContent }}
                @endif
            </x-sidebar>
            
            <div
                class="flex flex-col min-h-screen"
                :class="{
                    'lg:ml-64': isSidebarOpen,
                    'md:ml-16': !isSidebarOpen
                }"
                style="transition-property: margin; transition-duration: 150ms;"
            >
                @if (isset($navbar))
                    {{ $navbar }}
                @endif

                @if (isset($header))
                    <header>
                        <div class="p-4 sm:p-6">
                            {{ $header }}
                        </div>
                    </header>
                @endif

                <main @class([
                    'px-4 sm:px-6 flex-1 flex flex-col gap-6',
                    'mt-6' => isset($header)
                ])>
                    {{ $slot }}
                </main>

                <x-footer />
            </div>
        </div>
    </div>

    <script src="assets/js/vendor/iconify-icon.min.js"></script>
    <script src="assets/js/vendor/perfect-scrollbar.min.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>