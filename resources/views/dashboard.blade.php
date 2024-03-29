<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="{{ asset('css/gridstack.min.css')}}" rel="stylesheet"/>
    <link href="{{ asset('css/gridstack-extra.min.css')}}" rel="stylesheet"/>
    <link rel="stylesheet" href="{{ asset('css/app.css')}}">
    <title>Widgest</title>
</head>
<body>
    <div class="page">
        @include('sidenav')
        <main>
            <div class="grid-stack">
            </div>
        </main>
    </div>
    <script src="{{ asset('js/app.js')}}"></script>
</body>
</html>