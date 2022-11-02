@props([
    'title' => null,
])

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="favicon.ico">
    <title>{{ $title ?? 'K UI Dashboard' }}</title>
</head>
<body>
    {{ $slot }}

    <script src="assets/js/vendor/iconify-icon.min.js"></script>
</body>
</html>