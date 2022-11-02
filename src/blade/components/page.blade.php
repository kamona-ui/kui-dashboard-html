@props([
    'title' => null,
    'layout' => 'dashboard'
])

<x-dynamic-component 
    :component="'layouts.' . $layout"
    :title="$title"
>
    @if (isset($metaTags))
        <x-slot:meta-tags>
            {{ $metaTags }}
        </x-slot:meta-tags>
    @endif

    @if (isset($beforeCss))
        <x-slot:before-css>
            {{ $beforeCss }}
        </x-slot:before-css>
    @endif

    @if (isset($afterCss))
        <x-slot:after-css>
            {{ $afterCss }}
        </x-slot:after-css>
    @endif

    @if (isset($headerScripts))
        <x-slot:header-scripts>
            {{ $headerScripts }}
        </x-slot:header-scripts>
    @endif

    @includeWhen($layout == 'dashboard', 'partials.dashboard-layout-partial')

    {{ $slot }}

    @if (isset($beforeScripts))
        <x-slot:before-scripts>
            {{ $beforeScripts }}
        </x-slot:before-scripts>
    @endif
</x-dynamic-component>