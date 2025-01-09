Get-ChildItem -Path "docs" -Recurse -Filter "*.md" | ForEach-Object {
    (Get-Content $_.FullName) | ForEach-Object {
        $_ -replace '!\[([^\]]*)\]\([^)]*\)', '![$1](/img/placeholder/image-placeholder.svg)'
    } | Set-Content $_.FullName
} 