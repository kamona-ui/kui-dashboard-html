<div class="flex items-center justify-between flex-shrink-0 px-3">
    <!-- Logo -->
    <a href="dashboard.html" class="inline-flex items-center gap-2">
        <x-logo aria-hidden="true" class="w-10 h-auto" />
        <span class="sr-only">Home</span>
    </a>

    <!-- Toggle button -->
    <x-button 
        type="button" 
        icon-only 
        sr-text="Toggle sidebar" 
        variant="secondary"
        x-show="isSidebarOpen || isSidebarHovered" 
        @click="isSidebarOpen = !isSidebarOpen"
    >
        <iconify-icon 
            x-show="!isSidebarOpen" 
            aria-hidden="true" 
            class="hidden lg:block" 
            icon="ant-design:menu-unfold-outlined"
            width="24"
        ></iconify-icon>

        <iconify-icon 
            x-show="isSidebarOpen" 
            aria-hidden="true" 
            class="hidden lg:block" 
            icon="ant-design:menu-fold-outlined"
            width="24"
        ></iconify-icon>

        <iconify-icon 
            aria-hidden="true" 
            class="lg:hidden" 
            icon="ant-design:close-outlined" 
            width="24"
        ></iconify-icon>
    </x-button>
</div>
