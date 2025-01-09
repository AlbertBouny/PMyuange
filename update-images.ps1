$files = Get-ChildItem -Path "docs" -Recurse -Filter "*.md"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace '!\[.*?\]\(.*?\.png\)', '![图片](/img/placeholder/image-placeholder.svg)'
    Set-Content $file.FullName $content -NoNewline
} 