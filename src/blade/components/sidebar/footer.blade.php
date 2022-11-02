<div class="px-3 flex-shrink-0 lg:hidden">
    <x-button
        type="button"
        icon-only
        variant="secondary"
        x-show="!isSidebarOpen"
        @click="isSidebarOpen = !isSidebarOpen"
        sr-text="Toggle sidebar"
    >
        <iconify-icon
            x-show="isSidebarOpen" 
            icon="ant-design:menu-fold-outlined"
            width="24"
        ></iconify-icon>

        <iconify-icon
            x-show="!isSidebarOpen" 
            icon="ant-design:menu-unfold-outlined"
            width="24"
        ></iconify-icon>
    </x-button>
</div>
