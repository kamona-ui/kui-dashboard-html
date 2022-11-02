@props([
    'iconOnly' => false,
    'srText' => '',
    'icon' => null,
    'leftIcon' => null,
    'rightIcon' => null,
    'width' => '24'
])

@if ($leftIcon)
    <iconify-icon 
        aria-hidden="true"
        icon="{{ $leftIcon }}"
        width="{{ $width }}"
    ></iconify-icon>
@endif

{{ $slot }}

@if ($rightIcon)
    <iconify-icon 
        aria-hidden="true"
        icon="{{ $rightIcon }}"
        width="{{ $width }}"
    ></iconify-icon>
@endif

@if($iconOnly)
    <span class="sr-only">{{ $srText }}</span>

    @if ($icon)
        <iconify-icon 
            aria-hidden="true"
            icon="{{ $icon }}"
            width="{{ $width }}"
        ></iconify-icon>
    @endif
@endif
