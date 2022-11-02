<x-slot:sidebar-content>
    <x-sidebar.links />
</x-slot:sidebar-content>

<x-slot:navbar>
    <x-navbar />
</x-slot:navbar>

@if (isset($header))
    <x-slot:header>
        {{ $header }}
    </x-slot:header>
@endif
