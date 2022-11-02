<x-page
    title="Dashboard"
    layout="dashboard"
>
    <x-slot:header>
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>

            <x-button 
                target="_blank" 
                href="https://github.com/kamona-ui/kui-dashboard-html" 
                variant="black"
                left-icon="ant-design:github-outlined"
                label="Star on Github"
            />
        </div>
    </x-slot:header>
</x-page>
