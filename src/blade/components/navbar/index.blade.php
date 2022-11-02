<nav
    aria-label="secondary"
    x-data="{ open: false }"
    class="sticky top-0 z-10 flex items-center justify-between px-4 py-4 sm:px-6 transition-transform duration-500 bg-white dark:bg-dark-eval-1"
    :class="{
        '-translate-y-full': scrollingDown,
        'translate-y-0': scrollingUp,
    }"
>
    <div class="flex items-center gap-3">
        <div class="md:hidden">
            <x-button
                type="button"
                icon-only
                variant="secondary"
                sr-text="Toggle dark mode"
                @click="toggleDarkMode()"
            >
            <iconify-icon 
                x-show="isDarkMode" 
                icon="heroicons:sun"
                width="24"
            ></iconify-icon>
            <iconify-icon 
                x-show="!isDarkMode" 
                icon="heroicons:moon"
                width="24"
            ></iconify-icon>
            </x-button>
        </div>
    </div>

    <div class="flex items-center gap-3">
        <div class="hidden md:inline-flex">
            <x-button
                icon-only
                type="button"
                variant="secondary"
                sr-text="Toggle dark mode"
                @click="toggleDarkMode()"
            >
                <iconify-icon 
                    x-show="isDarkMode" 
                    icon="heroicons:sun"
                    width="24"
                ></iconify-icon>
                <iconify-icon 
                    x-show="!isDarkMode" 
                    icon="heroicons:moon"
                    width="24"
                ></iconify-icon>
            </x-button>
        </div>

        <x-navbar.dropdown
            align="right"
            width="48"
        >
            <x-slot:trigger>
                <x-button
                    size="sm"
                    variant="secondary"
                    label="Ahmed Kamel"
                    right-icon="ant-design:caret-down-outlined"
                />
            </x-slot:trigger>

            <x-slot:content>
                <x-navbar.dropdown-link
                    href="#"
                >
                    Log Out
                </x-navbar.dropdown-link>
            </x-slot:content>
        </x-navbar.dropdown>
    </div>
</nav>

<div
    class="fixed inset-x-0 bottom-0 flex items-center justify-between px-4 py-4 sm:px-6 transition-transform duration-500 bg-white md:hidden dark:bg-dark-eval-1"
    :class="{
        'translate-y-full': scrollingDown,
        'translate-y-0': scrollingUp,
    }"
>
    <x-button
        icon-only
        icon="ant-design:search-outlined"
        type="button"
        variant="secondary"
        sr-text="Search"
    />

    <a href="dashboard.html">
        <x-logo
            aria-hidden="true"
            class="w-10 h-10"
        />

        <span class="sr-only">Home</span>
    </a>

    <x-button
        icon-only
        type="button"
        variant="secondary"
        sr-text="Open main menu"
        @click="isSidebarOpen = !isSidebarOpen"
    >
        <iconify-icon 
            x-show="!isSidebarOpen"
            icon="ant-design:menu-outlined"
            width="24"
        ></iconify-icon>
        <iconify-icon 
            x-show="isSidebarOpen"
            icon="ant-design:close-outlined"
            width="24"
        ></iconify-icon>
    </x-button>
</div>