<x-page
    title="K UI Dashboard"
    layout="site"
>
    <h1 class="sr-only">K UI Admin Dashboard Template</h1>

    <section class="relative min-h-screen overflow-hidden bg-gradient-to-tr from-purple-500 via-blue-300 to-indigo-400 dark:from-purple-900 dark:via-blue-900 dark:to-indigo-800">
        <h2 class="sr-only">Showcase</h2>
        <!--  Background  -->
        <div class="absolute inset-x-[-10vw] top-0 bottom-20 md:bottom-0 md:top-24 rounded-[77vw/50vw] rounded-t-none md:rounded-b-none md:rounded-[77vw/50vw] bg-white dark:bg-dark-eval-0"></div>

        <div class="px-6 pb-24 mx-auto md:pt-28 max-w-7xl">
            <div class="grid gap-5 perspective-100vw md:grid-cols-4 md:grid-rows-1">
                {{--  Left  --}}
                <div class="items-center justify-center hidden md:flex transform-style-3d">
                    <div
                        id="mobile2Showcase"
                        class="flex items-center justify-center w-full h-full rotate-x-25 rotate-y-25 rotate-z--15"
                    >
                        <img x-show="!isDarkMode" src="assets/images/showcase/mobile-light-2.svg" class="h-auto w-[70%] drop-shadow-2xl" />
                        <img x-show="isDarkMode" src="assets/images/showcase/mobile-dark-2.svg" class="h-auto w-[70%] drop-shadow-2xl" />
                    </div>
                </div>

                {{--  Center  --}}
                <div class="flex flex-col items-center justify-center col-span-3 row-start-2 gap-10 transform-style-3d md:pb-18 md:row-start-1 md:col-span-2 md:col-start-2">
                    <div class="flex items-center justify-center mt-10 md:mt-4 transform-style-3d">
                        <img
                            x-show="!isDarkMode"
                            id="desktopShowcase"
                            class="rotate-x-15 w-[75%] md:w-full"
                            src="assets/images/showcase/desktop-light.svg"
                            alt="Desktop showcase"
                        />
                        <img
                            x-show="isDarkMode"
                            id="desktopShowcase"
                            class="rotate-x-15 w-[75%] md:w-full"
                            src="assets/images/showcase/desktop-dark.svg"
                            alt="Desktop showcase"
                        />
                    </div>

                    <!-- CTA Buttons  -->
                    <div class="flex flex-col items-center justify-center gap-6 lg:flex-row">
                        <!-- Live preview button -->
                        <x-button 
                            variant="primary"
                            href="dashboard.html"
                            left-icon="ant-design:eye-outlined"
                        >
                            <span class="whitespace-nowrap">Live Preview</span>
                        </x-button>

                        <!-- Github link -->
                        <x-button 
                            variant="black"
                            href="https://github.com/kamona-ui/kui-dashboard-html"
                            target="_blank"
                            left-icon="ant-design:github-outlined"
                        >
                            <span class="whitespace-nowrap">Github</span>
                        </x-button>
                    </div>
                </div>

                {{--  Right  --}}
                <div class="items-center justify-center hidden md:flex transform-style-3d">
                    <div
                        id="mobile1Showcase"
                        class="flex items-center justify-center w-full h-full rotate-x-25 rotate-y--25 rotate-z-15"
                    >
                        <img x-show="!isDarkMode" src="assets/images/showcase/mobile-light.svg" class="h-auto w-[70%] drop-shadow-2xl" />
                        <img x-show="isDarkMode" src="assets/images/showcase/mobile-dark.svg" class="h-auto w-[70%] drop-shadow-2xl" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</x-page>
